import json
import os
from colorama import Fore, init

init(autoreset=True)  # Initialize colorama

def load_json(filename):
    try:
        with open(filename, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        print(f"{Fore.RED}Error: File '{filename}' not found.")
        exit(1)
    except json.JSONDecodeError:
        print(f"{Fore.RED}Error: File '{filename}' contains invalid JSON.")
        exit(1)

def find_recipe_info(food_name, food_items):
    for food_item in food_items:
        if food_name in food_item['produced_by']:
            return food_item['food_item_name'], food_item['hidden_effects']
    raise ValueError(f"No matching recipe found for {food_name}")


def process_scraped_data():

    cooking_ingredients = load_json('data\\Cooking_ingredients.json')
    plans = load_json('data\\Plants.json')
    fish = load_json('data\\Fish.json')
    others = load_json('data\\Others.json')
    food_items = load_json('data\\Food_items.json')


    rarity_mapping = {}
    ingredient_type_mapping = {}

    # Populate mapping
    for food_ingredients in plans + fish + others:
        rarity_mapping[food_ingredients['food_name']] = food_ingredients['rarity']
        ingredient_type_mapping[food_ingredients['food_name']] = food_ingredients['type']

    # Update cooking ingredients with new fields
    for ingredient in cooking_ingredients:
        food_name = ingredient['food_name']

        if food_name not in rarity_mapping or food_name not in ingredient_type_mapping:
            print(f"{Fore.RED}Error: '{food_name}' not found in rarity or ingredient type mapping.")
            exit(1)

        ingredient['rarity'] = rarity_mapping[food_name]
        ingredient['ingredient_type'] = ingredient_type_mapping[food_name]

        try:
            recipe_type, hidden_effects = find_recipe_info(food_name, food_items)
            ingredient['recipe_type'] = recipe_type
            ingredient['hidden_effects'] = hidden_effects
        except ValueError as e:
            print(f"{Fore.RED}{e}")
            exit(1)


    json_folder = 'json'
    if not os.path.exists(json_folder):
        os.makedirs(json_folder)
        print(f"{Fore.GREEN}Created directory: {json_folder}")

    output_file = f'{json_folder}/cooking_ingredients.json'
    with open(output_file, 'w') as outfile:
        json.dump(cooking_ingredients, outfile, indent=4)

    print(f"{Fore.GREEN}Updated Cooking Ingredients JSON has been created: {output_file}")


if __name__ == '__main__':
    process_scraped_data()