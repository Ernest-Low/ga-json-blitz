//!  Control which entities are currently in battle
//* Player will be known as p1, monsters known as m1 m2 m3...
//* Contain zone properties too

//? Push entities in here.

const current_entities = {
  players: [],
  monsters: [],
  zone: {},
  currentplayer: "",
  currentmonster: "",
  current_turn: "player"
};


export default current_entities;