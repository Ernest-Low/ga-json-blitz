import $actions from "./battlescreen_modules/actions.js";

//* Render Battle Screen (Fighting scene)
const battleScreen = () => {
  //  Battlescreen cover
  const $battlescreen = $("<div>").attr("id", "battlescreen").css({
    display: "flex",
    "flex-direction": "column",
    "z-index": 1,
    width: "80vw",
    height: "95vh",
    border: "4px solid blue",
    overflow: "hidden",
  });

  const $battlescene = $("<div>").attr("id", "battlescene").css({
    width: "100%",
    height: "75%",
    "background-image": "url('../image_data/Zone2_Background.png')",
    "background-size": "100% 100%",
    "background-repeat": "no-repeat",
    "object-fit" : "fill",
    "z-index": 2,
  });

  const $battlewindow = $("<div>").attr("id", "battlewindow").css({
    width: "100%",
    height: "25%",
    "z-index": 2,
    display: "flex",
    "flex-direction": "row",
    overflow: "hidden",
  });

  const $actionpanel = $("<div>").attr("id", "actionpanel").css({
    width: "35%",
    height: "100%",
    "background-image": "url('../image_data/btm_Right_4panel.png')",
    "background-size": "100% 100%",
    "background-repeat": "no-repeat",
    "object-fit" : "fill",
  });

  const $characterpanel = $("<div>").attr("id", "characterpanel").css({
    width: "65%",
    height: "100%",
    "background-image": "url('../image_data/btm_Left_Panel.png')",
    "background-size": "100% 100%",
    "background-repeat": "no-repeat",
    "object-fit" : "fill",
  });

  $("body").append($battlescreen);
  $battlescreen.append($battlescene, $battlewindow);
  $battlewindow.append($characterpanel, $actionpanel);
  $actionpanel.append($actions);

  // $mainscreen.append($("<h1>").text("Hello World").css("color", "white"));
  // $textbox.append($("<h2>").text("Hello Me").css("color", "white"));
  console.log("Loaded Battlescreen?");
};

export default battleScreen;
