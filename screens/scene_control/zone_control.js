import current_entities from "../entities";
import monsters from "../../data_files/data_monster";

const zone_control = () => {
  const roll_variance = current_entities.zone.enemy_type.length;
  //    Rolled enemy ID
  const rolled_enemy_id = Math.ceil(Math.random() * roll_variance);
  //    Pick out enemy from monsters by ID
  const enemy = monsters.filter((obj) => obj.id == rolled_enemy_id);
  console.log(enemy[0]);
  current_entities.monsters.push(JSON.parse(JSON.stringify(enemy[0])));
};

export default zone_control;

// {
//     name: "Forest",
//     id: 1,
//     level_range: [1, 3],
//     enemy_type: [1, 2],
//     enemy_count: 8,
//   },
// };
