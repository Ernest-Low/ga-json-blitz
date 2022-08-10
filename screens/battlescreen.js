import $actions from "./modules/actions.js";
import $actionText from "./modules/actionText.js";
import $player_window from "./modules/player.js";

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
    "background-image": "url('../image_data/Zone_1_Background.png')",
    "background-size": "100% 100%",
    "background-repeat": "no-repeat",
    "object-fit": "fill",
    "z-index": 2,
    display: "inline-flex",
    "align-items": "center",
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
    "background-image": "url('../image_data/btm_Right_4panel.png')",
    "background-size": "100% 100%",
    "background-repeat": "no-repeat",
    "object-fit": "fill",
  });

  //  Bottom Left Panel (Long box)
  const $longpanel = $("<div>").attr("id", "longpanel").css({
    width: "65%",
    height: "100%",
    "background-image": "url('../image_data/btm_Left_Panel.png')",
    "background-size": "100% 100%",
    "background-repeat": "no-repeat",
    "object-fit": "fill",
    padding: "0 1.3rem 0 1.3rem",
  });

  //  Add elements
  $("body").append($battlescreen);
  $battlescreen.append($battlescene, $battlewindow);
  $battlewindow.append($longpanel, $actionpanel);
  $actionpanel.append($actions);
  //  Showtext (#actiontext)
  $longpanel.append(() =>
    $actionText("Hello World this is a very generic sentence.")
  );

  // Generates the player in the window above
  $battlescene.append($player_window);

};

export default battleScreen;
