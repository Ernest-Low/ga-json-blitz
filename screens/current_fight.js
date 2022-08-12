//! Reset current targets
//? Use to set enemy targets in future?

import current_entities from "./entities";

const current_fight = () => {
  //! Placeholder enemy targeting / speed
  current_entities.currentplayer = 0;
  current_entities.currentmonster = 0;
  current_entities.current_turn = "player";
};

export default current_fight;
