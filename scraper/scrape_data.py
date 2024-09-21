import json
import os

import requests
from bs4 import BeautifulSoup
from colorama import Fore, init

init(autoreset=True)  # Initialize colorama


def process_food_table_data(soup, table_id):
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
            wiki_url = columns[0].find('a')['href'] if columns[0].find('a') else ""
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
                'image_file_path': img_filename,
                'wiki_url': wiki_url
            })

            print(f'{Fore.CYAN}{len(data)}. {food_name}')

        else:
            print(
                f"{Fore.YELLOW}Warning: Skipping row, as it does not have enough columns. Row content: {row.get_text(separator='|', strip=True)}")

    save_to_json(data, table_id)
    print(f'{Fore.GREEN}\n==[ Successfully saved {table_id} data to {table_id}.json ]==\n')

    return data


def process_cooking_table_data(soup, table_id):
    """Fetch cooking data from a table and download associated images."""

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

            full_name = columns[0].text.strip()
            # Split the name into main name and adjective/noun
            if '•' in full_name:
                food_name = full_name.split('(')[0].strip()
                adjective_noun = full_name.split('(')[1].replace(')', '').strip().split(' • ')
                adjective = adjective_noun[0] if len(adjective_noun) > 0 else ''
                noun = adjective_noun[1] if len(adjective_noun) > 1 else ''
            else:
                food_name = full_name
                adjective, noun = '', ''

            base_cooked_effects = (
                [effect.strip() for effect in columns[1].find_all(string=True) if effect.strip()]
                if len(columns) > 2 else []
            )
            rarity = columns[2].text.strip()
            food_type = table_id

            data.append({
                'food_name': food_name,
                'adjective': adjective,
                'noun': noun,
                'base_cooked_effects': base_cooked_effects,
                'rarity': rarity,
                'type': food_type
            })

            print(f'{Fore.CYAN}{len(data)}. {food_name}')

        else:
            print(
                f"{Fore.YELLOW}Warning: Skipping row, as it does not have enough columns. Row content: {row.get_text(separator='|', strip=True)}")

    save_to_json(data, table_id)
    print(f'{Fore.GREEN}\n==[ Successfully saved {table_id} data to {table_id}.json ]==\n')

    return data


def process_cooking_food_items_table_data(soup):
    """Fetch cooking food items data from a table and download associated images."""

    table_id = 'Food_items'

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

            food_item_name = columns[0].text.strip()

            img_tag = columns[0].find('img')
            img_file_path = download_image(img_tag)

            produced_by = [item.text.strip() for item in columns[1].find_all('a') if item.text.strip()]
            hidden_effects = columns[2].text.strip()

            data.append({
                'food_item_name': food_item_name,
                'produced_by': produced_by,
                'hidden_effects': hidden_effects,
                'img_file_path': img_file_path
            })

            print(f'{Fore.CYAN}{len(data)}. {food_item_name}')

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


def get_page_soup(url):
    try:
        downloaded_page = requests.get(url)
        downloaded_page.raise_for_status()
        return BeautifulSoup(downloaded_page.content, 'html.parser')
    except requests.exceptions.RequestException as e:
        print(f"{Fore.RED}Failed to download page content: {e}")
        exit(1)


def scrape_data():
    food_soup = get_page_soup('https://core-keeper.fandom.com/wiki/Foods')

    food_basic = process_food_table_data(food_soup, 'Basic')
    food_cooking_ingredients = process_food_table_data(food_soup, 'Cooking_ingredients')
    food_unobtainable = process_food_table_data(food_soup, 'Unobtainable')

    cooking_soup = get_page_soup('https://core-keeper.fandom.com/wiki/Cooking')

    cooking_others = process_cooking_table_data(cooking_soup, 'Others')
    cooking_plants = process_cooking_table_data(cooking_soup, 'Plants')
    cooking_fish = process_cooking_table_data(cooking_soup, 'Fish')

    cooking_food_items = process_cooking_food_items_table_data(cooking_soup)


if __name__ == '__main__':
    scrape_data()
