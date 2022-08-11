//! Post battle screen

const $afterbattle = () => {
  const screen = $("<div>").attr("id", "victoryscreen").css({
    width: "100%",
    height: "53%",
    "background-color": "rgba(0,0,0,0.7)",
  });

  const $screentop = $("<div>").attr("id", "screentop");
  const $screenmiddle = $("<div>").attr("id", "screenmiddle");
  const $screenbottom = $("<div>").attr("id", "screenbottom");


};

export default $afterbattle;
