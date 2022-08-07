//! Item IDs

//  Misc Item IDs: 1 - 1000
//  Weapon Item IDs: 1001 - 2000
//* Armor Item IDs: 2001 - 3000         (Extra)
//* Accessories Item IDs: 3001 - 4000   (Extra)
//  Consumables:    4001 - 5000

//  Weapon Info: Damage: Base Damage, weapon_spill means the diceroll variance. Eg: Weapon Damage 5, spill of 2, means the base damage is 5-2 to 5+2 (3 - 7)

const player = {
  name: "",
  level: 0,
  exp: 0,
  exp_req: 100,
  health: 100,
  strength: 5,
  agility: 5,
  intelligence: 5,
  gold: 100,
  equipment: {
    weapon: {
      name: "Rusty Sword",
      itemid: 1001,
      damage: 5,
      damage_spill: 2,
      attributes: [0, 0, 0],
    },
  },
  items: [
    {
      name: "Basic Health Potion",
      itemid: 2001,
      recovery: 20,
    },
  ],
};

const weapons = [
  {
    name: "Rusty Sword",
    itemid: 1001,
    damage: 5,
    damage_spill: 2,
    attributes: [0, 0, 0],
  },
];

const consumables = [
  {
    name: "Basic Health Potion",
    itemid: 4001,
    recovery: 20,
  },
];
