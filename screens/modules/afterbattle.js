//! Post battle screen
//! Check if zone has remaining enemies
//? First stage, declare overall victory if cleared

//* Use after keywords for ids

import current_entities from "../entities";

const afterBattle = () => {
  current_entities.zone.enemy_count -= 1;
  if (current_entities.zone.enemy_count == 0) {
    //  Declare new zone (Not now)
    //! Means its GG Victory
    //? Victory scene to be placed here temp
    console.log("Game Over, you win!");
  }

  //  Append this screen on the black screen
  const screen = $("<div>").attr("id", "afterscreen").css({
    width: "100%",
    height: "100%",
    "background-color": "rgba(0,0,0,1)",
  });

  //  Show victory / defeat in title
  const $screentop = $("<div>").attr("id", "screentop");
  const $title = $("<h1>")
    .attr("id", "aftertitle")
    .css({
      color: "ghostwhite",
      "font-family": "Alagard",
      "font-size": "4rem",
    })
    .text(current_entities.fight_status);
  $screentop.append($title)

  
  //  Clean up monsters
  //  Regenerate hero
  

  const $screenmiddle = $("<div>").attr("id", "screenmiddle");
  const $screenbottom = $("<div>").attr("id", "screenbottom");
};

export default afterBattle;
