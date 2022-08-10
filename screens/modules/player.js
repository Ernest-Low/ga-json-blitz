import current_entities from "../entities.js";
import character_info from "./infobox.js";
import update_hpmp from "./update_hpmp.js";

const $player_window = () => {
  const player1 = current_entities.players[0];
  const $infobox = character_info(player1);

  const $playerimage = $("<div>").attr("id", "playerimage").css({
    "background-color": "blue", //  Placeholder
    width: "5rem", //  Placeholder
    height: "9rem", //  Placeholder
  });

  const $player = $("<div>")
    .attr("id", "playerbox")
    .css({
      width: "15%",
      height: "40%",
      display: "flex",
      "flex-direction": "column",
      "align-items": "center",
      padding: "3rem",
    })
    .append($infobox, $playerimage);

  console.log(player1);
  setTimeout(() => {
    update_hpmp(player1, 30, 10);
  }, 1000);
  console.log(player1.health);

  return $player;
};

export default $player_window;
