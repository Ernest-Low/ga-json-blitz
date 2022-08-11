import items from "../../data_files/data_items.js";
import update_hpmp from "../modules/update_hpmp.js";
import $actionText from "../modules/actionText.js";
import current_entities from "../entities.js";
import turn_control from "./turn_control.js";

//  Weapon Info: Damage: Base Damage, weapon_spill means the diceroll variance. Eg: Weapon Damage 5, spill of 2, means the base damage is 5-2 to 5+2 (3 - 7)
//  Critical Chance: Base of 5%. Increased by skills / items. (Math.ceil(Math.random()* 100)
//  Critical hits do 150% damage (maybe increase in future via effects) - Round down to integer
const player_actions = {
  reset_critical: function () {
    this.critical_hit = "";
  },

  critical_hit: "",

  //  Calculate damage
  attack_calculation: function (entity, multiplier) {
    let damage_spill_chance = Math.random();
    if (damage_spill_chance > 0.5) {
      damage_spill_chance = 1;
    } else damage_spill_chance = -1;
    let total_damage =
      multiplier.damage +
      multiplier.scaling[0] * entity.strength +
      multiplier.scaling[1] * entity.agility +
      multiplier.scaling[2] * entity.intelligence +
      damage_spill_chance *
        Math.floor(Math.random() * (multiplier.damage_spill + 1));

    return total_damage;
  },

  damage_adjustment: function (damage) {
    let weapon_round = Math.random();
    if (weapon_round > 0.5) {
      damage = Math.ceil(damage);
    } else {
      damage = Math.floor(damage);
    }
    return damage;
  },

  critical_check: function (entity, damage) {
    //  Increase in future via items / buffs
    let crit_chance = entity.crit_chance;
    if (crit_chance > Math.ceil(Math.random() * 100)) {
      damage = Math.floor(damage * 1.5);
      this.critical_hit = "CRITICAL! ";
      // console.log("CRITICAL!");
    }
    return damage;
  },

  damage_target: function (damage, target, type) {
    current_entities.current_turn = "inbetween";
    //  Seconds till enemy turn
    turn_control.player_turn(5);

    if (target.health >= damage) {
      update_hpmp(target, damage, 0);
      $actionText(
        `${this.critical_hit}You dealt ${damage} damage to ${target.name} with ${type}!`,
        3
      );
    } else {
      update_hpmp(target, target.health, 0);
      $actionText(
        `${this.critical_hit}You overkilled ${target.name}, dealing ${damage} damage with ${type}!`,
        3
      );
    }
  },

  //    Basic attack by player
  player_attack: function (entity, target) {
    this.reset_critical();
    const weapon = items.filter((obj) => obj.id == entity.equipment.weapon)[0];
    const damage = this.attack_calculation(entity, weapon);
    const damage_total = this.damage_adjustment(
      this.critical_check(entity, damage)
    );
    //  Target buffs for defense go here in calculations
    const final_damage = damage_total - target.armor;

    this.damage_target(final_damage, target, "a basic attack");
  },
};

export default player_actions;

// {
//     name: "Dissidia",
//     id: "",
//     level: 0,
//     exp: 0,
//     exp_req: 100,
//     health: 100,
//     health_max: 100,
//     mana: 20,
//     mana_max: 20,
//     crit_chance: 5,
//     // armor: 0,    //* Future when armor is added
//     strength: 5,
//     agility: 5,
//     intelligence: 5,
//     gold: 0,
//     equipment: {
//       weapon: 1001,
//     },
//     items: [2001],
//     skills: [],
//     status: [],
//   };

// {
//     name: "Rusty Sword",
//     itemid: 1001,
//     damage: 6,
//     damage_spill: 2,
//     attributes: [0, 0, 0, 0, 0],
//     scaling: [0.5, 0, 0],
//     type: "melee",
//     price: 50,
//   }
