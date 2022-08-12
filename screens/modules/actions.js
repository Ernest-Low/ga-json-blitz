//*  Actions window
//! Attack, Skills, Items, Run
import player_actions from "../scene_control/playeractions.js";
import current_entities from "../entities.js";
import actionSkills from "./actionSkills.js";
import create_actionText from "./create_actiontext.js";

const $actions = () => {
  //  CSS For Buttons
  const button_css = {
    width: "50%",
    height: "100%",
    color: "ghostwhite",
    "background-color": "rgba(255,255,255,0)",
    "font-size": "1.5rem",
    "text-align": "center",
    border: "none",
    "font-family": "Alagard",
  };

  //  Basic Attack
  const $attack = $("<button>")
    .attr("id", "btnattack")
    .addClass("actionbutton")
    .css(button_css)
    .text("ATTACK")
    .on("click", () => {
      console.log("Attacking");
      if (current_entities.current_turn == "player") {
        player_actions.player_attack(
          current_entities.players[current_entities.currentplayer],
          current_entities.monsters[current_entities.currentmonster]
        );
      }
    });

  //  Open Skills
  const $skills = $("<button>")
    .attr("id", "btnskills")
    .addClass("actionbutton")
    .css(button_css)
    .text("SKILLS")
    .on("click", () => {
      console.log("Using a skill");
      if (current_entities.current_turn == "player") {
        if (current_entities.skillbar_status == false) {
          console.log("removing text and enabling skills");
          $("#actiontext").remove();
          actionSkills();
          current_entities.skillbar_status = true;
        } else {
          console.log("adding text and disabling skills");
          $("#skillscontainer").remove();
          create_actionText();
          current_entities.skillbar_status = false;
        }
      }
    });

  //  Open Items
  const $items = $("<button>")
    .attr("id", "btnitems")
    .addClass("actionbutton")
    .css(button_css)
    .text("ITEMS")
    .on("click", () => {
      console.log("Using a item");
    });

  //  Run away?!
  const $run = $("<button>")
    .attr("id", "btnrun")
    .addClass("actionbutton")
    .css(button_css)
    .text("RUN")
    .on("click", () => {
      console.log("Running");
      console.log("Dev code: Adding 300 Strength");
      current_entities.players[current_entities.currentplayer].strength += 300;
    });

  //  Attack / Skills holding box
  const $topbox = $("<div>")
    .attr("id", "actionstopbox")
    .css({
      display: "flex",
      width: "100%",
      height: "50%",
      overflow: "hidden",
      "flex-direction": "row",
    })
    .append($attack, $skills);

  //  Items / Run holding box
  const $botbox = $("<div>")
    .attr("id", "actionstopbox")
    .css({
      display: "flex",
      width: "100%",
      height: "50%",
      overflow: "hidden",
      "flex-direction": "row",
    })
    .append($items, $run);

  //  All 4 buttons holding box
  const $actionsone = $("<div>")
    .attr("id", "actionsone")
    .css({
      display: "flex",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      "flex-direction": "column",
    })
    .append($topbox, $botbox);

  return $actionsone;
};

export default $actions;
