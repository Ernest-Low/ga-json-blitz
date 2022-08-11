//! To create a battlescene with provided variables
import current_entities from "../entities";

const create_battle = () => {
  //  Zone check? For remaining monsters
  current_entities.zone.enemy_count -= 1;
  if (current_entities.zone.enemy_count == 0){
    //  Declare new zone


  }

  


  zone_control();
  current_fight();




};

export default create_battle