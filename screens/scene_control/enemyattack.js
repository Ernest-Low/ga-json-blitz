//! Enemy attack control

//? How will the enemy decide to attack / use a skill?
//* Math roll ? Equal chance to attack / use any skill. When skills are on cooldown / lack mana, they will default to regular attack.
//  Think of a better calculation for enemy deciding to use a skill
//* Enemies might cast more spells if they have more int maybe?

//  ? Monster Damage Calculation
//  * Damage window = (damage - damage_spill) to (damage + damage_spill)
//  * Critical chance (150% damage) - Base of 3%.

import update_hpmp from "../modules/update_hpmp.js";
import $actionText from "../modules/actionText.js";
import turn_control from "./turn_control";
import current_entities from "../entities";
import skills_list from "../../data_files/data_skills.js";

const enemyAttack = {
  reset_critical: function () {
    this.critical_hit = "";
  },

  critical_hit: "",

  attack_calculation: function (entity) {
    let damage_spill_chance = Math.random();
    if (damage_spill_chance > 0.5) {
      damage_spill_chance = 1;
    } else damage_spill_chance = -1;
    let total_damage =
      entity.damage +
      entity.scaling[0] * entity.strength +
      entity.scaling[1] * entity.agility +
      entity.scaling[2] * entity.intelligence +
      damage_spill_chance *
        Math.floor(Math.random() * (entity.damage_spill + 1));

    return total_damage;
  },

  skill_calculation: function (entity, spell) {
    let damage_spill_chance = Math.random();
    if (damage_spill_chance > 0.5) {
      damage_spill_chance = 1;
    } else damage_spill_chance = -1;
    let total_damage =
      spell.damage +
      spell.scaling[0] * entity.strength +
      spell.scaling[1] * entity.agility +
      spell.scaling[2] * entity.intelligence +
      damage_spill_chance *
        Math.floor(Math.random() * (spell.damage_spill + 1));

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
    //  Increase in future via effects / buffs
    let crit_chance = 3 + entity.crit_chance;
    if (crit_chance >= Math.ceil(Math.random() * 100)) {
      damage = Math.floor(damage * 1.5);
      this.critical_hit = "CRITICAL! ";
      // console.log("CRITICAL!");
    }
    return damage;
  },

  damage_target: function (damage, target, type, entity) {
    current_entities.current_turn = "pending";
    turn_control.enemy_turn(5);

    if (target.health >= damage) {
      update_hpmp(target, damage, 0);
      $actionText(
        `${this.critical_hit}You were dealt ${damage} damage from ${entity.name} by ${type}!`,
        3
      );
    } else {
      update_hpmp(target, target.health, 0);
      $actionText(
        `${this.critical_hit}You were overkilled by ${entity.name}, taking ${damage} damage from ${type}!`,
        3
      );
    }
  },

  enemy_attack: function (entity, target) {
    this.reset_critical();
    const choice = Math.floor(Math.random() * (entity.skills.length + 1));

    const entity_skills = entity.skills.map((obj) => {
      return skills_list.filter((skillz) => {
        return obj == skillz.id;
      })[0];
    });
    // console.log(entity_skills);

    // console.log(choice);
    let damage = 0;
    let type = "a basic attack";
    if (choice == entity.skills.length) {
      //  Attack
      damage = this.attack_calculation(entity);
    } else if (entity_skills[choice].mana_cost <= entity.mana) {
      //  Use a skill, mana check confirmed
      damage = this.skill_calculation(entity, entity_skills[choice]);
      // console.log("Monster is casting a spell");
      type = entity_skills[choice].name;
      update_hpmp(
        entity,
        entity_skills[choice].health_cost,
        entity_skills[choice].mana_cost
      );
    } else {
      //  Default back to attack
      damage = this.attack_calculation(entity);
    }
    damage = this.damage_adjustment(this.critical_check(entity, damage));
    //  Adjustments for armor / defensive buffs
    const final_damage = damage - target.armor;
    this.damage_target(final_damage, target, type, entity);
  },
};

export default enemyAttack;
