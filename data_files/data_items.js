//! Design item drop table?
//* Attributes = [str,agi,int,hp,mp]
//* Type: melee, ranged, magic
// Melee higher base damage
// Ranged higher damage spill, higher scaling
// Magic no damage (for now?), adds more int / mana

const items = [
  {
    name: "Rusty Sword",
    id: 1001,
    damage: 4,
    damage_spill: 2,
    attributes: [0, 0, 0, 0, 0],
    scaling: [0.2, 0, 0],
    type: "melee",
    price: 50,
  },
  {
    name: "Iron Sword",
    id: 1002,
    damage: 8,
    damage_spill: 3,
    attributes: [1, 0, 0, 0, 0],
    scaling: [0.2, 0, 0],
    type: "melee",
    price: 200,
  },
  {
    name: "Crude Bow",
    id: 1003,
    damage: 4,
    damage_spill: 3,
    attributes: [0, 0, 0, 0, 0],
    scaling: [0, 0.3, 0],
    type: "ranged",
    price: 50,
  },
  {
    name: "Fine Bow",
    id: 1004,
    damage: 7,
    damage_spill: 4,
    attributes: [0, 1, 0, 0, 0],
    scaling: [0, 0.3, 0],
    type: "ranged",
    price: 200,
  },
  {
    name: "Rough Staff",
    id: 1005,
    damage: 1,
    damage_spill: 0,
    attributes: [0, 0, 1, 0, 10],
    scaling: [0, 0, 0],
    type: "magic",
    price: 50,
  },
  {
    name: "Carved Staff",
    id: 1006,
    damage: 2,
    damage_spill: 1,
    attributes: [0, 0, 2, 0, 20],
    scaling: [0, 0, 0],
    type: "magic",
    price: 200,
  },

  {
    name: "Basic Health Potion",
    id: 4001,
    value: 20,
    type: "health",
    price: 20,
  },
  {
    name: "Health Potion",
    id: 4002,
    value: 35,
    type: "health",
    price: 50,
  },
  {
    name: "Basic Mana Potion",
    id: 4003,
    value: 20,
    type: "mana",
    price: 20,
  },
  {
    name: "Mana Potion",
    id: 4004,
    value: 40,
    type: "mana",
    price: 50,
  },
];

export default items;
