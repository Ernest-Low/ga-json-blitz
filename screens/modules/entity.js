import character_info from "./infobox.js";
import update_hpmp from "./update_hpmp.js";

const $entity_window = (entity) => {
  // const player1 = current_entities.players[0];
  const $infobox = character_info(entity);

  const $image = $("<div>").attr("id", `${entity.id}image`).css({
    "background-color": "blue", //  Placeholder
    width: "5rem", //  Placeholder
    height: "9rem", //  Placeholder
  });

  const $entitybox = $("<div>")
    .attr("id", `${entity.id}box`)
    .css({
      width: "15%",
      height: "40%",
      display: "flex",
      "flex-direction": "column",
      "align-items": "center",
      padding: "3rem",
    })
    .append($infobox, $image);

  console.log(entity);
  // setTimeout(() => {
  //   update_hpmp(entity, 0, 0);
  // }, 10);

  return $entitybox;
};

export default $entity_window;
