//!  Render character into scene

import character_info from "./infobox.js";

const $entity_window = (entity) => {
  // const player1 = current_entities.players[0];
  const $infobox = character_info(entity);

  const $image = $("<div>").attr("id", `${entity.id}image`).css({
    width: "100%",
    height: "60%",
    "background-image": `../../${entity.img_src}`,
    "background-size": "100% 100%",
    "background-repeat": "no-repeat",
    "object-fit": "fill",
  });

  const $entitybox = $("<div>")
    .attr("id", `${entity.id}box`)
    .css({
      width: entity.img_size[0],
      height: entity.img_size[1],
      display: "flex",
      "flex-direction": "column",
      "align-items": "flex-end",
      "justify-content": "flex-end",
      padding: "1rem",
    })
    .append($infobox, $image);

  console.log(entity);
  // setTimeout(() => {
  //   update_hpmp(entity, 0, 0);
  // }, 10);

  return $entitybox;
};

export default $entity_window;
