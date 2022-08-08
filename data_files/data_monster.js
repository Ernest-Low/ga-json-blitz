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
//  * Critical chance (Double damage) - Base of 3%. Critical damage = 50% more damage (round down)
//  * > Critical chance increases by 1% per monster level above the player

const monsters = [
  {
    name: "Goblin",
    level: 1,
    health: 20,
    armor: 0,
    strength: 5,
    agility: 5,
    intelligence: 5,
    damage: 7,
    damage_spill: 3,
    skills: [],
    status: [],
  },
];

export default monsters;
