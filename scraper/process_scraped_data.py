import json
import os
import re
from collections import defaultdict
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

def parse_effect(effect_string):
    # Regular expressions to parse different types of effects
    patterns = [
        # Example: "+11 food"
        (r"(\+\d+) food", "food", "food"),
        # Example: "+6% critical hit chance"
        (r"(\+\d+)%?\s*critical hit chance", "crit_chance", "%"),
        # Example: "+2.8 health every sec for 20 sec"
        (r"(\+\d+\.?\d*) health every sec for (\d+) sec", "health_regen", "health/sec"),
        # Example: "+2 life on melee hit for 2 min"
        (r"(\+\d+) life on melee hit for (\d+) min", "life_on_hit", "life/min"),
        # Example: "+25 max health (only once)"
        (r"(\+\d+) max health \(\w+\s\w+\)", "permanent_max_health", "health"),
        # Example: "+25 max health"
        (r"(\+\d+) max health", "max_health", "health"),
        # Example: "+13.3% damage for 10 min"
        (r"(\+\d+\.?\d*)% damage for (\d+) min", "damage", "%"),
        # Example: "+25% more healing from health over time regeneration for 10 min"
        (r"(\+\d+\.?\d*)% more healing from health over time regeneration for (\d+) min", "healing_boost", "%"),
        # Example: "+4 blue glow for 1 min"
        (r"(\+\d+) blue glow for (\d+) min", "blue_glow", "glow/min"),
        # Example: "+1.4 mana every sec for 10 min"
        (r"(\+\d+\.?\d*) mana every sec for (\d+) min", "mana_regen", "mana/sec"),
        # Example: "-11 health"
        (r"(-\d+) health", "health_loss", "health"),
        # Example: "+21% movement speed for 1 min"
        (r"(\+\d+\.?\d*)% movement speed for (\d+) min", "movement_speed", "%"),
        # Example: "+23 armor for 10 min"
        (r"(\+\d+) armor for (\d+) min", "armor", "armor"),
        # Example: "+6% reduced damage taken from bosses for 10 min"
        (r"(\+\d+\.?\d*)% reduced damage taken from bosses for (\d+) min", "reduced_damage_bosses", "%"),
        # Example: "+22.4% physical range damage for 10 min"
        (r"(\+\d+\.?\d*)% physical range damage for (\d+) min", "physical_range_damage", "%"),
        # Example: "+22.4% physical melee damage for 10 min"
        (r"(\+\d+\.?\d*)% physical melee damage for (\d+) min", "physical_melee_damage", "%"),
        # Example: "+45 mining damage for 10 min"
        (r"(\+\d+) mining damage for (\d+) min", "mining_damage", "damage"),
        # Example: "+4 glow for 10 min"
        (r"(\+\d+) glow for (\d+) min", "glow", "glow"),
        # Example: "+30% magic damage for 10 min"
        (r"(\+\d+\.?\d*)% magic damage for (\d+) min", "magic_damage", "%"),
        # Example: "+30% minion damage for 10 min"
        (r"(\+\d+\.?\d*)% minion damage for (\d+) min", "minion_damage", "%"),
        # Example: "+25 max mana for 10 min"
        (r"(\+\d+) max mana for (\d+) min", "max_mana", "mana"),
        # Example: "+8.9% melee attack speed for 10 min"
        (r"(\+\d+\.?\d*)% melee attack speed for (\d+) min", "melee_attack_speed", "%"),
        # Example: "+18% knockback chance for 2 min"
        (r"(\+\d+\.?\d*)% knockback chance for (\d+) min", "knockback_chance", "%"),
        # Example: "+14% damage against bosses for 1 min"
        (r"(\+\d+\.?\d*)% damage against bosses for (\d+) min", "damage_against_bosses", "%"),
        # Example: "+10% less food drained when running for 10 min"
        (r"(\+\d+\.?\d*)% less food drained when running for (\d+) min", "less_food_drained_running", "%"),
        # Example: "+8.4% range attack speed for 10 min"
        (r"(\+\d+\.?\d*)% range attack speed for (\d+) min", "range_attack_speed", "%"),
        # Example: "+7.2% mining speed for 10 min"
        (r"(\+\d+\.?\d*)% mining speed for (\d+) min", "mining_speed", "%"),
        # Example: "+49 magic barrier for 10 min"
        (r"(\+\d+) magic barrier for (\d+) min", "magic_barrier", "barrier"),
        # Example: "+55.2% minion attack speed for 10 min"
        (r"(\+\d+\.?\d*)% minion attack speed for (\d+) min", "minion_attack_speed", "%"),
        # Example: "+20 health every sec to you and all nearby allies for 20 sec"
        (r"(\+\d+) health every sec to you and all nearby allies for (\d+) sec", "health_regen_allies", "health/sec"),
        # Example: "Immune to being slowed by slime for 10 min"
        (r"Immune to being slowed by \w+ for (\d+) min", "immune_to_slow", None),
        # Example: "Immune to acid damage for 10 min"
        (r"Immune to \w+ damage for (\d+) min", "immune_to_damage", None),
        # Example: "Immune to mold infection for 10 min"
        (r"Immune to \w+ infection for (\d+) min", "immune_to_infection", None),
        # Example: "+15 thorns damage for 10 min"
        (r"(\+\d+) thorns damage for (\d+) min", "thorns_damage", "damage"),
        # Example: "+63 fishing for 10 min"
        (r"(\+\d+) fishing for (\d+) min", "fishing", "fishing"),
        # Example: "+31% critical hit damage for 10 min"
        (r"(\+\d+\.?\d*)% critical hit damage for (\d+) min", "critical_hit_damage", "%"),
        # Example: "+11% dodge chance for 10 min"
        (r"(\+\d+\.?\d*)% dodge chance for (\d+) min", "dodge_chance", "%"),
        # Example: "Immune to burning for 10 min"
        (r"Immune to burning for (\d+) min", "immune_to_burning", None),
        # Example: "+8.5% melee and range attack speed for 10 min"
        (r"(\+\d+\.?\d*)% melee and range attack speed for (\d+) min", "melee_and_range_attack_speed", "%"),
        # Example: "+30.9% damage dealt by your pet for 10 min"
        (r"(\+\d+\.?\d*)% damage dealt by your pet for (\d+) min", "pet_damage", "%"),
        # Example: "+12% minion critical hit chance for 10 min"
        (r"(\+\d+\.?\d*)% minion critical hit chance for (\d+) min", "minion_critical_hit_chance", "%"),


    ]

    for pattern, effect_type, unit in patterns:
        match = re.search(pattern, effect_string)
        if match:
            value = float(match.group(1))
            if len(match.groups()) > 1:
                duration = int(match.group(2)) * 60  # Convert minutes to seconds if needed
            else:
                duration = None
            return {
                "type": effect_type,
                "value": value,
                "unit": unit,
                "duration": duration
            }
    print(f"{Fore.RED}Error: 'could not parse effect for: {effect_string}")
    exit(1)

def normalize_effects(effects_list):
    normalized = []
    for effect in effects_list:
        parsed_effect = parse_effect(effect)
        if parsed_effect:
            normalized.append(parsed_effect)
    return normalized

def categorize_effects(normalized_effects):
    categories = set()
    for effect in normalized_effects:
        categories.add(effect['type'])
    return list(categories)

def save_to_json(data, filename):
    """Save the data to a JSON file."""

    json_folder = 'json'
    if not os.path.exists(json_folder):
        os.makedirs(json_folder)
        print(f"{Fore.GREEN}Created directory: {json_folder}")

    json_file_path = os.path.join(json_folder, filename + '.json')

    try:
        with open(json_file_path, 'w') as json_file:
            json.dump(data, json_file, indent=4)
        print(f'{Fore.GREEN}\n==[ Successfully saved {filename} data to {json_file_path} ]==\n')
    except Exception as e:
        print(f"{Fore.RED}Failed to save data to {json_file_path}: {e}")


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



    # Initialize the effect index
    effect_index = defaultdict(list)

    # Process each ingredient
    for ingredient in cooking_ingredients:
        # Normalize effects and base cooked effects
        ingredient['effects'] = normalize_effects(ingredient.get('effects', []))
        ingredient['base_cooked_effects'] = normalize_effects(ingredient.get('base_cooked_effects', []))

        # Categorize the effects for easy filtering
        ingredient['categories'] = categorize_effects(ingredient['effects'] + ingredient['base_cooked_effects'])

        # Add to effect index
        for category in ingredient['categories']:
            effect_index[category].append(ingredient['food_name'])


    save_to_json(cooking_ingredients,'cooking_ingredients')
    save_to_json(effect_index,'effect_index')

if __name__ == '__main__':
    process_scraped_data()