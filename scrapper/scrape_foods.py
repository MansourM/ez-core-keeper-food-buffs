import os
import requests
from bs4 import BeautifulSoup
import json
from colorama import Fore, Style, init

init(autoreset=True)  # Initialize colorama


def process_table_data(soup, table_id):
    """Fetch data from a table and download associated images."""

    heading = soup.find('span', {'id': table_id})
    if not heading:
        print(f"{Fore.YELLOW}Warning: No heading found for table ID '{table_id}'")
        return []

    table = heading.find_next('table', {'class': 'fandom-table'})
    if not table:
        print(f"{Fore.YELLOW}Warning: No table found for heading '{table_id}'")
        return []

    data = []
    for row in table.find('tbody').find_all('tr'):

        if row.find('th'):
            print(
                f"{Fore.YELLOW}Warning: Skipping row (appears to be a header or invalid). Content: {row.get_text(separator='|', strip=True)}")
            continue

        columns = row.find_all('td')

        if columns and len(columns) >= 3:
            food_name = columns[0].text.strip()
            effects = [effect.strip() for effect in columns[1].find_all(string=True) if effect.strip()]
            base_cooked_effects = (
                [effect.strip() for effect in columns[2].find_all(string=True) if effect.strip()]
                if len(columns) > 3 else []
            )
            sell_value = columns[-1].text.strip()

            img_tag = columns[0].find('img')
            img_filename = download_image(img_tag)

            data.append({
                'food_name': food_name,
                'effects': effects,
                'base_cooked_effects': base_cooked_effects,
                'sell_value': sell_value,
                'image_file_path': img_filename
            })

            print(f'{Fore.CYAN}{len(data)}. {food_name}')

        else:
            print(
                f"{Fore.YELLOW}Warning: Skipping row, as it does not have enough columns. Row content: {row.get_text(separator='|', strip=True)}")

    save_to_json(data, table_id)
    print(f'{Fore.GREEN}\n==[ Successfully saved {table_id} data to {table_id}.json ]==\n')

    return data


def download_image(img_tag):
    image_folder = 'images'
    if not os.path.exists(image_folder):
        os.makedirs(image_folder)

    img_url = img_tag.get("data-src") or img_tag.get("src")

    if not img_url:
        print(f"{Fore.YELLOW}Warning: Image URL not found.")
        return ""

    if img_url.startswith("data:image"):
        print(f"{Fore.YELLOW}Warning: Skipping base64 encoded image.")
        return ""  # TODO parse base64 img later?

    img_file_path = os.path.join(image_folder, img_tag["data-image-key"])

    try:
        downloaded_image = requests.get(img_url, stream=True)
        downloaded_image.raise_for_status()  # Raise an error for bad status codes

        with open(img_file_path, "wb") as file:
            for chunk in downloaded_image.iter_content(1024):
                file.write(chunk)

        return img_file_path

    except requests.exceptions.RequestException as e:
        print(f"{Fore.RED}Failed to download image {img_url}: {e}")
        return ""

    except Exception as e:
        print(f"{Fore.RED}Error saving image {img_file_path}: {e}")
        return ""


def save_to_json(data, filename):
    """Save the data to a JSON file."""

    data_folder = 'data'
    if not os.path.exists(data_folder):
        os.makedirs(data_folder)

    json_file_path = os.path.join(data_folder, filename + '.json')

    try:
        with open(json_file_path, 'w') as json_file:
            json.dump(data, json_file, indent=4)
    except Exception as e:
        print(f"{Fore.RED}Failed to save data to {json_file_path}: {e}")


if __name__ == '__main__':

    url = 'https://core-keeper.fandom.com/wiki/Foods'
    try:
        downloaded_page = requests.get(url)
        downloaded_page.raise_for_status()
        soup = BeautifulSoup(downloaded_page.content, 'html.parser')
    except requests.exceptions.RequestException as e:
        print(f"{Fore.RED}Failed to download page content: {e}")
        exit(1)

    basic_foods = process_table_data(soup, 'Basic')
    cooking_ingredients = process_table_data(soup, 'Cooking_ingredients')
    unobtainable_foods = process_table_data(soup, 'Unobtainable')
