const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());

const data = [
    {
        "filename": "amulet_diamond",
        "extension": "png",
        "text": "Amulet Diamond"
    },
    {
        "filename": "amulet_emerald",
        "extension": "png",
        "text": "Amulet Emerald"
    },
    {
        "filename": "amulet_ruby",
        "extension": "png",
        "text": "Amulet Ruby"
    },
    {
        "filename": "amulet_sapphire",
        "extension": "png",
        "text": "Amulet Sapphire"
    },
    {
        "filename": "bar_bronze_1",
        "extension": "png",
        "text": "Bar Bronze 1"
    },
    {
        "filename": "bar_bronze_2",
        "extension": "png",
        "text": "Bar Bronze 2"
    },
    {
        "filename": "bar_iron_1",
        "extension": "png",
        "text": "Bar Iron 1"
    },
    {
        "filename": "bar_iron_2",
        "extension": "png",
        "text": "Bar Iron 2"
    },
    {
        "filename": "card_back",
        "extension": "png",
        "text": "Card Back"
    },
    {
        "filename": "card_club",
        "extension": "png",
        "text": "Card Club"
    },
    {
        "filename": "card_diamond",
        "extension": "png",
        "text": "Card Diamond"
    },
    {
        "filename": "card_heart",
        "extension": "png",
        "text": "Card Heart"
    },
    {
        "filename": "card_spade",
        "extension": "png",
        "text": "Card Spade"
    },
    {
        "filename": "chess_black_bishop",
        "extension": "png",
        "text": "Chess Black Bishop"
    },
    {
        "filename": "chess_black_king",
        "extension": "png",
        "text": "Chess Black King"
    },
    {
        "filename": "chess_black_knight",
        "extension": "png",
        "text": "Chess Black Knight"
    },
    {
        "filename": "chess_black_pawn",
        "extension": "png",
        "text": "Chess Black Pawn"
    },
    {
        "filename": "chess_black_queen",
        "extension": "png",
        "text": "Chess Black Queen"
    },
    {
        "filename": "chess_black_rook",
        "extension": "png",
        "text": "Chess Black Rook"
    },
    {
        "filename": "chess_white_bishop",
        "extension": "png",
        "text": "Chess White Bishop"
    },
    {
        "filename": "chess_white_king",
        "extension": "png",
        "text": "Chess White King"
    },
    {
        "filename": "chess_white_knight",
        "extension": "png",
        "text": "Chess White Knight"
    },
    {
        "filename": "chess_white_pawn",
        "extension": "png",
        "text": "Chess White Pawn"
    },
    {
        "filename": "chess_white_queen",
        "extension": "png",
        "text": "Chess White Queen"
    },
    {
        "filename": "chess_white_rook",
        "extension": "png",
        "text": "Chess White Rook"
    },
    {
        "filename": "coin_copper_1",
        "extension": "png",
        "text": "Coin Copper 1"
    },
    {
        "filename": "coin_copper_2",
        "extension": "png",
        "text": "Coin Copper 2"
    },
    {
        "filename": "coin_gold_1",
        "extension": "png",
        "text": "Coin Gold 1"
    },
    {
        "filename": "coin_gold_2",
        "extension": "png",
        "text": "Coin Gold 2"
    },
    {
        "filename": "coin_silver_1",
        "extension": "png",
        "text": "Coin Silver 1"
    },
    {
        "filename": "coin_silver_2",
        "extension": "png",
        "text": "Coin Silver 2"
    },
    {
        "filename": "gem_diamond_1",
        "extension": "png",
        "text": "Gem Diamond 1"
    },
    {
        "filename": "gem_diamond_2",
        "extension": "png",
        "text": "Gem Diamond 2"
    },
    {
        "filename": "gem_emerald_1",
        "extension": "png",
        "text": "Gem Emerald 1"
    },
    {
        "filename": "gem_emerald_2",
        "extension": "png",
        "text": "Gem Emerald 2"
    },
    {
        "filename": "gem_ruby_1",
        "extension": "png",
        "text": "Gem Ruby 1"
    },
    {
        "filename": "gem_ruby_2",
        "extension": "png",
        "text": "Gem Ruby 2"
    },
    {
        "filename": "gem_sapphire_1",
        "extension": "png",
        "text": "Gem Sapphire 1"
    },
    {
        "filename": "gem_sapphire_2",
        "extension": "png",
        "text": "Gem Sapphire 2"
    },
    {
        "filename": "ore_coal_1",
        "extension": "png",
        "text": "Ore Coal 1"
    },
    {
        "filename": "ore_coal_2",
        "extension": "png",
        "text": "Ore Coal 2"
    },
    {
        "filename": "ore_coal_3",
        "extension": "png",
        "text": "Ore Coal 3"
    },
    {
        "filename": "ore_coal_4",
        "extension": "png",
        "text": "Ore Coal 4"
    },
    {
        "filename": "ore_iron_1",
        "extension": "png",
        "text": "Ore Iron 1"
    },
    {
        "filename": "ore_iron_2",
        "extension": "png",
        "text": "Ore Iron 2"
    },
    {
        "filename": "ore_iron_3",
        "extension": "png",
        "text": "Ore Iron 3"
    },
    {
        "filename": "ore_iron_4",
        "extension": "png",
        "text": "Ore Iron 4"
    },
    {
        "filename": "ore_tin_1",
        "extension": "png",
        "text": "Ore Tin 1"
    },
    {
        "filename": "ore_tin_2",
        "extension": "png",
        "text": "Ore Tin 2"
    },
    {
        "filename": "ore_tin_3",
        "extension": "png",
        "text": "Ore Tin 3"
    },
    {
        "filename": "ore_tin_4",
        "extension": "png",
        "text": "Ore Tin 4"
    },
    {
        "filename": "potion_blue_big",
        "extension": "png",
        "text": "Potion Blue Big"
    },
    {
        "filename": "potion_blue_medium",
        "extension": "png",
        "text": "Potion Blue Medium"
    },
    {
        "filename": "potion_blue_small",
        "extension": "png",
        "text": "Potion Blue Small"
    },
    {
        "filename": "potion_green_big",
        "extension": "png",
        "text": "Potion Green Big"
    },
    {
        "filename": "potion_green_medium",
        "extension": "png",
        "text": "Potion Green Medium"
    },
    {
        "filename": "potion_green_small",
        "extension": "png",
        "text": "Potion Green Small"
    },
    {
        "filename": "potion_red_big",
        "extension": "png",
        "text": "Potion Red Big"
    },
    {
        "filename": "potion_red_medium",
        "extension": "png",
        "text": "Potion Red Medium"
    },
    {
        "filename": "potion_red_small",
        "extension": "png",
        "text": "Potion Red Small"
    },
    {
        "filename": "potion_yellow_big",
        "extension": "png",
        "text": "Potion Yellow Big"
    },
    {
        "filename": "potion_yellow_medium",
        "extension": "png",
        "text": "Potion Yellow Medium"
    },
    {
        "filename": "potion_yellow_small",
        "extension": "png",
        "text": "Potion Yellow Small"
    },
    {
        "filename": "ring_diamond",
        "extension": "png",
        "text": "Ring Diamond"
    },
    {
        "filename": "ring_emerald",
        "extension": "png",
        "text": "Ring Emerald"
    },
    {
        "filename": "ring_ruby",
        "extension": "png",
        "text": "Ring Ruby"
    },
    {
        "filename": "ring_sapphire",
        "extension": "png",
        "text": "Ring Sapphire"
    },
    {
        "filename": "shield_kite_bronze_1",
        "extension": "png",
        "text": "Shield Kite Bronze 1"
    },
    {
        "filename": "shield_kite_bronze_2",
        "extension": "png",
        "text": "Shield Kite Bronze 2"
    },
    {
        "filename": "shield_kite_iron_1",
        "extension": "png",
        "text": "Shield Kite Iron 1"
    },
    {
        "filename": "shield_kite_iron_2",
        "extension": "png",
        "text": "Shield Kite Iron 2"
    },
    {
        "filename": "shield_oak",
        "extension": "png",
        "text": "Shield Oak"
    },
    {
        "filename": "shield_square_bronze",
        "extension": "png",
        "text": "Shield Square Bronze"
    },
    {
        "filename": "shield_square_iron",
        "extension": "png",
        "text": "Shield Square Iron"
    },
    {
        "filename": "shield_willow",
        "extension": "png",
        "text": "Shield Willow"
    },
    {
        "filename": "spell_bones_major",
        "extension": "png",
        "text": "Spell Bones Major"
    },
    {
        "filename": "spell_bones_minor",
        "extension": "png",
        "text": "Spell Bones Minor"
    },
    {
        "filename": "spell_bones_superior",
        "extension": "png",
        "text": "Spell Bones Superior"
    },
    {
        "filename": "spell_darkness_major",
        "extension": "png",
        "text": "Spell Darkness Major"
    },
    {
        "filename": "spell_darkness_minor",
        "extension": "png",
        "text": "Spell Darkness Minor"
    },
    {
        "filename": "spell_darkness_superior",
        "extension": "png",
        "text": "Spell Darkness Superior"
    },
    {
        "filename": "spell_earth_major",
        "extension": "png",
        "text": "Spell Earth Major"
    },
    {
        "filename": "spell_earth_minor",
        "extension": "png",
        "text": "Spell Earth Minor"
    },
    {
        "filename": "spell_earth_superior",
        "extension": "png",
        "text": "Spell Earth Superior"
    },
    {
        "filename": "spell_fire_major",
        "extension": "png",
        "text": "Spell Fire Major"
    },
    {
        "filename": "spell_fire_minor",
        "extension": "png",
        "text": "Spell Fire Minor"
    },
    {
        "filename": "spell_fire_superior",
        "extension": "png",
        "text": "Spell Fire Superior"
    },
    {
        "filename": "spell_gem_major",
        "extension": "png",
        "text": "Spell Gem Major"
    },
    {
        "filename": "spell_gem_minor",
        "extension": "png",
        "text": "Spell Gem Minor"
    },
    {
        "filename": "spell_gem_superior",
        "extension": "png",
        "text": "Spell Gem Superior"
    },
    {
        "filename": "spell_heart_major",
        "extension": "png",
        "text": "Spell Heart Major"
    },
    {
        "filename": "spell_heart_minor",
        "extension": "png",
        "text": "Spell Heart Minor"
    },
    {
        "filename": "spell_heart_superior",
        "extension": "png",
        "text": "Spell Heart Superior"
    },
    {
        "filename": "spell_light_major",
        "extension": "png",
        "text": "Spell Light Major"
    },
    {
        "filename": "spell_light_minor",
        "extension": "png",
        "text": "Spell Light Minor"
    },
    {
        "filename": "spell_light_superior",
        "extension": "png",
        "text": "Spell Light Superior"
    },
    {
        "filename": "spell_mystic_major",
        "extension": "png",
        "text": "Spell Mystic Major"
    },
    {
        "filename": "spell_mystic_minor",
        "extension": "png",
        "text": "Spell Mystic Minor"
    },
    {
        "filename": "spell_mystic_superior",
        "extension": "png",
        "text": "Spell Mystic Superior"
    },
    {
        "filename": "spell_nature_major",
        "extension": "png",
        "text": "Spell Nature Major"
    },
    {
        "filename": "spell_nature_minor",
        "extension": "png",
        "text": "Spell Nature Minor"
    },
    {
        "filename": "spell_nature_superior",
        "extension": "png",
        "text": "Spell Nature Superior"
    },
    {
        "filename": "spell_regeneration_major",
        "extension": "png",
        "text": "Spell Regeneration Major"
    },
    {
        "filename": "spell_regeneration_minor",
        "extension": "png",
        "text": "Spell Regeneration Minor"
    },
    {
        "filename": "spell_regeneration_superior",
        "extension": "png",
        "text": "Spell Regeneration Superior"
    },
    {
        "filename": "spell_sand_major",
        "extension": "png",
        "text": "Spell Sand Major"
    },
    {
        "filename": "spell_sand_minor",
        "extension": "png",
        "text": "Spell Sand Minor"
    },
    {
        "filename": "spell_sand_superior",
        "extension": "png",
        "text": "Spell Sand Superior"
    },
    {
        "filename": "spell_shield_major",
        "extension": "png",
        "text": "Spell Shield Major"
    },
    {
        "filename": "spell_shield_minor",
        "extension": "png",
        "text": "Spell Shield Minor"
    },
    {
        "filename": "spell_shield_superior",
        "extension": "png",
        "text": "Spell Shield Superior"
    },
    {
        "filename": "spell_skull_major",
        "extension": "png",
        "text": "Spell Skull Major"
    },
    {
        "filename": "spell_skull_minor",
        "extension": "png",
        "text": "Spell Skull Minor"
    },
    {
        "filename": "spell_skull_superior",
        "extension": "png",
        "text": "Spell Skull Superior"
    },
    {
        "filename": "spell_sword_major",
        "extension": "png",
        "text": "Spell Sword Major"
    },
    {
        "filename": "spell_sword_minor",
        "extension": "png",
        "text": "Spell Sword Minor"
    },
    {
        "filename": "spell_sword_superior",
        "extension": "png",
        "text": "Spell Sword Superior"
    },
    {
        "filename": "spell_water_major",
        "extension": "png",
        "text": "Spell Water Major"
    },
    {
        "filename": "spell_water_minor",
        "extension": "png",
        "text": "Spell Water Minor"
    },
    {
        "filename": "spell_water_superior",
        "extension": "png",
        "text": "Spell Water Superior"
    },
    {
        "filename": "spell_wind_major",
        "extension": "png",
        "text": "Spell Wind Major"
    },
    {
        "filename": "spell_wind_minor",
        "extension": "png",
        "text": "Spell Wind Minor"
    },
    {
        "filename": "spell_wind_superior",
        "extension": "png",
        "text": "Spell Wind Superior"
    }
]

app.get('/', (req, res) => {
    res.json({
        key: 'Hello World!',
    });
});

app.get('/photos', (req, res) => {
    res.json(data)
})

app.listen(8000, () => {
    console.log('Server listening');
});
