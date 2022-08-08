//! Design item drop table?
//* Attributes = [str,agi,int,hp,mp]

const items = [
  {
    name: "Rusty Sword",
    itemid: 1001,
    damage: 6,
    damage_spill: 2,
    attributes: [0, 0, 0, 0, 0],
    price: 50,
  },
  {
    name: "Iron Sword",
    itemid: 1002,
    damage: 7,
    damage_spill: 3,
    attributes: [1, 0, 0, 0, 0],
    price: 200,
  },
  {
    name: "Crude Bow",
    itemid: 1003,
    damage: 6,
    damage_spill: 3,
    attributes: [0, 0, 0, 0, 0],
    price: 50,
  },
  {
    name: "Fine Bow",
    itemid: 1004,
    damage: 8,
    damage_spill: 4,
    attributes: [0, 1, 0, 0, 0],
    price: 200,
  },
  {
    name: "Rough Staff",
    itemid: 1005,
    damage: 4,
    damage_spill: 2,
    attributes: [0, 0, 1, 0, 5],
    price: 50,
  },
  {
    name: "Carved Staff",
    itemid: 1006,
    damage: 5,
    damage_spill: 2,
    attributes: [0, 0, 2, 0, 15],
    price: 200,
  },

  {
    name: "Basic Health Potion",
    itemid: 4001,
    recovery: 20,
    recovery_type: "health",
    price: 20,
  },
  {
    name: "Health Potion",
    itemid: 4002,
    recovery: 35,
    recovery_type: "health",
    price: 50,
  },
  {
    name: "Basic Mana Potion",
    itemid: 4003,
    recovery: 20,
    recovery_type: "mana",
    price: 20,
  },
  {
    name: "Mana Potion",
    itemid: 4004,
    recovery: 40,
    recovery_type: "mana",
    price: 50,
  },
];

export default items;
