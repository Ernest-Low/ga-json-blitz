//! Control turn of battle (timer)
//? Speed stat to affect in future? Will need to calculate whos turn is it next
//* Set timeouts when called to next action / unlock buttons when it's player's turn
//  Also good place to trigger buffs / debuff effects

import current_entities from "../entities";
import enemyAttack from "./enemyattack";
import $actionText from "../modules/actionText.js";

const turn_control = {
  //  Player turn over, pending monster turn
  player_turn: function (time) {
    console.log("Player turn over, pending monster turn");
    setTimeout(() => {
      current_entities.current_turn = "monster";
      enemyAttack.enemy_attack(
        current_entities.monsters[current_entities.currentmonster],
        current_entities.players[current_entities.currentplayer]
      );
    }, time * 1000);
  },

  //    Monster turn over, pending player turn
  enemy_turn: function (time) {
    console.log("Monster turn over, pending player turn");
    setTimeout(() => {
      current_entities.current_turn = "player";
      $actionText("It's your turn now!", 0.3);
    }, time * 1000);
  },
};
export default turn_control;
