//!  Control which entities are currently in battle
//* Player will be known as p1, monsters known as m1 m2 m3...
//* Contain zone properties too

//? Push entities in here.

const current_entities = {
  players: [],
  gold: 0,
  items: [2001],
  monsters: [],
  zone: {},
  currentplayer: "",
  currentmonster: "",
  current_turn: "player",
  fight_status: "",
  skillbar_status: false,
};

export default current_entities;
