//  ! Monsters

//  ? Player exp calculation - Up to level 10?
//  * Player Level         : 1    2    3    4    5    6     7     8     9     10
//  * Player Levels EXP req: 100  230  390  580  800  1050  1330  1640  1980  2350
//  15n^2 + 85n

//  ? Monster Exp Calculation
//  * Monsters lvl from 1 - 15
//  * Exp per monster: Monster level * 10 * (4 to 6) + (20 to 40)
//  * Monster level:     1          2           3           4           5           6           7           8           9           10
//  * Monster exp:   100 - 118  139 - 172   184 - 232   235 - 298   292 - 370   355 - 448   424 - 532   499 - 622   580 - 718   667 - 820
//  3n^2 + 30n + 67 to  3n^2 + 45n + 70

//  ? Monster Damage Calculation
//  * Damage window = (damage - damage_spill) to (damage + damage_spill)
//  * Critical chance (150% damage) - Base of 3%.
//  * > Critical chance increases by 1% per monster level above the player

//  ? Level scaling
//  * Future addition!? Need to think of a calculation that will determine an enemy's power.

const monsters = [
  {
    name: "Goblin",
    id: 1,
    level: 1,
    health: 30,
    health_max: 30,
    mana: 0,
    mana_max: 0,
    armor: 0,
    damage: 5,
    damage_spill: 2,
    crit_chance: 0,
    strength: 5,
    agility: 5,
    intelligence: 2,
    scaling: [0.3, 0.2, 0],
    skills: [],
    status: [],
    img_src: "url(../../image_data/Mystery.png)",
    img_size: ["15%", "60%"],
  },
  {
    name: "Orc",
    id: 2,
    level: 2,
    health: 45,
    health_max: 45,
    mana: 0,
    mana_max: 0,
    armor: 1,
    damage: 7,
    damage_spill: 3,
    crit_chance: 0,
    strength: 7,
    agility: 4,
    intelligence: 2,
    scaling: [0.5, 0.1, 0],
    skills: [],
    status: [],
    img_src: "url(../../image_data/Orc.png)",
    img_size: ["20%", "70%"],
  },
  {
    name: "Twister",
    id: 3,
    level: 2,
    health: 30,
    health_max: 30,
    mana: 0,
    mana_max: 0,
    armor: 0,
    damage: 5,
    damage_spill: 4,
    crit_chance: 30,
    strength: 4,
    agility: 7,
    intelligence: 2,
    scaling: [0.2, 0.4, 0],
    skills: [],
    status: [],
    img_src: "url(../../image_data/Twister.png)",
    img_size: ["15%", "60%"],
  },
  {
    name: "Goblin Mage",
    id: 4,
    level: 2,
    health: 40,
    health_max: 40,
    mana: 30,
    mana_max: 30,
    armor: 0,
    damage: 4,
    damage_spill: 1,
    crit_chance: 0,
    strength: 3,
    agility: 3,
    intelligence: 8,
    scaling: [0, 0, 0],
    skills: [2],
    status: [],
    img_src: "url(../../image_data/Mystery.png)",
    img_size: ["15%", "60%"],
  },
];

export default monsters;

// "background-image": "url('../image_data/btm_Left_Panel.png')",
