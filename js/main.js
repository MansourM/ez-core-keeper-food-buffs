const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    if (minutes > 0) {
        return seconds > 0 ? `${minutes} min ${seconds} sec` : `${minutes} min`;
    } else {
        return `${seconds} sec`;
    }
};

const cooking_ingredients = [
    {
        "food_name": "Larva Meat",
        "effects": [
            "+11 food",
            "+2.8 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+22 food",
            "+2.8 health every sec for 20 sec",
            "+6% critical hit chance for 10 min"
        ],
        "sell_value": "1",
        "image_file_path": "images\\Larva_Meat.png",
        "wiki_url": "/wiki/Larva_Meat",
        "rarity": "Common",
        "ingredient_type": "Others",
        "recipe_type": "Steak",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.8,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 22.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.8,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "crit chance",
                "value": 6.0,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "crit chance"
        ]
    },
    {
        "food_name": "Shiny Larva Meat",
        "effects": [
            "+12 food",
            "+6% critical hit chance for 2 min",
            "+2 life on melee hit for 2 min"
        ],
        "base_cooked_effects": [
            "+25 food",
            "+13% critical hit chance for 10 min",
            "+4 life on melee hit for 10 min"
        ],
        "sell_value": "12",
        "image_file_path": "images\\Shiny_Larva_Meat.png",
        "wiki_url": "/wiki/Shiny_Larva_Meat",
        "rarity": "Rare",
        "ingredient_type": "Others",
        "recipe_type": "Steak",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 12.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "crit chance",
                "value": 6.0,
                "unit": "%",
                "duration": 120
            },
            {
                "type": "life on hit",
                "value": 2.0,
                "unit": "life/min",
                "duration": 120
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 25.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "crit chance",
                "value": 13.0,
                "unit": "%",
                "duration": 600
            },
            {
                "type": "life on hit",
                "value": 4.0,
                "unit": "life/min",
                "duration": 600
            }
        ],
        "categories": [
            "life on hit",
            "food",
            "crit chance"
        ]
    },
    {
        "food_name": "Mushroom",
        "effects": [
            "+9 food",
            "+2.1 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+19 food",
            "+4.2 health every sec for 20 sec"
        ],
        "sell_value": "1",
        "image_file_path": "images\\Mushroom.png",
        "wiki_url": "/wiki/Mushroom",
        "rarity": "Common",
        "ingredient_type": "Plants",
        "recipe_type": "Soup",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 9.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.1,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 19.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.2,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "categories": [
            "health regen",
            "food"
        ]
    },
    {
        "food_name": "Giant Mushroom",
        "effects": [
            "+15 food",
            "+25 max health (only once)"
        ],
        "base_cooked_effects": [
            "+31 food",
            "+25 max health (only once)",
            "+24 max health for 10 min"
        ],
        "sell_value": "12",
        "image_file_path": "images\\Giant_Mushroom.png",
        "wiki_url": "/wiki/Giant_Mushroom",
        "rarity": "Rare",
        "ingredient_type": "Plants",
        "recipe_type": "Salad",
        "hidden_effects": "+5 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 15.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "permanent max health",
                "value": 25.0,
                "unit": "health",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 31.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "permanent max health",
                "value": 25.0,
                "unit": "health",
                "duration": null
            },
            {
                "type": "max health",
                "value": 24.0,
                "unit": "health",
                "duration": 600
            }
        ],
        "categories": [
            "permanent max health",
            "food",
            "max health"
        ]
    },
    {
        "food_name": "Amber Larva",
        "effects": [
            "+11 food",
            "+50 max health (only once)"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+50 max health (only once)",
            "+52 max health for 5 min"
        ],
        "sell_value": "17",
        "image_file_path": "images\\Amber_Larva.png",
        "wiki_url": "/wiki/Amber_Larva",
        "rarity": "Epic",
        "ingredient_type": "Others",
        "recipe_type": "Pudding",
        "hidden_effects": "+10 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "permanent max health",
                "value": 50.0,
                "unit": "health",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "permanent max health",
                "value": 50.0,
                "unit": "health",
                "duration": null
            },
            {
                "type": "max health",
                "value": 52.0,
                "unit": "health",
                "duration": 300
            }
        ],
        "categories": [
            "permanent max health",
            "food",
            "max health"
        ]
    },
    {
        "food_name": "Marbled Meat",
        "effects": [
            "+13 food",
            "+2.6 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+27 food",
            "+2.6 health every sec for 20 sec",
            "+13.3% damage for 10 min"
        ],
        "sell_value": "1",
        "image_file_path": "images\\Marbled_Meat.png",
        "wiki_url": "/wiki/Marbled_Meat",
        "rarity": "Common",
        "ingredient_type": "Others",
        "recipe_type": "Steak",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 13.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.6,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 27.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.6,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "damage",
                "value": 13.3,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "damage"
        ]
    },
    {
        "food_name": "Dodo Egg",
        "effects": [
            "+10 food",
            "+4.3 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+30 food",
            "+4.3 health every sec for 20 sec",
            "+25% more healing from health over time regeneration for 10 min"
        ],
        "sell_value": "1",
        "image_file_path": "images\\Dodo_Egg.png",
        "wiki_url": "/wiki/Dodo_Egg",
        "rarity": "Common",
        "ingredient_type": "Others",
        "recipe_type": "Cake",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.3,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 30.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.3,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "healing_boost",
                "value": 25.0,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "healing_boost",
            "food"
        ]
    },
    {
        "food_name": "Heart Berry",
        "effects": [
            "+9 food",
            "+2.8 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+19 food",
            "+2.8 health every sec for 20 sec",
            "+25 max health for 10 min"
        ],
        "sell_value": "1",
        "image_file_path": "images\\Heart_Berry.png",
        "wiki_url": "/wiki/Heart_Berry",
        "rarity": "Common",
        "ingredient_type": "Plants",
        "recipe_type": "Pudding",
        "hidden_effects": "+10 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 9.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.8,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 19.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.8,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "max health",
                "value": 25.0,
                "unit": "health",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "max health"
        ]
    },
    {
        "food_name": "Glow Tulip",
        "effects": [
            "+1 food",
            "+4 blue glow for 1 min"
        ],
        "base_cooked_effects": [
            "+2 food",
            "+5 blue glow for 10 min",
            "+1.4 mana every sec for 10 min"
        ],
        "sell_value": "7",
        "image_file_path": "images\\Glow_Tulip.png",
        "wiki_url": "/wiki/Glow_Tulip",
        "rarity": "Uncommon",
        "ingredient_type": "Plants",
        "recipe_type": "Salad",
        "hidden_effects": "+5 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 1.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "blue glow",
                "value": 4.0,
                "unit": "blue glow",
                "duration": 60
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 2.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "blue glow",
                "value": 5.0,
                "unit": "blue glow",
                "duration": 600
            },
            {
                "type": "mana regen",
                "value": 1.4,
                "unit": "mana/sec",
                "duration": 600
            }
        ],
        "categories": [
            "food",
            "blue glow",
            "mana regen"
        ]
    },
    {
        "food_name": "Bomb Pepper",
        "effects": [
            "+5 food",
            "-11 health"
        ],
        "base_cooked_effects": [
            "+10 food",
            "+21% movement speed for 1 min"
        ],
        "sell_value": "6",
        "image_file_path": "images\\Bomb_Pepper.png",
        "wiki_url": "/wiki/Bomb_Pepper",
        "rarity": "Uncommon",
        "ingredient_type": "Plants",
        "recipe_type": "Wrap",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 5.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health_loss",
                "value": -11.0,
                "unit": "health",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "movement speed",
                "value": 21.0,
                "unit": "%",
                "duration": 60
            }
        ],
        "categories": [
            "health_loss",
            "food",
            "movement speed"
        ]
    },
    {
        "food_name": "Carrock",
        "effects": [
            "+7 food",
            "+4.1 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+15 food",
            "+23 armor for 10 min"
        ],
        "sell_value": "5",
        "image_file_path": "images\\Carrock.png",
        "wiki_url": "/wiki/Carrock",
        "rarity": "Uncommon",
        "ingredient_type": "Plants",
        "recipe_type": "Dip Snack",
        "hidden_effects": "+5 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 7.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.1,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 15.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "armor",
                "value": 23.0,
                "unit": "armor",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "armor",
            "food"
        ]
    },
    {
        "food_name": "Puffungi",
        "effects": [
            "+5 food",
            "-23 health"
        ],
        "base_cooked_effects": [
            "+10 food",
            "+5.5 health every sec for 20 sec",
            "+6% reduced damage taken from bosses for 10 min"
        ],
        "sell_value": "6",
        "image_file_path": "images\\Puffungi.png",
        "wiki_url": "/wiki/Puffungi",
        "rarity": "Uncommon",
        "ingredient_type": "Plants",
        "recipe_type": "Cheese",
        "hidden_effects": "+5 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 5.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health_loss",
                "value": -23.0,
                "unit": "health",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.5,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "reduced damage from bosses",
                "value": 6.0,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "health_loss",
            "food",
            "reduced damage from bosses"
        ]
    },
    {
        "food_name": "Bloat Oat",
        "effects": [
            "+22 food"
        ],
        "base_cooked_effects": [
            "+43 food",
            "+9.1 health every sec for 20 sec"
        ],
        "sell_value": "6",
        "image_file_path": "images\\Bloat_Oat.png",
        "wiki_url": "/wiki/Bloat_Oat",
        "rarity": "Uncommon",
        "ingredient_type": "Plants",
        "recipe_type": "Cereal",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 22.0,
                "unit": "food",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 43.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 9.1,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "categories": [
            "health regen",
            "food"
        ]
    },
    {
        "food_name": "Pewpaya",
        "effects": [
            "+10 food",
            "+6.3 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+20 food",
            "+6.3 health every sec for 20 sec",
            "+22.4% physical range damage for 10 min"
        ],
        "sell_value": "5",
        "image_file_path": "images\\Pewpaya.png",
        "wiki_url": "/wiki/Pewpaya",
        "rarity": "Uncommon",
        "ingredient_type": "Plants",
        "recipe_type": "Smoothie",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 6.3,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 20.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 6.3,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "physical range damage",
                "value": 22.4,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "physical range damage",
            "food"
        ]
    },
    {
        "food_name": "Pinegrapple",
        "effects": [
            "+10 food",
            "+5.4 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+20 food",
            "+5.4 health every sec for 20 sec",
            "+22.4% physical melee damage for 10 min"
        ],
        "sell_value": "6",
        "image_file_path": "images\\Pinegrapple.png",
        "wiki_url": "/wiki/Pinegrapple",
        "rarity": "Uncommon",
        "ingredient_type": "Plants",
        "recipe_type": "Smoothie",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.4,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 20.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.4,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "physical melee damage",
                "value": 22.4,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "physical melee damage",
            "food"
        ]
    },
    {
        "food_name": "Grumpkin",
        "effects": [
            "+11 food",
            "+4.3 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+4.3 health every sec for 20 sec",
            "+45 mining damage for 10 min"
        ],
        "sell_value": "6",
        "image_file_path": "images\\Grumpkin.png",
        "wiki_url": "/wiki/Grumpkin",
        "rarity": "Uncommon",
        "ingredient_type": "Plants",
        "recipe_type": "Soup",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.3,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.3,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "mining damage",
                "value": 45.0,
                "unit": "damage",
                "duration": 600
            }
        ],
        "categories": [
            "mining damage",
            "health regen",
            "food"
        ]
    },
    {
        "food_name": "Sunrice",
        "effects": [
            "+7 food"
        ],
        "base_cooked_effects": [
            "+13 food",
            "+4 glow for 10 min",
            "+30% magic damage for 10 min"
        ],
        "sell_value": "6",
        "image_file_path": "images\\Sunrice.png",
        "wiki_url": "/wiki/Sunrice",
        "rarity": "Uncommon",
        "ingredient_type": "Plants",
        "recipe_type": "Curry",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 7.0,
                "unit": "food",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 13.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "glow",
                "value": 4.0,
                "unit": "glow",
                "duration": 600
            },
            {
                "type": "magic damage",
                "value": 30.0,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "food",
            "magic damage",
            "glow"
        ]
    },
    {
        "food_name": "Lunacorn",
        "effects": [
            "+6 food"
        ],
        "base_cooked_effects": [
            "+13 food",
            "+4 blue glow for 10 min",
            "+30% minion damage for 10 min"
        ],
        "sell_value": "6",
        "image_file_path": "images\\Lunacorn.png",
        "wiki_url": "/wiki/Lunacorn",
        "rarity": "Uncommon",
        "ingredient_type": "Plants",
        "recipe_type": "Sandwich",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 6.0,
                "unit": "food",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 13.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "blue glow",
                "value": 4.0,
                "unit": "blue glow",
                "duration": 600
            },
            {
                "type": "minion damage",
                "value": 30.0,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "food",
            "blue glow",
            "minion damage"
        ]
    },
    {
        "food_name": "Golden Heart Berry",
        "effects": [
            "+9 food",
            "+3.9 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+18 food",
            "+4.4 health every sec for 20 sec",
            "+50 max health for 10 min",
            "+17.1% physical melee damage for 10 min"
        ],
        "sell_value": "12",
        "image_file_path": "images\\Golden_Heart_Berry.png",
        "wiki_url": "/wiki/Golden_Heart_Berry",
        "rarity": "Rare",
        "ingredient_type": "Plants",
        "recipe_type": "Pudding",
        "hidden_effects": "+10 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 9.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 3.9,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 18.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.4,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "max health",
                "value": 50.0,
                "unit": "health",
                "duration": 600
            },
            {
                "type": "physical melee damage",
                "value": 17.1,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "physical melee damage",
            "food",
            "max health"
        ]
    },
    {
        "food_name": "Golden Glow Tulip",
        "effects": [
            "+1 food",
            "+5 blue glow for 1 min"
        ],
        "base_cooked_effects": [
            "+2 food",
            "+6 blue glow for 10 min",
            "+2.3 mana every sec for 10 min",
            "+25 max mana for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Golden_Glow_Tulip.png",
        "wiki_url": "/wiki/Golden_Glow_Tulip",
        "rarity": "Rare",
        "ingredient_type": "Plants",
        "recipe_type": "Salad",
        "hidden_effects": "+5 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 1.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "blue glow",
                "value": 5.0,
                "unit": "blue glow",
                "duration": 60
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 2.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "blue glow",
                "value": 6.0,
                "unit": "blue glow",
                "duration": 600
            },
            {
                "type": "mana regen",
                "value": 2.3,
                "unit": "mana/sec",
                "duration": 600
            },
            {
                "type": "max mana",
                "value": 25.0,
                "unit": "mana",
                "duration": 600
            }
        ],
        "categories": [
            "food",
            "blue glow",
            "max mana",
            "mana regen"
        ]
    },
    {
        "food_name": "Golden Bomb Pepper",
        "effects": [
            "+5 food",
            "-14 health"
        ],
        "base_cooked_effects": [
            "+11 food",
            "+26.9% movement speed for 1 min",
            "+8.9% melee attack speed for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Golden_Bomb_Pepper.png",
        "wiki_url": "/wiki/Golden_Bomb_Pepper",
        "rarity": "Rare",
        "ingredient_type": "Plants",
        "recipe_type": "Wrap",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 5.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health_loss",
                "value": -14.0,
                "unit": "health",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "movement speed",
                "value": 26.9,
                "unit": "%",
                "duration": 60
            },
            {
                "type": "melee attack speed",
                "value": 8.9,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health_loss",
            "food",
            "melee attack speed",
            "movement speed"
        ]
    },
    {
        "food_name": "Golden Carrock",
        "effects": [
            "+6 food",
            "+5.4 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+13 food",
            "+26 armor for 10 min",
            "+18% knockback chance for 2 min"
        ],
        "sell_value": "12",
        "image_file_path": "images\\Golden_Carrock.png",
        "wiki_url": "/wiki/Golden_Carrock",
        "rarity": "Rare",
        "ingredient_type": "Plants",
        "recipe_type": "Dip Snack",
        "hidden_effects": "+5 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 6.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.4,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 13.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "armor",
                "value": 26.0,
                "unit": "armor",
                "duration": 600
            },
            {
                "type": "knockback chance",
                "value": 18.0,
                "unit": "%",
                "duration": 120
            }
        ],
        "categories": [
            "health regen",
            "armor",
            "food",
            "knockback chance"
        ]
    },
    {
        "food_name": "Golden Puffungi",
        "effects": [
            "+5 food",
            "-25 health"
        ],
        "base_cooked_effects": [
            "+10 food",
            "+7.9 health every sec for 20 sec",
            "+9% reduced damage taken from bosses for 10 min",
            "+14% damage against bosses for 1 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Golden_Puffungi.png",
        "wiki_url": "/wiki/Golden_Puffungi",
        "rarity": "Rare",
        "ingredient_type": "Plants",
        "recipe_type": "Cheese",
        "hidden_effects": "+5 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 5.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health_loss",
                "value": -25.0,
                "unit": "health",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 7.9,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "reduced damage from bosses",
                "value": 9.0,
                "unit": "%",
                "duration": 600
            },
            {
                "type": "damage against bosses",
                "value": 14.0,
                "unit": "%",
                "duration": 60
            }
        ],
        "categories": [
            "damage against bosses",
            "health_loss",
            "health regen",
            "reduced damage from bosses",
            "food"
        ]
    },
    {
        "food_name": "Golden Bloat Oat",
        "effects": [
            "+21 food"
        ],
        "base_cooked_effects": [
            "+42 food",
            "+12.1 health every sec for 20 sec",
            "+10% less food drained when running for 10 min"
        ],
        "sell_value": "11",
        "image_file_path": "images\\Golden_Bloat_Oat.png",
        "wiki_url": "/wiki/Golden_Bloat_Oat",
        "rarity": "Rare",
        "ingredient_type": "Plants",
        "recipe_type": "Cereal",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 42.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 12.1,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "less food drained",
                "value": 10.0,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "less food drained",
            "health regen",
            "food"
        ]
    },
    {
        "food_name": "Golden Pewpaya",
        "effects": [
            "+10 food",
            "+7.4 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+8.2 health every sec for 20 sec",
            "+28.2% physical range damage for 10 min",
            "+8.4% range attack speed for 10 min"
        ],
        "sell_value": "12",
        "image_file_path": "images\\Golden_Pewpaya.png",
        "wiki_url": "/wiki/Golden_Pewpaya",
        "rarity": "Rare",
        "ingredient_type": "Plants",
        "recipe_type": "Smoothie",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 7.4,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 8.2,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "physical range damage",
                "value": 28.2,
                "unit": "%",
                "duration": 600
            },
            {
                "type": "range attack speed",
                "value": 8.4,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "range attack speed",
            "health regen",
            "physical range damage",
            "food"
        ]
    },
    {
        "food_name": "Golden Pinegrapple",
        "effects": [
            "+10 food",
            "+6.8 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+9 health every sec for 20 sec",
            "+28.2% physical melee damage for 10 min",
            "+8.4% melee attack speed for 10 min"
        ],
        "sell_value": "11",
        "image_file_path": "images\\Golden_Pinegrapple.png",
        "wiki_url": "/wiki/Golden_Pinegrapple",
        "rarity": "Rare",
        "ingredient_type": "Plants",
        "recipe_type": "Smoothie",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 6.8,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 9.0,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "physical melee damage",
                "value": 28.2,
                "unit": "%",
                "duration": 600
            },
            {
                "type": "melee attack speed",
                "value": 8.4,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "physical melee damage",
            "food",
            "melee attack speed"
        ]
    },
    {
        "food_name": "Golden Grumpkin",
        "effects": [
            "+9 food",
            "+5.6 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+18 food",
            "+6.2 health every sec for 20 sec",
            "+71 mining damage for 10 min",
            "+7.2% mining speed for 10 min"
        ],
        "sell_value": "12",
        "image_file_path": "images\\Golden_Grumpkin.png",
        "wiki_url": "/wiki/Golden_Grumpkin",
        "rarity": "Rare",
        "ingredient_type": "Plants",
        "recipe_type": "Soup",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 9.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.6,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 18.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 6.2,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "mining damage",
                "value": 71.0,
                "unit": "damage",
                "duration": 600
            },
            {
                "type": "mining speed",
                "value": 7.2,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "mining damage",
            "health regen",
            "food",
            "mining speed"
        ]
    },
    {
        "food_name": "Golden Sunrice",
        "effects": [
            "+7 food"
        ],
        "base_cooked_effects": [
            "+13 food",
            "+4 glow for 10 min",
            "+43.3% magic damage for 10 min",
            "+49 magic barrier for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Golden_Sunrice.png",
        "wiki_url": "/wiki/Golden_Sunrice",
        "rarity": "Rare",
        "ingredient_type": "Plants",
        "recipe_type": "Curry",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 7.0,
                "unit": "food",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 13.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "glow",
                "value": 4.0,
                "unit": "glow",
                "duration": 600
            },
            {
                "type": "magic damage",
                "value": 43.3,
                "unit": "%",
                "duration": 600
            },
            {
                "type": "magic barrier",
                "value": 49.0,
                "unit": "magic barrier",
                "duration": 600
            }
        ],
        "categories": [
            "food",
            "magic damage",
            "glow",
            "magic barrier"
        ]
    },
    {
        "food_name": "Golden Lunacorn",
        "effects": [
            "+7 food"
        ],
        "base_cooked_effects": [
            "+14 food",
            "+4 blue glow for 10 min",
            "+39.5% minion damage for 10 min",
            "+55.2% minion attack speed for 10 min"
        ],
        "sell_value": "11",
        "image_file_path": "images\\Golden_Lunacorn.png",
        "wiki_url": "/wiki/Golden_Lunacorn",
        "rarity": "Rare",
        "ingredient_type": "Plants",
        "recipe_type": "Sandwich",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 7.0,
                "unit": "food",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 14.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "blue glow",
                "value": 4.0,
                "unit": "blue glow",
                "duration": 600
            },
            {
                "type": "minion damage",
                "value": 39.5,
                "unit": "%",
                "duration": 600
            },
            {
                "type": "minion attack speed",
                "value": 55.2,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "minion attack speed",
            "food",
            "blue glow",
            "minion damage"
        ]
    },
    {
        "food_name": "Atlantean Worm Heart",
        "effects": [
            "+14 food",
            "+9.5 health every sec for 20 sec",
            "+100 max health (only once)"
        ],
        "base_cooked_effects": [
            "+27 food",
            "+20 health every sec to you and all nearby allies for 20 sec",
            "+100 max health (only once)"
        ],
        "sell_value": "17",
        "image_file_path": "images\\Atlantean_Worm_Heart.png",
        "wiki_url": "/wiki/Atlantean_Worm_Heart",
        "rarity": "Epic",
        "ingredient_type": "Others",
        "recipe_type": "Steak",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 14.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 9.5,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "permanent max health",
                "value": 100.0,
                "unit": "health",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 27.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen allies",
                "value": 20.0,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "permanent max health",
                "value": 100.0,
                "unit": "health",
                "duration": null
            }
        ],
        "categories": [
            "permanent max health",
            "health regen",
            "health regen allies",
            "food"
        ]
    },
    {
        "food_name": "Orange Cave Guppy",
        "effects": [
            "+10 food",
            "+2.1 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+19 food",
            "+2.1 health every sec for 20 sec",
            "+8 mining damage for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Orange_Cave_Guppy.png",
        "wiki_url": "/wiki/Orange_Cave_Guppy",
        "rarity": "Common",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.1,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 19.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.1,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "mining damage",
                "value": 8.0,
                "unit": "damage",
                "duration": 600
            }
        ],
        "categories": [
            "mining damage",
            "health regen",
            "food"
        ]
    },
    {
        "food_name": "Blue Cave Guppy",
        "effects": [
            "+11 food",
            "+2.2 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+2.2 health every sec for 20 sec",
            "+13 magic barrier for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Blue_Cave_Guppy.png",
        "wiki_url": "/wiki/Blue_Cave_Guppy",
        "rarity": "Common",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.2,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.2,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "magic barrier",
                "value": 13.0,
                "unit": "magic barrier",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "magic barrier"
        ]
    },
    {
        "food_name": "Rock Jaw",
        "effects": [
            "+11 food",
            "+2.5 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+22 food",
            "+2.5 health every sec for 20 sec",
            "+15.9% physical melee damage for 10 min"
        ],
        "sell_value": "13",
        "image_file_path": "images\\Rock_Jaw.png",
        "wiki_url": "/wiki/Rock_Jaw",
        "rarity": "Uncommon",
        "ingredient_type": "Fish",
        "recipe_type": "Fish Balls",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.5,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 22.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.5,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "physical melee damage",
                "value": 15.9,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "physical melee damage",
            "food"
        ]
    },
    {
        "food_name": "Gem Crab",
        "effects": [
            "+10 food",
            "+3.1 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+3.1 health every sec for 20 sec",
            "+14 armor for 10 min"
        ],
        "sell_value": "16",
        "image_file_path": "images\\Gem_Crab.png",
        "wiki_url": "/wiki/Gem_Crab",
        "rarity": "Rare",
        "ingredient_type": "Fish",
        "recipe_type": "Sushi",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 3.1,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 3.1,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "armor",
                "value": 14.0,
                "unit": "armor",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "armor",
            "food"
        ]
    },
    {
        "food_name": "Dagger Fin",
        "effects": [
            "+11 food",
            "+3.9 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+3.9 health every sec for 20 sec",
            "+23.3% minion damage for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Dagger_Fin.png",
        "wiki_url": "/wiki/Dagger_Fin",
        "rarity": "Common",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 3.9,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 3.9,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "minion damage",
                "value": 23.3,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "minion damage"
        ]
    },
    {
        "food_name": "Pink Palace Fish",
        "effects": [
            "+11 food",
            "+3.9 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+22 food",
            "+3.9 health every sec for 20 sec",
            "+9.2% melee attack speed for 10 min"
        ],
        "sell_value": "15",
        "image_file_path": "images\\Pink_Palace_Fish.png",
        "wiki_url": "/wiki/Pink_Palace_Fish",
        "rarity": "Uncommon",
        "ingredient_type": "Fish",
        "recipe_type": "Fish Balls",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 3.9,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 22.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 3.9,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "melee attack speed",
                "value": 9.2,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "melee attack speed"
        ]
    },
    {
        "food_name": "Teal Palace Fish",
        "effects": [
            "+11 food",
            "+4 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+4 health every sec for 20 sec",
            "+10.4% range attack speed for 10 min"
        ],
        "sell_value": "13",
        "image_file_path": "images\\Teal_Palace_Fish.png",
        "wiki_url": "/wiki/Teal_Palace_Fish",
        "rarity": "Uncommon",
        "ingredient_type": "Fish",
        "recipe_type": "Fish Balls",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.0,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.0,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "range attack speed",
                "value": 10.4,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "range attack speed",
            "health regen",
            "food"
        ]
    },
    {
        "food_name": "Crown Squid",
        "effects": [
            "+10 food",
            "+5 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+19 food",
            "+5 health every sec for 20 sec",
            "+19% knockback chance for 10 min"
        ],
        "sell_value": "19",
        "image_file_path": "images\\Crown_Squid.png",
        "wiki_url": "/wiki/Crown_Squid",
        "rarity": "Epic",
        "ingredient_type": "Fish",
        "recipe_type": "Sushi",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.0,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 19.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.0,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "knockback chance",
                "value": 19.0,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "knockback chance"
        ]
    },
    {
        "food_name": "Yellow Blister Head",
        "effects": [
            "+10 food",
            "+2.6 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+2.6 health every sec for 20 sec",
            "Immune to being slowed by slime for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Yellow_Blister_Head.png",
        "wiki_url": "/wiki/Yellow_Blister_Head",
        "rarity": "Common",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.6,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.6,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "immune to slow",
                "value": 10.0,
                "unit": null,
                "duration": null
            }
        ],
        "categories": [
            "health regen",
            "food",
            "immune to slow"
        ]
    },
    {
        "food_name": "Green Blister Head",
        "effects": [
            "+10 food",
            "+2.5 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+20 food",
            "+2.5 health every sec for 20 sec",
            "Immune to acid damage for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Green_Blister_Head.png",
        "wiki_url": "/wiki/Green_Blister_Head",
        "rarity": "Common",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.5,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 20.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 2.5,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "immune to damage",
                "value": 10.0,
                "unit": null,
                "duration": null
            }
        ],
        "categories": [
            "health regen",
            "food",
            "immune to damage"
        ]
    },
    {
        "food_name": "Devil Worm",
        "effects": [
            "+10 food",
            "+3 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+20 food",
            "+3 health every sec for 20 sec",
            "+22.8% physical range damage for 10 min"
        ],
        "sell_value": "13",
        "image_file_path": "images\\Devil_Worm.png",
        "wiki_url": "/wiki/Devil_Worm",
        "rarity": "Uncommon",
        "ingredient_type": "Fish",
        "recipe_type": "Fish Balls",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 3.0,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 20.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 3.0,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "physical range damage",
                "value": 22.8,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "physical range damage",
            "food"
        ]
    },
    {
        "food_name": "Vampire Eel",
        "effects": [
            "+11 food",
            "+3.5 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+3.5 health every sec for 20 sec",
            "+3 life on melee hit for 10 min"
        ],
        "sell_value": "16",
        "image_file_path": "images\\Vampire_Eel.png",
        "wiki_url": "/wiki/Vampire_Eel",
        "rarity": "Rare",
        "ingredient_type": "Fish",
        "recipe_type": "Sushi",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 3.5,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 3.5,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "life on hit",
                "value": 3.0,
                "unit": "life/min",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "life on hit"
        ]
    },
    {
        "food_name": "Mold Shark",
        "effects": [
            "+10 food",
            "+4.8 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+4.8 health every sec for 20 sec",
            "+38.6% physical melee damage for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Mold_Shark.png",
        "wiki_url": "/wiki/Mold_Shark",
        "rarity": "Common",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.8,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.8,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "physical melee damage",
                "value": 38.6,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "physical melee damage",
            "food"
        ]
    },
    {
        "food_name": "Rot Fish",
        "effects": [
            "+11 food",
            "-22 health"
        ],
        "base_cooked_effects": [
            "+21 food",
            "Immune to mold infection for 10 min"
        ],
        "sell_value": "13",
        "image_file_path": "images\\Rot_Fish.png",
        "wiki_url": "/wiki/Rot_Fish",
        "rarity": "Uncommon",
        "ingredient_type": "Fish",
        "recipe_type": "Fish Balls",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health_loss",
                "value": -22.0,
                "unit": "health",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "immune to infection",
                "value": 10.0,
                "unit": null,
                "duration": null
            }
        ],
        "categories": [
            "immune to infection",
            "health_loss",
            "food"
        ]
    },
    {
        "food_name": "Black Steel Urchin",
        "effects": [
            "+10 food",
            "+5.3 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+19 food",
            "+3.6 health every sec for 20 sec",
            "+22 armor for 10 min",
            "+15 thorns damage for 10 min"
        ],
        "sell_value": "16",
        "image_file_path": "images\\Black_Steel_Urchin.png",
        "wiki_url": "/wiki/Black_Steel_Urchin",
        "rarity": "Rare",
        "ingredient_type": "Fish",
        "recipe_type": "Sushi",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.3,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 19.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 3.6,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "armor",
                "value": 22.0,
                "unit": "armor",
                "duration": 600
            },
            {
                "type": "thorns damage",
                "value": 15.0,
                "unit": "damage",
                "duration": 600
            }
        ],
        "categories": [
            "thorns damage",
            "health regen",
            "armor",
            "food"
        ]
    },
    {
        "food_name": "Azure Feather Fish",
        "effects": [
            "+10 food",
            "+4.1 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+8.1 health every sec for 20 sec"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Azure_Feather_Fish.png",
        "wiki_url": "/wiki/Azure_Feather_Fish",
        "rarity": "Common",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.1,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 8.1,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "categories": [
            "health regen",
            "food"
        ]
    },
    {
        "food_name": "Emerald Feather Fish",
        "effects": [
            "+10 food",
            "+4.5 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+20 food",
            "+3 health every sec for 20 sec",
            "+29 max mana for 10 min",
            "+21% magic damage for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Emerald_Feather_Fish.png",
        "wiki_url": "/wiki/Emerald_Feather_Fish",
        "rarity": "Common",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.5,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 20.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 3.0,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "max mana",
                "value": 29.0,
                "unit": "mana",
                "duration": 600
            },
            {
                "type": "magic damage",
                "value": 21.0,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "max mana",
            "magic damage"
        ]
    },
    {
        "food_name": "Spirit Veil",
        "effects": [
            "+9 food",
            "+4.7 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+19 food",
            "+36.2% movement speed for 2 min"
        ],
        "sell_value": "13",
        "image_file_path": "images\\Spirit_Veil.png",
        "wiki_url": "/wiki/Spirit_Veil",
        "rarity": "Uncommon",
        "ingredient_type": "Fish",
        "recipe_type": "Fish Balls",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 9.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.7,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 19.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "movement speed",
                "value": 36.2,
                "unit": "%",
                "duration": 120
            }
        ],
        "categories": [
            "health regen",
            "food",
            "movement speed"
        ]
    },
    {
        "food_name": "Astral Jelly",
        "effects": [
            "+10 food",
            "+5.2 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+5.2 health every sec for 20 sec",
            "+63 fishing for 10 min"
        ],
        "sell_value": "16",
        "image_file_path": "images\\Astral_Jelly.png",
        "wiki_url": "/wiki/Astral_Jelly",
        "rarity": "Rare",
        "ingredient_type": "Fish",
        "recipe_type": "Sushi",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.2,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.2,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "fishing",
                "value": 63.0,
                "unit": "fishing",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "fishing"
        ]
    },
    {
        "food_name": "Bottom Tracer",
        "effects": [
            "+10 food",
            "+5.8 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+20 food",
            "+5.8 health every sec for 20 sec",
            "+2.8 mana every sec for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Bottom_Tracer.png",
        "wiki_url": "/wiki/Bottom_Tracer",
        "rarity": "Common",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.8,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 20.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.8,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "mana regen",
                "value": 2.8,
                "unit": "mana/sec",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "mana regen"
        ]
    },
    {
        "food_name": "Silver Dart",
        "effects": [
            "+11 food",
            "+5.5 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+5.5 health every sec for 20 sec",
            "+31% critical hit damage for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Silver_Dart.png",
        "wiki_url": "/wiki/Silver_Dart",
        "rarity": "Uncommon",
        "ingredient_type": "Fish",
        "recipe_type": "Sushi",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.5,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.5,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "critical hit damage",
                "value": 31.0,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "critical hit damage"
        ]
    },
    {
        "food_name": "Golden Dart",
        "effects": [
            "+11 food",
            "+5.7 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+22 food",
            "+5.7 health every sec for 20 sec",
            "+11% dodge chance for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Golden_Dart.png",
        "wiki_url": "/wiki/Golden_Dart",
        "rarity": "Uncommon",
        "ingredient_type": "Fish",
        "recipe_type": "Sushi",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.7,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 22.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.7,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "dodge chance",
                "value": 11.0,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "dodge chance",
            "health regen",
            "food"
        ]
    },
    {
        "food_name": "Pink Coralotl",
        "effects": [
            "+11 food",
            "+7 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+22 food",
            "+4.7 health every sec for 20 sec",
            "+50 max mana for 10 min",
            "+36 magic barrier for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Pink_Coralotl.png",
        "wiki_url": "/wiki/Pink_Coralotl",
        "rarity": "Rare",
        "ingredient_type": "Fish",
        "recipe_type": "Fish Balls",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 7.0,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 22.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 4.7,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "max mana",
                "value": 50.0,
                "unit": "mana",
                "duration": 600
            },
            {
                "type": "magic barrier",
                "value": 36.0,
                "unit": "magic barrier",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "max mana",
            "magic barrier"
        ]
    },
    {
        "food_name": "White Coralotl",
        "effects": [
            "+9 food",
            "+5.8 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+19 food",
            "+5.8 health every sec for 20 sec",
            "+14.8% mining speed for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\White_Coralotl.png",
        "wiki_url": "/wiki/White_Coralotl",
        "rarity": "Rare",
        "ingredient_type": "Fish",
        "recipe_type": "Fish Balls",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 9.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.8,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 19.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.8,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "mining speed",
                "value": 14.8,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "mining speed"
        ]
    },
    {
        "food_name": "Solid Spikeback",
        "effects": [
            "+11 food",
            "+6.4 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+38 armor for 10 min",
            "+50 thorns damage for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Solid_Spikeback.png",
        "wiki_url": "/wiki/Solid_Spikeback",
        "rarity": "Common",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 6.4,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "armor",
                "value": 38.0,
                "unit": "armor",
                "duration": 600
            },
            {
                "type": "thorns damage",
                "value": 50.0,
                "unit": "damage",
                "duration": 600
            }
        ],
        "categories": [
            "thorns damage",
            "health regen",
            "armor",
            "food"
        ]
    },
    {
        "food_name": "Sandy Spikeback",
        "effects": [
            "+10 food",
            "+7 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+19 food",
            "+78 max health for 10 min",
            "+206 mining damage for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Sandy_Spikeback.png",
        "wiki_url": "/wiki/Sandy_Spikeback",
        "rarity": "Common",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 7.0,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 19.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "max health",
                "value": 78.0,
                "unit": "health",
                "duration": 600
            },
            {
                "type": "mining damage",
                "value": 206.0,
                "unit": "damage",
                "duration": 600
            }
        ],
        "categories": [
            "mining damage",
            "health regen",
            "food",
            "max health"
        ]
    },
    {
        "food_name": "Grey Dune Tail",
        "effects": [
            "+10 food",
            "+6.7 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+20 food",
            "+6.7 health every sec for 20 sec",
            "+13.9% melee attack speed for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Grey_Dune_Tail.png",
        "wiki_url": "/wiki/Grey_Dune_Tail",
        "rarity": "Rare",
        "ingredient_type": "Fish",
        "recipe_type": "Fish Balls",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 6.7,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 20.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 6.7,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "melee attack speed",
                "value": 13.9,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "melee attack speed"
        ]
    },
    {
        "food_name": "Brown Dune Tail",
        "effects": [
            "+11 food",
            "+8.1 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+8.1 health every sec for 20 sec",
            "+13.9% range attack speed for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Brown_Dune_Tail.png",
        "wiki_url": "/wiki/Brown_Dune_Tail",
        "rarity": "Rare",
        "ingredient_type": "Fish",
        "recipe_type": "Fish Balls",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 8.1,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 8.1,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "range attack speed",
                "value": 13.9,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "range attack speed",
            "health regen",
            "food"
        ]
    },
    {
        "food_name": "Tornis Kingfish",
        "effects": [
            "+10 food",
            "+7.8 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+20 food",
            "+7.8 health every sec for 20 sec",
            "+50.4% damage for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Tornis_Kingfish.png",
        "wiki_url": "/wiki/Tornis_Kingfish",
        "rarity": "Epic",
        "ingredient_type": "Fish",
        "recipe_type": "Sushi",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 7.8,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 20.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 7.8,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "damage",
                "value": 50.4,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "damage"
        ]
    },
    {
        "food_name": "Dark Lava Eater",
        "effects": [
            "+10 food",
            "+7.8 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+19 food",
            "+7.8 health every sec for 20 sec",
            "+7 life on melee hit for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Dark_Lava_Eater.png",
        "wiki_url": "/wiki/Dark_Lava_Eater",
        "rarity": "Uncommon",
        "ingredient_type": "Fish",
        "recipe_type": "Fish Balls",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 7.8,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 19.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 7.8,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "life on hit",
                "value": 7.0,
                "unit": "life/min",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "life on hit"
        ]
    },
    {
        "food_name": "Bright Lava Eater",
        "effects": [
            "+10 food",
            "+7.1 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+20 food",
            "+7.1 health every sec for 20 sec",
            "+21% more healing from health over time regeneration for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Bright_Lava_Eater.png",
        "wiki_url": "/wiki/Bright_Lava_Eater",
        "rarity": "Uncommon",
        "ingredient_type": "Fish",
        "recipe_type": "Fish Balls",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 7.1,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 20.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 7.1,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "healing_boost",
                "value": 21.0,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "healing_boost",
            "food"
        ]
    },
    {
        "food_name": "Verdant Dragonfish",
        "effects": [
            "+10 food"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+41% critical hit damage for 10 min",
            "Immune to burning for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Verdant_Dragonfish.png",
        "wiki_url": "/wiki/Verdant_Dragonfish",
        "rarity": "Rare",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "critical hit damage",
                "value": 41.0,
                "unit": "%",
                "duration": 600
            },
            {
                "type": "immune to burning",
                "value": 10.0,
                "unit": null,
                "duration": null
            }
        ],
        "categories": [
            "food",
            "critical hit damage",
            "immune to burning"
        ]
    },
    {
        "food_name": "Elder Dragonfish",
        "effects": [
            "+9 food"
        ],
        "base_cooked_effects": [
            "+19 food",
            "+14% critical hit chance for 10 min",
            "Immune to burning for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Elder_Dragonfish.png",
        "wiki_url": "/wiki/Elder_Dragonfish",
        "rarity": "Rare",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 9.0,
                "unit": "food",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 19.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "crit chance",
                "value": 14.0,
                "unit": "%",
                "duration": 600
            },
            {
                "type": "immune to burning",
                "value": 10.0,
                "unit": null,
                "duration": null
            }
        ],
        "categories": [
            "food",
            "crit chance",
            "immune to burning"
        ]
    },
    {
        "food_name": "Starlight Nautilus",
        "effects": [
            "+10 food",
            "+17.7 health every sec for 20 sec",
            "+100 max health (only once)"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+17.7 health every sec for 20 sec",
            "+7% critical hit chance for 10 min",
            "+8.5% melee and range attack speed for 10 min",
            "+100 max health (only once)"
        ],
        "sell_value": "\u200eN/A\u200e",
        "image_file_path": "images\\Starlight_Nautilus.png",
        "wiki_url": "/wiki/Starlight_Nautilus",
        "rarity": "Legendary",
        "ingredient_type": "Fish",
        "recipe_type": "Sushi",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 17.7,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "permanent max health",
                "value": 100.0,
                "unit": "health",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 17.7,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "crit chance",
                "value": 7.0,
                "unit": "%",
                "duration": 600
            },
            {
                "type": "melee and range attack speed",
                "value": 8.5,
                "unit": "%",
                "duration": 600
            },
            {
                "type": "permanent max health",
                "value": 100.0,
                "unit": "health",
                "duration": null
            }
        ],
        "categories": [
            "health regen",
            "crit chance",
            "permanent max health",
            "food",
            "melee and range attack speed"
        ]
    },
    {
        "food_name": "Beryll Angle Fish",
        "effects": [
            "+10 food",
            "+7.5 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+20 food",
            "+136 max health for 10 min"
        ],
        "sell_value": "15",
        "image_file_path": "images\\Beryll_Angle_Fish.png",
        "wiki_url": "/wiki/Beryll_Angle_Fish",
        "rarity": "Uncommon",
        "ingredient_type": "Fish",
        "recipe_type": "Sushi",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 7.5,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 20.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "max health",
                "value": 136.0,
                "unit": "health",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "max health"
        ]
    },
    {
        "food_name": "Glistening Deepstalker",
        "effects": [
            "+10 food"
        ],
        "base_cooked_effects": [
            "+20 food",
            "+13% dodge chance for 10 min",
            "+27.2% movement speed for 1 min"
        ],
        "sell_value": "15",
        "image_file_path": "images\\Glistening_Deepstalker.png",
        "wiki_url": "/wiki/Glistening_Deepstalker",
        "rarity": "Rare",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 20.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "dodge chance",
                "value": 13.0,
                "unit": "%",
                "duration": 600
            },
            {
                "type": "movement speed",
                "value": 27.2,
                "unit": "%",
                "duration": 60
            }
        ],
        "categories": [
            "dodge chance",
            "food",
            "movement speed"
        ]
    },
    {
        "food_name": "Cosmic Form",
        "effects": [
            "+9 food",
            "+8.2 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+18 food",
            "+30.9% damage dealt by your pet for 10 min"
        ],
        "sell_value": "15",
        "image_file_path": "images\\Cosmic_Form.png",
        "wiki_url": "/wiki/Cosmic_Form",
        "rarity": "Epic",
        "ingredient_type": "Fish",
        "recipe_type": "Fish Balls",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 9.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 8.2,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 18.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "pet damage",
                "value": 30.9,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "pet damage"
        ]
    },
    {
        "food_name": "Jasper Angle Fish",
        "effects": [
            "+9 food",
            "+8.5 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+19 food",
            "+96 max health for 10 min",
            "+45 armor for 10 min"
        ],
        "sell_value": "15",
        "image_file_path": "images\\Jasper_Angle_Fish.png",
        "wiki_url": "/wiki/Jasper_Angle_Fish",
        "rarity": "Rare",
        "ingredient_type": "Fish",
        "recipe_type": "Sushi",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 9.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 8.5,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 19.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "max health",
                "value": 96.0,
                "unit": "health",
                "duration": 600
            },
            {
                "type": "armor",
                "value": 45.0,
                "unit": "armor",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "armor",
            "food",
            "max health"
        ]
    },
    {
        "food_name": "Splendid Deepstalker",
        "effects": [
            "+10 food"
        ],
        "base_cooked_effects": [
            "+20 food",
            "+10% dodge chance for 10 min",
            "+21.2% movement speed for 1 min",
            "+11.3% melee and range attack speed for 10 min"
        ],
        "sell_value": "15",
        "image_file_path": "images\\Splendid_Deepstalker.png",
        "wiki_url": "/wiki/Splendid_Deepstalker",
        "rarity": "Epic",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 20.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "dodge chance",
                "value": 10.0,
                "unit": "%",
                "duration": 600
            },
            {
                "type": "movement speed",
                "value": 21.2,
                "unit": "%",
                "duration": 60
            },
            {
                "type": "melee and range attack speed",
                "value": 11.3,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "dodge chance",
            "food",
            "melee and range attack speed",
            "movement speed"
        ]
    },
    {
        "food_name": "Terra Trilobite",
        "effects": [
            "+9 food"
        ],
        "base_cooked_effects": [
            "+19 food",
            "+103 max health for 10 min",
            "+344 mining damage for 10 min"
        ],
        "sell_value": "20",
        "image_file_path": "images\\Terra_Trilobite.png",
        "wiki_url": "/wiki/Terra_Trilobite",
        "rarity": "Uncommon",
        "ingredient_type": "Fish",
        "recipe_type": "Sushi",
        "hidden_effects": "+15 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 9.0,
                "unit": "food",
                "duration": null
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 19.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "max health",
                "value": 103.0,
                "unit": "health",
                "duration": 600
            },
            {
                "type": "mining damage",
                "value": 344.0,
                "unit": "damage",
                "duration": 600
            }
        ],
        "categories": [
            "mining damage",
            "food",
            "max health"
        ]
    },
    {
        "food_name": "Litho Trilobite",
        "effects": [
            "+11 food",
            "+8.3 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+22 food",
            "+5.5 health every sec for 20 sec",
            "+69 max mana for 10 min",
            "+43 magic barrier for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Litho_Trilobite.png",
        "wiki_url": "/wiki/Litho_Trilobite",
        "rarity": "Uncommon",
        "ingredient_type": "Fish",
        "recipe_type": "Fillet",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 8.3,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 22.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.5,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "max mana",
                "value": 69.0,
                "unit": "mana",
                "duration": 600
            },
            {
                "type": "magic barrier",
                "value": 43.0,
                "unit": "magic barrier",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "max mana",
            "magic barrier"
        ]
    },
    {
        "food_name": "Pinkhorn Pico",
        "effects": [
            "+10 food",
            "+9.5 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+20 food",
            "+9.5 health every sec for 20 sec",
            "+52.1% minion damage for 10 min"
        ],
        "sell_value": "10",
        "image_file_path": "images\\Pinkhorn_Pico.png",
        "wiki_url": "/wiki/Pinkhorn_Pico",
        "rarity": "Rare",
        "ingredient_type": "Fish",
        "recipe_type": "Pudding",
        "hidden_effects": "+10 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 9.5,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 20.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 9.5,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "minion damage",
                "value": 52.1,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "minion damage"
        ]
    },
    {
        "food_name": "Greenhorn Pico",
        "effects": [
            "+11 food",
            "+9.9 health every sec for 20 sec"
        ],
        "base_cooked_effects": [
            "+21 food",
            "+6.6 health every sec for 40 sec",
            "+36.8% minion attack speed for 10 min",
            "+12% minion critical hit chance for 10 min"
        ],
        "sell_value": "15",
        "image_file_path": "images\\Greenhorn_Pico.png",
        "wiki_url": "/wiki/Greenhorn_Pico",
        "rarity": "Rare",
        "ingredient_type": "Fish",
        "recipe_type": "Pudding",
        "hidden_effects": "+10 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 11.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 9.9,
                "unit": "health/sec",
                "duration": 20
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 21.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 6.6,
                "unit": "health/sec",
                "duration": 40
            },
            {
                "type": "minion attack speed",
                "value": 36.8,
                "unit": "%",
                "duration": 600
            },
            {
                "type": "minion critical hit chance",
                "value": 12.0,
                "unit": "%",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "food",
            "minion critical hit chance",
            "minion attack speed"
        ]
    },
    {
        "food_name": "Riftian Lampfish",
        "effects": [
            "+10 food",
            "+5.1 health every sec for 20 sec",
            "+5 blue glow for 5 min"
        ],
        "base_cooked_effects": [
            "+19 food",
            "+7.2 health every sec for 20 sec",
            "+58 max mana for 10 min",
            "+27.6% magic damage for 10 min",
            "+5 blue glow for 10 min"
        ],
        "sell_value": "20",
        "image_file_path": "images\\Riftian_Lampfish.png",
        "wiki_url": "/wiki/Riftian_Lampfish",
        "rarity": "Epic",
        "ingredient_type": "Fish",
        "recipe_type": "Fish Balls",
        "hidden_effects": "+20 food",
        "effects_parsed": [
            {
                "type": "food",
                "value": 10.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 5.1,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "blue glow",
                "value": 5.0,
                "unit": "blue glow",
                "duration": 300
            }
        ],
        "base_cooked_effects_parsed": [
            {
                "type": "food",
                "value": 19.0,
                "unit": "food",
                "duration": null
            },
            {
                "type": "health regen",
                "value": 7.2,
                "unit": "health/sec",
                "duration": 20
            },
            {
                "type": "max mana",
                "value": 58.0,
                "unit": "mana",
                "duration": 600
            },
            {
                "type": "magic damage",
                "value": 27.6,
                "unit": "%",
                "duration": 600
            },
            {
                "type": "blue glow",
                "value": 5.0,
                "unit": "blue glow",
                "duration": 600
            }
        ],
        "categories": [
            "health regen",
            "blue glow",
            "magic damage",
            "food",
            "max mana"
        ]
    }
];

const effect_indexes = {
    "health regen": [
        "Larva Meat",
        "Mushroom",
        "Marbled Meat",
        "Dodo Egg",
        "Heart Berry",
        "Carrock",
        "Puffungi",
        "Bloat Oat",
        "Pewpaya",
        "Pinegrapple",
        "Grumpkin",
        "Golden Heart Berry",
        "Golden Carrock",
        "Golden Puffungi",
        "Golden Bloat Oat",
        "Golden Pewpaya",
        "Golden Pinegrapple",
        "Golden Grumpkin",
        "Atlantean Worm Heart",
        "Orange Cave Guppy",
        "Blue Cave Guppy",
        "Rock Jaw",
        "Gem Crab",
        "Dagger Fin",
        "Pink Palace Fish",
        "Teal Palace Fish",
        "Crown Squid",
        "Yellow Blister Head",
        "Green Blister Head",
        "Devil Worm",
        "Vampire Eel",
        "Mold Shark",
        "Black Steel Urchin",
        "Azure Feather Fish",
        "Emerald Feather Fish",
        "Spirit Veil",
        "Astral Jelly",
        "Bottom Tracer",
        "Silver Dart",
        "Golden Dart",
        "Pink Coralotl",
        "White Coralotl",
        "Solid Spikeback",
        "Sandy Spikeback",
        "Grey Dune Tail",
        "Brown Dune Tail",
        "Tornis Kingfish",
        "Dark Lava Eater",
        "Bright Lava Eater",
        "Starlight Nautilus",
        "Beryll Angle Fish",
        "Cosmic Form",
        "Jasper Angle Fish",
        "Litho Trilobite",
        "Pinkhorn Pico",
        "Greenhorn Pico",
        "Riftian Lampfish"
    ],
    "food": [
        "Larva Meat",
        "Shiny Larva Meat",
        "Mushroom",
        "Giant Mushroom",
        "Amber Larva",
        "Marbled Meat",
        "Dodo Egg",
        "Heart Berry",
        "Glow Tulip",
        "Bomb Pepper",
        "Carrock",
        "Puffungi",
        "Bloat Oat",
        "Pewpaya",
        "Pinegrapple",
        "Grumpkin",
        "Sunrice",
        "Lunacorn",
        "Golden Heart Berry",
        "Golden Glow Tulip",
        "Golden Bomb Pepper",
        "Golden Carrock",
        "Golden Puffungi",
        "Golden Bloat Oat",
        "Golden Pewpaya",
        "Golden Pinegrapple",
        "Golden Grumpkin",
        "Golden Sunrice",
        "Golden Lunacorn",
        "Atlantean Worm Heart",
        "Orange Cave Guppy",
        "Blue Cave Guppy",
        "Rock Jaw",
        "Gem Crab",
        "Dagger Fin",
        "Pink Palace Fish",
        "Teal Palace Fish",
        "Crown Squid",
        "Yellow Blister Head",
        "Green Blister Head",
        "Devil Worm",
        "Vampire Eel",
        "Mold Shark",
        "Rot Fish",
        "Black Steel Urchin",
        "Azure Feather Fish",
        "Emerald Feather Fish",
        "Spirit Veil",
        "Astral Jelly",
        "Bottom Tracer",
        "Silver Dart",
        "Golden Dart",
        "Pink Coralotl",
        "White Coralotl",
        "Solid Spikeback",
        "Sandy Spikeback",
        "Grey Dune Tail",
        "Brown Dune Tail",
        "Tornis Kingfish",
        "Dark Lava Eater",
        "Bright Lava Eater",
        "Verdant Dragonfish",
        "Elder Dragonfish",
        "Starlight Nautilus",
        "Beryll Angle Fish",
        "Glistening Deepstalker",
        "Cosmic Form",
        "Jasper Angle Fish",
        "Splendid Deepstalker",
        "Terra Trilobite",
        "Litho Trilobite",
        "Pinkhorn Pico",
        "Greenhorn Pico",
        "Riftian Lampfish"
    ],
    "crit chance": [
        "Larva Meat",
        "Shiny Larva Meat",
        "Elder Dragonfish",
        "Starlight Nautilus"
    ],
    "life on hit": [
        "Shiny Larva Meat",
        "Vampire Eel",
        "Dark Lava Eater"
    ],
    "permanent max health": [
        "Giant Mushroom",
        "Amber Larva",
        "Atlantean Worm Heart",
        "Starlight Nautilus"
    ],
    "max health": [
        "Giant Mushroom",
        "Amber Larva",
        "Heart Berry",
        "Golden Heart Berry",
        "Sandy Spikeback",
        "Beryll Angle Fish",
        "Jasper Angle Fish",
        "Terra Trilobite"
    ],
    "damage": [
        "Marbled Meat",
        "Tornis Kingfish"
    ],
    "healing_boost": [
        "Dodo Egg",
        "Bright Lava Eater"
    ],
    "blue glow": [
        "Glow Tulip",
        "Lunacorn",
        "Golden Glow Tulip",
        "Golden Lunacorn",
        "Riftian Lampfish"
    ],
    "mana regen": [
        "Glow Tulip",
        "Golden Glow Tulip",
        "Bottom Tracer"
    ],
    "health_loss": [
        "Bomb Pepper",
        "Puffungi",
        "Golden Bomb Pepper",
        "Golden Puffungi",
        "Rot Fish"
    ],
    "movement speed": [
        "Bomb Pepper",
        "Golden Bomb Pepper",
        "Spirit Veil",
        "Glistening Deepstalker",
        "Splendid Deepstalker"
    ],
    "armor": [
        "Carrock",
        "Golden Carrock",
        "Gem Crab",
        "Black Steel Urchin",
        "Solid Spikeback",
        "Jasper Angle Fish"
    ],
    "reduced damage from bosses": [
        "Puffungi",
        "Golden Puffungi"
    ],
    "physical range damage": [
        "Pewpaya",
        "Golden Pewpaya",
        "Devil Worm"
    ],
    "physical melee damage": [
        "Pinegrapple",
        "Golden Heart Berry",
        "Golden Pinegrapple",
        "Rock Jaw",
        "Mold Shark"
    ],
    "mining damage": [
        "Grumpkin",
        "Golden Grumpkin",
        "Orange Cave Guppy",
        "Sandy Spikeback",
        "Terra Trilobite"
    ],
    "magic damage": [
        "Sunrice",
        "Golden Sunrice",
        "Emerald Feather Fish",
        "Riftian Lampfish"
    ],
    "glow": [
        "Sunrice",
        "Golden Sunrice"
    ],
    "minion damage": [
        "Lunacorn",
        "Golden Lunacorn",
        "Dagger Fin",
        "Pinkhorn Pico"
    ],
    "max mana": [
        "Golden Glow Tulip",
        "Emerald Feather Fish",
        "Pink Coralotl",
        "Litho Trilobite",
        "Riftian Lampfish"
    ],
    "melee attack speed": [
        "Golden Bomb Pepper",
        "Golden Pinegrapple",
        "Pink Palace Fish",
        "Grey Dune Tail"
    ],
    "knockback chance": [
        "Golden Carrock",
        "Crown Squid"
    ],
    "damage against bosses": [
        "Golden Puffungi"
    ],
    "less food drained": [
        "Golden Bloat Oat"
    ],
    "range attack speed": [
        "Golden Pewpaya",
        "Teal Palace Fish",
        "Brown Dune Tail"
    ],
    "mining speed": [
        "Golden Grumpkin",
        "White Coralotl"
    ],
    "magic barrier": [
        "Golden Sunrice",
        "Blue Cave Guppy",
        "Pink Coralotl",
        "Litho Trilobite"
    ],
    "minion attack speed": [
        "Golden Lunacorn",
        "Greenhorn Pico"
    ],
    "health regen allies": [
        "Atlantean Worm Heart"
    ],
    "immune to slow": [
        "Yellow Blister Head"
    ],
    "immune to damage": [
        "Green Blister Head"
    ],
    "immune to infection": [
        "Rot Fish"
    ],
    "thorns damage": [
        "Black Steel Urchin",
        "Solid Spikeback"
    ],
    "fishing": [
        "Astral Jelly"
    ],
    "critical hit damage": [
        "Silver Dart",
        "Verdant Dragonfish"
    ],
    "dodge chance": [
        "Golden Dart",
        "Glistening Deepstalker",
        "Splendid Deepstalker"
    ],
    "immune to burning": [
        "Verdant Dragonfish",
        "Elder Dragonfish"
    ],
    "melee and range attack speed": [
        "Starlight Nautilus",
        "Splendid Deepstalker"
    ],
    "pet damage": [
        "Cosmic Form"
    ],
    "minion critical hit chance": [
        "Greenhorn Pico"
    ]
};

const reconstructors = {
    "permanent max health": "`+${data.value} max health (only once)`;",
    "max health": "`+${data.value} max health for ${formatDuration(data.duration)}`;",
    "health_loss": "`${data.value} health`;",
    "health regen": "`+${data.value.toFixed(1)} health every sec for ${formatDuration(data.duration)}`;",
    "health regen allies": "`+${data.value} health every sec to you and all nearby allies for ${formatDuration(data.duration)}`;",
    "life on hit": "`+${data.value} life on melee hit for ${formatDuration(data.duration)}`;",
    "healing_boost": "`+${data.value}% more healing from health over time regeneration for ${formatDuration(data.duration)}`;",
    "max mana": "`+${data.value} max mana for ${formatDuration(data.duration)}`;",
    "mana regen": "`+${data.value.toFixed(1)} mana every sec for ${formatDuration(data.duration)}`;",
    "damage": "`+${data.value}% damage for ${formatDuration(data.duration)}`;",
    "physical range damage": "`+${data.value}% physical range damage for ${formatDuration(data.duration)}`;",
    "physical melee damage": "`+${data.value}% physical melee damage for ${formatDuration(data.duration)}`;",
    "magic damage": "`+${data.value}% magic damage for ${formatDuration(data.duration)}`;",
    "minion damage": "`+${data.value}% minion damage for ${formatDuration(data.duration)}`;",
    "damage against bosses": "`+${data.value}% damage against bosses for ${formatDuration(data.duration)}`;",
    "reduced damage from bosses": "`+${data.value}% reduced damage taken from bosses for ${formatDuration(data.duration)}`;",
    "thorns damage": "`+${data.value} thorns damage for ${formatDuration(data.duration)}`;",
    "mining damage": "`+${data.value} mining damage for ${formatDuration(data.duration)}`;",
    "pet damage": "`+${data.value}% damage dealt by your pet for ${formatDuration(data.duration)}`;",
    "crit chance": "`+${data.value}% critical hit chance for ${formatDuration(data.duration)}`;",
    "minion critical hit chance": "`+${data.value}% minion critical hit chance for ${formatDuration(data.duration)}`;",
    "critical hit damage": "`+${data.value}% critical hit damage for ${formatDuration(data.duration)}`;",
    "melee attack speed": "`+${data.value}% melee attack speed for ${formatDuration(data.duration)}`;",
    "range attack speed": "`+${data.value}% range attack speed for ${formatDuration(data.duration)}`;",
    "minion attack speed": "`+${data.value}% minion attack speed for ${formatDuration(data.duration)}`;",
    "melee and range attack speed": "`+${data.value}% melee and range attack speed for ${formatDuration(data.duration)}`;",
    "armor": "`+${data.value} armor for ${formatDuration(data.duration)}`;",
    "magic barrier": "`+${data.value} magic barrier for ${formatDuration(data.duration)}`;",
    "dodge chance": "`+${data.value}% dodge chance for ${formatDuration(data.duration)}`;",
    "immune to slow": "`Immune to being slowed by ${data.effect} for ${formatDuration(data.duration)}`;",
    "immune to damage": "`Immune to ${data.effect} damage for ${formatDuration(data.duration)}`;",
    "immune to burning": "`Immune to burning for ${formatDuration(data.duration)}`;",
    "immune to infection": "`Immune to mold infection for ${formatDuration(data.duration)}`;",
    "movement speed": "`+${data.value}% movement speed for ${formatDuration(data.duration)}`;",
    "knockback chance": "`+${data.value}% knockback chance for ${formatDuration(data.duration)}`;",
    "food": "`+${data.value} food`;",
    "less food drained": "`+${data.value}% less food drained when running for ${formatDuration(data.duration)}`;",
    "blue glow": "`+${data.value} blue glow for ${formatDuration(data.duration)}`;",
    "glow": "`+${data.value} glow for ${formatDuration(data.duration)}`;",
    "mining speed": "`+${data.value}% mining speed for ${formatDuration(data.duration)}`;",
    "fishing": "`+${data.value} fishing for ${formatDuration(data.duration)}`;"
};
