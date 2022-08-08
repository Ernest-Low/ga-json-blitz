import $actions from "./battlescreen_modules/actions.js";

//* Render Battle Screen (Fighting scene)
const battleScreen = () => {
  //  Battlescreen cover
  const $battlescreen = $("<div>").attr("id", "battlescreen").css({
    display: "flex",
    "flex-direction": "column",
    "z-index": 1,
    "background-color": "black",
    width: "95vw",
    height: "95vh",
    border: "3px solid blue",
    overflow: "hidden",
  });

  const $battlescene = $("<div>").attr("id", "battlescene").css({
    width: "100%",
    height: "75%",
    "background-color": "lightblue", // Placeholder
    "z-index": 2,
  });

  const $battlewindow = $("<div>").attr("id", "battlewindow").css({
    width: "100%",
    height: "25%",
    "background-color": "yellow",
    "z-index": 2,
    display: "flex",
    "flex-direction": "row",
    border: "3px solid grey",
    overflow: "hidden",
  });

  const $actionpanel = $("<div>").attr("id", "actionpanel").css({
    width: "50%",
    height: "100%",
    "background-color": "green",
    "border-right": "2px solid white",
  });

  const $characterpanel = $("<div>").attr("id", "characterpanel").css({
    width: "50%",
    height: "100%",
    "background-color": "orange",
    "border-left": "2px solid white",
  });

  $("body").append($battlescreen);
  $battlescreen.append($battlescene, $battlewindow);
  $battlewindow.append($actionpanel, $characterpanel);
  $actionpanel.append($actions);

  // $mainscreen.append($("<h1>").text("Hello World").css("color", "white"));
  // $textbox.append($("<h2>").text("Hello Me").css("color", "white"));
  console.log("Loaded Battlescreen?");
};

export default battleScreen;
