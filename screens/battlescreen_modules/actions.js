//*  Actions window
//! Attack, Skills, Items, Run

const $actions = () => {
  const $attack = $("<button>")
    .attr("id", "btnattack")
    .css({
      width: "50%",
      height: "100%",
      color: "ghostwhite",
      "background-color": "rgba(255,255,255,0)",
      "font-size": "1.5rem",
      "text-align": "center",
      border: "none",
      "font-family": "Alagard",
    })
    .text("ATTACK")
    .on("click", () => {
      console.log("Attacking");
    });
  const $skills = $("<button>")
    .attr("id", "btnskills")
    .css({
      width: "50%",
      height: "100%",
      color: "ghostwhite",
      "background-color": "rgba(255,255,255,0)",
      "font-size": "1.5rem",
      "text-align": "center",
      border: "none",
      "font-family": "Alagard",
    })
    .text("SKILLS")
    .on("click", () => {
      console.log("Using a skill");
    });
  const $items = $("<button>")
    .attr("id", "btnitems")
    .css({
      width: "50%",
      height: "100%",
      color: "ghostwhite",
      "background-color": "rgba(255,255,255,0)",
      "font-size": "1.5rem",
      "text-align": "center",
      border: "none",
      "font-family": "Alagard",
    })
    .text("ITEMS")
    .on("click", () => {
      console.log("Using a item");
    });
  const $run = $("<button>")
    .attr("id", "btnrun")
    .css({
      width: "50%",
      height: "100%",
      color: "ghostwhite",
      "background-color": "rgba(255,255,255,0)",
      "font-size": "1.5rem",
      "text-align": "center",
      border: "none",
      "font-family": "Alagard",
    })
    .text("RUN")
    .on("click", () => {
      console.log("Running");
    });
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
