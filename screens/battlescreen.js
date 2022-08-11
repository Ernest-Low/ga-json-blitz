import current_entities from "./entities.js";
import $actions from "./modules/actions.js";
import $actionText from "./modules/actionText.js";
import $entity_window from "./modules/entity.js";


//* Render Battle Screen (Fighting scene)
const battleScreen = () => {
  //  Battlescreen Window
  const $battlescreen = $("<div>").attr("id", "battlescreen").css({
    display: "flex",
    "flex-direction": "column",
    "z-index": 1,
    width: "80vw",
    height: "95vh",
    border: "4px solid blue",
    overflow: "hidden",
  });

  //  Top scene
  const $battlescene = $("<div>").attr("id", "battlescene").css({
    width: "100%",
    height: "75%",
    "background-image": current_entities.zone.img_src,
    "background-size": "100% 100%",
    "background-repeat": "no-repeat",
    "object-fit": "fill",
    "z-index": 2,
    display: "flex",
    "align-items": "center",
    "justify-content": "space-evenly",
    "flex-direction": "row",
  });

  //  Bottom Windows
  const $battlewindow = $("<div>").attr("id", "battlewindow").css({
    width: "100%",
    height: "25%",
    "z-index": 2,
    display: "flex",
    "flex-direction": "row",
    "background-color": "#663a31",
    overflow: "hidden",
  });

  //  Bottom right panel (4 grid)
  const $actionpanel = $("<div>").attr("id", "actionpanel").css({
    width: "35%",
    height: "100%",
    "background-image": "url('../image_data/modules/btm_Right_4panel.png')",
    "background-size": "100% 100%",
    "background-repeat": "no-repeat",
    "object-fit": "fill",
  });

  //  Bottom Left Panel (Long box)
  const $longpanel = $("<div>").attr("id", "longpanel").css({
    width: "65%",
    height: "100%",
    "background-image": "url('../image_data/modules/btm_Left_Panel.png')",
    "background-size": "100% 100%",
    "background-repeat": "no-repeat",
    "object-fit": "fill",
    padding: "0 1.3rem 0 1.3rem",
  });

  //  Bottom Left Panel (textbox)
  const $textpanel = $("<h4>")
  .attr("id", "actiontext")
  .css({
    color: "ghostwhite",
    "font-family": "Alagard",
    "font-size": "2rem",
    "word-wrap": "break-word",
  })
  .text("");


  //  Inbetween the player and enemy
  const $battlearea = $("<div>").attr("id", "battlearea").css({
    width: "40%",
    height: "100%",
  });

  //  Add elements
  $("body").append($battlescreen);
  $battlescreen.append($battlescene, $battlewindow);
  $battlewindow.append($longpanel, $actionpanel);
  $actionpanel.append($actions);

  //  Showtext (#actiontext)
  const zonetext = `Now entering: ${current_entities.zone.name}`;
  $longpanel.append($textpanel);
  $actionText(zonetext, 1)

  // Generates the player in the window above
  //* Variance in future for more entities.
  $battlescene.append($entity_window(current_entities.players[0]), $battlearea, $entity_window(current_entities.monsters[0]));
  
};

export default battleScreen;
