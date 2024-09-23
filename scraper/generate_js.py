import json
import os
from colorama import Fore, init

init(autoreset=True)  # Initialize colorama

def load_json_file(file_path):
    """Loads a JSON file and handles errors."""
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"Error: The file '{file_path}' does not exist.")

    with open(file_path, 'r') as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            raise ValueError(f"Error: The file '{file_path}' contains invalid JSON.")


def generate_js():
    stub_file = 'stub/main.js'
    output_file = 'js/main.js'
    cooking_ingredients_file = 'json/cooking_ingredients.json'
    effect_index_file = 'json/effect_index.json'
    reconstructors_file = 'json/reconstructors.json'

    try:
        # Load the JSON data from the files
        cooking_ingredients = load_json_file(cooking_ingredients_file)
        effect_index = load_json_file(effect_index_file)
        reconstructors = load_json_file(reconstructors_file)

        # Read the stub file
        with open(stub_file, 'r') as f:
            js_stub = f.read()

        # Replace placeholders with JSON data
        js_stub = js_stub.replace('{{COOKING_INGREDIENTS}}', json.dumps(cooking_ingredients, indent=4))
        js_stub = js_stub.replace('{{EFFECT_INDEX}}', json.dumps(effect_index, indent=4))
        js_stub = js_stub.replace('{{RECONSTRUCTORS}}', json.dumps(reconstructors, indent=4))

        # Write the final JavaScript to a new file
        with open(output_file, 'w') as f:
            f.write(js_stub)

        print(f"Replaced placeholders and wrote output to {output_file}")

    except (FileNotFoundError, ValueError) as e:
        print(e)


if __name__ == '__main__':
    generate_js()
