//* Render Mainscreen (Aka main)
const mainScreen = () => {
  //  Mainscreen cover
  const $mainscreen = $("<div>").attr("id", "mainscreen").css({
    display: "flex",
    "align-items": "flex-end",
    "justify-content": "center",
    "z-index": 1,
    "background-image": "url('../image_data/Game_Landing_Page.png')",
    "background-size": "100% 100%",
    "background-repeat": "no-repeat",
    "background-attachment": "fixed",
    width: "95vw",
    height: "95vh",
    border: "3px solid blue",
    overflow: "hidden",
  });

  // Textholder div center-bottom
  const $textbox = $("<div>").attr("id", "maintextbox").css({
    display: "flex",
    "flex-direction": "column",
    // "background-color": "blue", // Placeholder
    "z-index": 2,
    width: "20vw",
    height: "20vh",
    overflow: "hidden",
  });

  // Game start button
  const $gamestart = $("<button>")
    .attr("id", "btnmainstart")
    .text("Start")
    .css({
      color: "white",
      "background-color": "rgba(0,0,0,0.8)",
      "font-size": "1rem",
      width: "100%",
      height: "25%",
    })
    .on("click", () => console.log("Start Clicked"));

  const $gamesettings = $("<button>")
    .attr("id", "btnmainsettings")
    .text("Settings")
    .css({
      color: "white",
      "background-color": "rgba(0,0,0,0.8)",
      "font-size": "1rem",
      width: "100%",
      height: "25%",
    })
    .on("click", () => console.log("Settings Clicked"));

  $("body").append($mainscreen);
  $("#mainscreen").append($textbox);
  $("#maintextbox").append($gamestart);
  $("#maintextbox").append($gamesettings);
  // $mainscreen.append($("<h1>").text("Hello World").css("color", "white"));
  // $textbox.append($("<h2>").text("Hello Me").css("color", "white"));
  console.log("Loaded mainscreen?");
};

export default mainScreen;