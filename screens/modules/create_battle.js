//! To create a battlescene with provided variables
import battleScreen from "../battlescreen";
import zone_control from "../scene_control/zone_control.js";
import current_fight from "../current_fight";
import current_entities from "../entities";

const create_battle = () => {
  //  Declare new zone (Future)

  //  Reset variables first
  current_fight();

  //  Declare monster(s) based on zone
  zone_control();

  //  Open battlescreen
  battleScreen();
};

export default create_battle;
