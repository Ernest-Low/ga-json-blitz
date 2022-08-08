//! Item IDs

//  Misc Item IDs: 1 - 1000
//  Weapon Item IDs: 1001 - 2000
//* Armor Item IDs: 2001 - 3000         (Extra)
//* Accessories Item IDs: 3001 - 4000   (Extra)
//  Consumables:    4001 - 5000

//  Weapon Info: Damage: Base Damage, weapon_spill means the diceroll variance. Eg: Weapon Damage 5, spill of 2, means the base damage is 5-2 to 5+2 (3 - 7)
//  Critical Chance: Base of 5%. Increased by skills / items. (Math.ceil(Math.random()* 100)
//  Critical hits do 150% damage (maybe increase in future via effects) - Round down to integer

//* Potential Speed set - Progress bar for who moves (Boot icon?!) - Maybe multiple turns


const player = {
  name: "",
  level: 0,
  exp: 0,
  exp_req: 100,
  health: 100,
  health_max: 100,
  mana: 20,
  mana_max: 20,
  crit_chance: 5,
  // armor: 0,    //* Future when armor is added
  strength: 5,
  agility: 5,
  intelligence: 5,
  gold: 0,
  equipment: {          // ! Add equipment via js next time (find by itemid)
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
  skills:[],
  status:[],
};

export default player;