import os
import re
from collections import defaultdict
from colorama import Fore, init

import json

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
    # (regex, index_key, unit, reconstructor)
    patterns = [
        # Health related patterns
        # Example: "+25 max health (only once)"
        (r"(\+\d+) max health \(only once\)", "permanent max health", "health",
         '`+${data.value} max health (only once)`;'),
        # Example: "+25 max health for 10 min"
        (r"(\+\d+) max health for (\d+) (sec|min)", "max health", "health",
         '`+${data.value} max health for ${formatDuration(data.duration)}`;'),
        # Example: "-11 health"
        (r"(-\d+) health", "health_loss", "health",
         '`${data.value} health`;'),
        # Example: "+2.8 health every sec for 20 sec"
        (r"(\+\d+\.?\d*) health every sec for (\d+) (sec|min)", "health regen", "health/sec",
         '`+${data.value.toFixed(1)} health every sec for ${formatDuration(data.duration)}`;'),
        # Example: "+20 health every sec to you and all nearby allies for 20 sec"
        (r"(\+\d+) health every sec to you and all nearby allies for (\d+) (sec|min)", "health regen allies",
         "health/sec",
         '`+${data.value} health every sec to you and all nearby allies for ${formatDuration(data.duration)}`;'),
        # Example: "+2 life on melee hit for 2 min"
        (r"(\+\d+) life on melee hit for (\d+) (sec|min)", "life on hit", "life/min",
         '`+${data.value} life on melee hit for ${formatDuration(data.duration)}`;'),
        # Example: "+25% more healing from health over time regeneration for 10 min"
        (r"(\+\d+\.?\d*)% more healing from health over time regeneration for (\d+) (sec|min)", "more healing", "%",
         '`+${data.value}% more healing from health over time regeneration for ${formatDuration(data.duration)}`;'),

        # Mana related patterns
        # Example: "+25 max mana for 10 min"
        (r"(\+\d+) max mana for (\d+) (sec|min)", "max mana", "mana",
         '`+${data.value} max mana for ${formatDuration(data.duration)}`;'),
        # Example: "+1.4 mana every sec for 10 min"
        (r"(\+\d+\.?\d*) mana every sec for (\d+) (sec|min)", "mana regen", "mana/sec",
         '`+${data.value.toFixed(1)} mana every sec for ${formatDuration(data.duration)}`;'),

        # Damage related patterns
        # Example: "+13.3% damage for 10 min"
        (r"(\+\d+\.?\d*)% damage for (\d+) (sec|min)", "damage", "%",
         '`+${data.value}% damage for ${formatDuration(data.duration)}`;'),
        # Example: "+22.4% physical range damage for 10 min"
        (r"(\+\d+\.?\d*)% physical range damage for (\d+) (sec|min)", "physical range damage", "%",
         '`+${data.value}% physical range damage for ${formatDuration(data.duration)}`;'),
        # Example: "+22.4% physical melee damage for 10 min"
        (r"(\+\d+\.?\d*)% physical melee damage for (\d+) (sec|min)", "physical melee damage", "%",
         '`+${data.value}% physical melee damage for ${formatDuration(data.duration)}`;'),
        # Example: "+30% magic damage for 10 min"
        (r"(\+\d+\.?\d*)% magic damage for (\d+) (sec|min)", "magic damage", "%",
         '`+${data.value}% magic damage for ${formatDuration(data.duration)}`;'),
        # Example: "+30% minion damage for 10 min"
        (r"(\+\d+\.?\d*)% minion damage for (\d+) (sec|min)", "minion damage", "%",
         '`+${data.value}% minion damage for ${formatDuration(data.duration)}`;'),
        # Example: "+14% damage against bosses for 1 min"
        (r"(\+\d+\.?\d*)% damage against bosses for (\d+) (sec|min)", "damage against bosses", "%",
         '`+${data.value}% damage against bosses for ${formatDuration(data.duration)}`;'),
        # Example: "+6% reduced damage taken from bosses for 10 min"
        (r"(\+\d+\.?\d*)% reduced damage taken from bosses for (\d+) (sec|min)", "reduced damage from bosses", "%",
         '`+${data.value}% reduced damage taken from bosses for ${formatDuration(data.duration)}`;'),
        # Example: "+15 thorns damage for 10 min"
        (r"(\+\d+) thorns damage for (\d+) (sec|min)", "thorns damage", "damage",
         '`+${data.value} thorns damage for ${formatDuration(data.duration)}`;'),
        # Example: "+45 mining damage for 10 min"
        (r"(\+\d+) mining damage for (\d+) (sec|min)", "mining damage", "damage",
         '`+${data.value} mining damage for ${formatDuration(data.duration)}`;'),
        # Example: "+30.9% damage dealt by your pet for 10 min"
        (r"(\+\d+\.?\d*)% damage dealt by your pet for (\d+) (sec|min)", "pet damage", "%",
         '`+${data.value}% damage dealt by your pet for ${formatDuration(data.duration)}`;'),

        # Critical hit related patterns
        # Example: "+6% critical hit chance for 10 min"
        (r"(\+\d+)%?\s*critical hit chance for (\d+) (sec|min)", "crit chance", "%",
         '`+${data.value}% critical hit chance for ${formatDuration(data.duration)}`;'),
        # Example: "+12% minion critical hit chance for 10 min"
        (r"(\+\d+\.?\d*)% minion critical hit chance for (\d+) (sec|min)", "minion critical hit chance", "%",
         '`+${data.value}% minion critical hit chance for ${formatDuration(data.duration)}`;'),
        # Example: "+31% critical hit damage for 10 min"
        (r"(\+\d+\.?\d*)% critical hit damage for (\d+) (sec|min)", "critical hit damage", "%",
         '`+${data.value}% critical hit damage for ${formatDuration(data.duration)}`;'),

        # Attack Speed related patterns
        # Example: "+8.9% melee attack speed for 10 min"
        (r"(\+\d+\.?\d*)% melee attack speed for (\d+) (sec|min)", "melee attack speed", "%",
         '`+${data.value}% melee attack speed for ${formatDuration(data.duration)}`;'),
        # Example: "+8.4% range attack speed for 10 min"
        (r"(\+\d+\.?\d*)% range attack speed for (\d+) (sec|min)", "range attack speed", "%",
         '`+${data.value}% range attack speed for ${formatDuration(data.duration)}`;'),
        # Example: "+55.2% minion attack speed for 10 min"
        (r"(\+\d+\.?\d*)% minion attack speed for (\d+) (sec|min)", "minion attack speed", "%",
         '`+${data.value}% minion attack speed for ${formatDuration(data.duration)}`;'),
        # Example: "+8.5% melee and range attack speed for 10 min"
        (r"(\+\d+\.?\d*)% melee and range attack speed for (\d+) (sec|min)", "melee and range attack speed", "%",
         '`+${data.value}% melee and range attack speed for ${formatDuration(data.duration)}`;'),

        # Defense related patterns
        # Example: "+23 armor for 10 min"
        (r"(\+\d+) armor for (\d+) (sec|min)", "armor", "armor",
         '`+${data.value} armor for ${formatDuration(data.duration)}`;'),
        # Example: "+49 magic barrier for 10 min"
        (r"(\+\d+) magic barrier for (\d+) (sec|min)", "magic barrier", "magic barrier",
         '`+${data.value} magic barrier for ${formatDuration(data.duration)}`;'),
        # Example: "+11% dodge chance for 10 min"
        (r"(\+\d+\.?\d*)% dodge chance for (\d+) (sec|min)", "dodge chance", "%",
         '`+${data.value}% dodge chance for ${formatDuration(data.duration)}`;'),
        # Example: "Immune to being slowed by slime for 10 min"
        (r"Immune to being slowed by \w+ for (\d+) (sec|min)", "immune to slow", None,
         '`Immune to being slowed by ${data.effect} for ${formatDuration(data.duration)}`;'),
        # Example: "Immune to acid damage for 10 min"
        (r"Immune to \w+ damage for (\d+) (sec|min)", "immune to damage", None,
         '`Immune to ${data.effect} damage for ${formatDuration(data.duration)}`;'),
        # Example: "Immune to burning for 10 min"
        (r"Immune to burning for (\d+) (sec|min)", "immune to burning", None,
         '`Immune to burning for ${formatDuration(data.duration)}`;'),
        # Example: "Immune to mold infection for 10 min"
        (r"Immune to \w+ infection for (\d+) (sec|min)", "immune to infection", None,
         '`Immune to mold infection for ${formatDuration(data.duration)}`;'),

        # Other patterns
        # Example: "+21% movement speed for 1 min"
        (r"(\+\d+\.?\d*)% movement speed for (\d+) (sec|min)", "movement speed", "%",
         '`+${data.value}% movement speed for ${formatDuration(data.duration)}`;'),
        # Example: "+18% knockback chance for 2 min"
        (r"(\+\d+\.?\d*)% knockback chance for (\d+) (sec|min)", "knockback chance", "%",
         '`+${data.value}% knockback chance for ${formatDuration(data.duration)}`;'),
        # Example: "+11 food"
        (r"(\+\d+) food", "food", "food",
         '`+${data.value} food`;'),
        # Example: "+10% less food drained when running for 10 min"
        (r"(\+\d+\.?\d*)% less food drained when running for (\d+) (sec|min)", "less food drained", "%",
         '`+${data.value}% less food drained when running for ${formatDuration(data.duration)}`;'),
        # Example: "+4 blue glow for 1 min"
        (r"(\+\d+) blue glow for (\d+) (sec|min)", "blue glow", "blue glow",
         '`+${data.value} blue glow for ${formatDuration(data.duration)}`;'),
        # Example: "+4 glow for 10 min"
        (r"(\+\d+) glow for (\d+) (sec|min)", "glow", "glow",
         '`+${data.value} glow for ${formatDuration(data.duration)}`;'),
        # Example: "+7.2% mining speed for 10 min"
        (r"(\+\d+\.?\d*)% mining speed for (\d+) (sec|min)", "mining speed", "%",
         '`+${data.value}% mining speed for ${formatDuration(data.duration)}`;'),
        # Example: "+63 fishing for 10 min"
        (r"(\+\d+) fishing for (\d+) (sec|min)", "fishing", "fishing",
         '`+${data.value} fishing for ${formatDuration(data.duration)}`;'),
    ]

    reconstructors = {}
    for regex, index_key, unit, reconstructor in patterns:
        reconstructors[index_key] = reconstructor

    save_to_json(reconstructors, 'reconstructors')

    for regex, index_key, unit, reconstructor in patterns:
        match = re.search(regex, effect_string)
        if match:
            value = float(match.group(1))
            duration_value = None
            if match.lastindex == 3:
                duration_value = int(match.group(2))
                duration_unit = match.group(3)
                if duration_unit == "min":
                    duration_value = duration_value * 60

            return {
                "type": index_key,
                "value": value,
                "unit": unit,
                "duration": duration_value
            }

    print(f"{Fore.RED}Error: could not parse effect for: {effect_string}")
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
        ingredient['effects_parsed'] = normalize_effects(ingredient.get('effects', []))
        ingredient['base_cooked_effects_parsed'] = normalize_effects(ingredient.get('base_cooked_effects', []))

        # Categorize the effects for easy filtering
        ingredient['categories'] = categorize_effects(
            ingredient['effects_parsed'] + ingredient['base_cooked_effects_parsed'])

        # Add to effect index
        for category in ingredient['categories']:
            effect_index[category].append(ingredient['food_name'])

    save_to_json(cooking_ingredients, 'cooking_ingredients')
    save_to_json(effect_index, 'effect_index')


if __name__ == '__main__':
    process_scraped_data()
