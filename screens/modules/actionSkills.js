//  Replacing left-side window with skills

//* Try overflow:auto to make scrollable div?
//  https://www.youtube.com/watch?v=v_8CmC6cwUs
import player_actions from "../scene_control/playeractions.js";
import current_entities from "../entities";
import skills_list from "../../data_files/data_skills";
import create_actionText from "./create_actiontext";
import items from "../../data_files/data_items.js";
import $actionText from "./actionText.js";

const actionSkills = () => {
  const skillscontainer = $("<div>").attr("id", "skillscontainer").css({
    width: "100%",
    height: "100%",
    display: "flex",
    "flex-direction": "row",
    overflow: "auto",
    "flex-wrap": "wrap",
    padding: "1rem",
  });

  const player = current_entities.players[current_entities.currentplayer];

  //    Copy Shallow copy of skills into array
  const player_skills = player.skills.map((obj) => {
    return skills_list.filter((skillz) => {
      return obj == skillz.id;
    })[0];
  });

  // let evens = false;
  // const skills_left = [];
  // const skills_right = [];
  //* Seperate into 2 groups (.skillsleft .skillsright)
  player_skills.forEach((obj) => {
    const $items = $("<div>")
      .css({
        width: "30%",
        height: "30%",
        loading: "lazy",
        "background-image": `url("/public/assets/image_data/modules/Buttons/redrectangle.png")`,
        "background-size": "100% 100%",
        "background-repeat": "no-repeat",
        "object-fit": "contain",
      })
      .append(
        $("<button>")
          .attr("id", `skillid${obj.id}`)
          .addClass("actionbutton")
          .css({
            width: "100%",
            height: "100%",
            color: "ghostwhite",
            "background-color": "rgba(255,255,255,0)",
            "font-size": "1.5rem",
            "text-align": "center",
            border: "none",
            "font-family": "Alagard",
          })
          .text(`${obj.name}`)
          .on("click", () => {
            console.log(`Casting ${obj.name}`);
            $("#skillscontainer").remove();
            create_actionText();
            current_entities.skillbar_status = false;
            if (player.mana >= obj.mana_cost) {
              if (
                obj.weapon ==
                items.filter((obj) => obj.id == player.equipment.weapon)[0].type
              ) {
                console.log("Correct weapon type, casting spell");
                player_actions.player_skill(
                  player,
                  obj,
                  current_entities.monsters[current_entities.currentmonster]
                );
              } else {
                console.log("Invalid weapon type equipped for spell");
                $actionText("Invalid weapon type equipped for spell", 1);
              }
            } else {
              console.log("Not enough mana for spell");
              $actionText("Not enough mana for spell", 1);
            }
          })
      );
    skillscontainer.append($items);
  });
  //   if (evens == false) {
  //     $items.addClass("skillsleft");
  //     skills_left.push(`skillid${obj.id}`);
  //     evens = true;
  //   } else {
  //     $items.addClass("skillsright");
  //     skills_right.push(`skillid${obj.id}`);
  //     evens = false;
  //   }
  // });

  // console.log(`Skills length: ${skills_left.length}`);
  // while (skills_left.length != 0) {
  //   const $subskill = $("<div>").css({
  //     width: "100%",
  //     height: "50%",
  //     display: "flex",
  //     overflow: "hidden",
  //     "flex-direction": "row",
  //   });

  //   const target = skills_left.shift();
  //   $subskill.append(target);
  //   if (skills_right.length != 0) {
  //     const target2 = skills_right.shift();
  //     $subskill.append(target2);
  //   }
  //   skillscontainer.append($subskill);
  // }

  $("#longpanel").append(skillscontainer);
};

export default actionSkills;
