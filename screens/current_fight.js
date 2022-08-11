//! Reset current targets
//? Use to set enemy targets in future?

import current_entities from "./entities";

const current_fight = () => {
  //! Placeholder enemy targeting
  current_entities.currentplayer = 0;
  current_entities.currentmonster = 0;
};

export default current_fight;
