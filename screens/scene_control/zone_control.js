//! Zone control looks at monster and adds a monster into the current enemies
//? Potential for more targets / varying enemies next time (via constructors, given params by zones)

import current_entities from "../entities";
import monsters from "../../data_files/data_monster";

const zone_control = () => {
  //  Create array of monster objects based on enemies present in zone
  const zone_list = current_entities.zone.enemy_type.map((obj) => {
    return monsters.filter((obj2) => {
      return obj == obj2.id;
    })[0];
  });

  console.log(`Zone List of monsters: ${zone_list}`);
  //  For every 10 levels, increase level variance range by 1 (starts at 2)
  const player_level =
    current_entities.players[current_entities.currentplayer].level;
  const level_variance_diff = 2 + Math.floor(player_level / 10);

  //  Based on level variance, filter out monsters that fit criteria (exception possible?)
  const new_monsters = zone_list.filter((monster) => {
    if (
      monster.level >= player_level - level_variance_diff &&
      monster.level <= player_level + level_variance_diff
    ) {
      return monster;
    }
  });
  console.log(`Eligible monsters list: ${new_monsters}`);

  //  Spawn random eligible enemy into enemy list (do multiple times if multiple enemies)
  //  Create deep_copies of monster
  const picked_enemy =
    new_monsters[Math.floor(Math.random() * new_monsters.length)];
  console.log(picked_enemy);
  current_entities.monsters.push(JSON.parse(JSON.stringify(picked_enemy)));
};

export default zone_control;

// const roll_variance = current_entities.zone.enemy_type.length;
// //    Rolled enemy ID
// const rolled_enemy_id = Math.ceil(Math.random() * roll_variance);
//    Pick out enemy from monsters by ID
// const enemy = monsters.filter((obj) => obj.id == rolled_enemy_id);
// console.log(enemy[0]);

// {
//     name: "Forest",
//     id: 1,
//     level_range: [1, 3],
//     enemy_type: [1, 2],
//     enemy_count: 8,
//   },
// };
