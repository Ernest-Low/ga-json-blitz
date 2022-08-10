import battleScreen from "./battlescreen";
import current_entities from "./entities";
import player from "../data_files/data_player.js";
import zones from "../data_files/data_zone";
import zone_control from "./scene_control/zone_control.js";
import current_fight from "./current_fight";

//* Render Mainscreen (Aka main)
const mainScreen = () => {
  //  Back blackscreen
  $("body").append(
    $("<div>").attr("id", "backblackscreen").css({
      "z-index": -1,
      width: "80vw",
      height: "95vh",
      border: "4px solid blue",
      position: "absolute",
      "background-color": "rgba(0,0,0,1)",
    })
  );

  //  Mainscreen cover
  const $mainscreen = $("<div>").attr("id", "mainscreen").css({
    display: "flex",
    "align-items": "flex-end",
    "justify-content": "center",
    "z-index": 1,
    "background-image": "url('../image_data/Game_Landing_Page.png')",
    "background-size": "100% 100%",
    "background-repeat": "no-repeat",
    "object-fit": "fill",
    width: "80vw",
    height: "95vh",
    border: "4px solid blue",
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
      "font-size": "1.5rem",
      width: "100%",
      height: "25%",
      "font-family": "Alagard",
    })
    .on("click", () => {
      console.log("Start Clicked");

      //!  Call the player, temporary
      let copiedhero = JSON.parse(JSON.stringify(player));
      current_entities.players.push(copiedhero);
      current_entities.players[0].id = "p1";
      current_entities.players[0].name = "Alphinaud";
      //! Declared forest as zone (temp)
      current_entities.zone = JSON.parse(JSON.stringify(zones.forest));
      zone_control();
      current_fight();


      //  Remove mainscreen (Temp), ask for player input for name
      $("#mainscreen").fadeOut(2000);
      setTimeout(() => {
        $("#mainscreen").remove();
        //  Open battlescreen
        battleScreen();
      }, 2000);
    });

  const $gamesettings = $("<button>")
    .attr("id", "btnmainsettings")
    .text("Settings")
    .css({
      color: "white",
      "background-color": "rgba(0,0,0,0.8)",
      "font-size": "1.5rem",
      width: "100%",
      height: "25%",
      "font-family": "Alagard",
    })
    .on("click", () => console.log("Settings Clicked"));

  $("body").append($mainscreen);
  $("#mainscreen").append($textbox);
  $("#maintextbox").append($gamestart);
  $("#maintextbox").append($gamesettings);
};

export default mainScreen;
