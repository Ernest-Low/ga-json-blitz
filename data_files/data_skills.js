//? Should all cost mana? Maybe not.
//* Usual skill types currently: Do damage, buff stats (temp / for remainder of fight), recover hp, do critical damage on next skill / attack.
//* Multiplier [str/agi/int]
//* Type: Spells / Skills
//* Weapon: melee, ranged, magic

const skills = [
  {
    name: "Power Slash",
    spellid: 1,
    mana_cost: 6,
    base_damage: 6,
    multiplier: [0.5, 0, 0],
    damage_spill: 2,
    type: "skill",
    weapon: "melee",
    buff: [],
    debuff: [],
    cost: 50,
  },
  {
    name: "Fireball",
    spellid: 2,
    mana_cost: 7,
    base_damage: 6,
    multiplier: [0, 0, 0.5],
    damage_spill: 2,
    type: "spell",
    weapon: "magic",
    buff: [],
    debuff: [],
    cost: 50,
  },
  {
    name: "Power Shot",
    spellid: 3,
    mana_cost: 6,
    base_damage: 6,
    multiplier: [0, 0, 0.5],
    damage_spill: 2,
    type: "skill",
    weapon: "ranged",
    buff: [],
    debuff: [],
    cost: 50,
  },
];
