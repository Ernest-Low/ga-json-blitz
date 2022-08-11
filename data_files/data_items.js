// ! Design item drop table?
// * Attributes = [str,agi,int,hp,mp]
// * Type: melee, ranged, magic
// Melee higher base damage
// Ranged higher damage spill, higher scaling
// Magic no damage (for now?), adds more int / mana

// ! Currently 2 item types only: common / uncommon
// * Loot Table? (Temp loot table probs)
// > Common loot table of monster level -2 to monster level of itemlevel (monster level 4 will drop level 2 - 4 loot)
// > Rare loot table of monster level -4 to monster level of itemlevel (monster level 7 will drop level 3 - 7 loot)
//     - 3% (For now) per fight for rare items
//     - 10% (For now) per monster for common items?

const items = [
  {
    name: "Rusty Sword",
    id: 1001,
    drop_level: 2,
    rarity: "Common",
    damage: 4,
    damage_spill: 2,
    attributes: [0, 0, 0, 0, 0],
    scaling: [0.2, 0, 0],
    type: "Melee",
    img_src: "url(image_data/icons/weapons/sword/sword_1.png)",
    value: 50,
  },
  {
    name: "Iron Sword",
    id: 1002,
    drop_level: 5,
    rarity: "Common",
    damage: 8,
    damage_spill: 3,
    attributes: [1, 0, 0, 0, 0],
    scaling: [0.2, 0, 0],
    type: "Melee",
    img_src: "url(image_data/icons/weapons/sword/sword_2.png)",
    value: 200,
  },
  {
    name: "Crude Bow",
    id: 1003,
    drop_level: 2,
    rarity: "Common",
    damage: 4,
    damage_spill: 3,
    attributes: [0, 0, 0, 0, 0],
    scaling: [0, 0.3, 0],
    type: "Ranged",
    img_src: "url(image_data/icons/weapons/bow/bow_1.png)",
    value: 50,
  },
  {
    name: "Fine Bow",
    id: 1004,
    drop_level: 5,
    rarity: "Common",
    damage: 7,
    damage_spill: 4,
    attributes: [0, 1, 0, 0, 0],
    scaling: [0, 0.3, 0],
    type: "Ranged",
    img_src: "url(image_data/icons/weapons/bow/bow_2.png)",
    value: 200,
  },
  {
    name: "Rough Staff",
    id: 1005,
    drop_level: 2,
    rarity: "Common",
    damage: 1,
    damage_spill: 0,
    attributes: [0, 0, 1, 0, 10],
    scaling: [0, 0, 0],
    type: "Magic",
    img_src: "url(image_data/icons/weapons/staff/staff_1.png)",
    value: 50,
  },
  {
    name: "Carved Staff",
    id: 1006,
    drop_level: 5,
    rarity: "Common",
    damage: 2,
    damage_spill: 1,
    attributes: [0, 0, 2, 0, 20],
    scaling: [0, 0, 0],
    type: "Magic",
    img_src: "url(image_data/icons/weapons/staff/staff_2.png)",
    value: 200,
  },

  {
    name: "Basic Health Potion",
    id: 4001,
    drop_level: 1,
    rarity: "Common",
    potency: 20,
    type: "Health",
    img_src: "url(image_data/icons/consumables/health_pot/health_pot_1.png)",
    value: 20,
  },
  {
    name: "Health Potion",
    id: 4002,
    drop_level: 4,
    rarity: "Common",
    potency: 35,
    type: "Health",
    img_src: "url(image_data/icons/consumables/health_pot/health_pot_2.png)",
    value: 50,
  },
  {
    name: "Basic Mana Potion",
    id: 4003,
    drop_level: 2,
    rarity: "Common",
    potency: 20,
    type: "Mana",
    img_src: "url(image_data/icons/consumables/mana_pot/mana_pot_1.png)",
    value: 20,  
  },
  {
    name: "Mana Potion",
    id: 4004,
    drop_level: 5,
    rarity: "Common",
    potency: 40,
    type: "Mana",
    img_src: "url(image_data/icons/consumables/mana_pot/mana_pot_2.png)",
    value: 50,
  },
];

export default items;
