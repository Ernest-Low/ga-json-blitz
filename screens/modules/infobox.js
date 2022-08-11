//! Create the infobox above character head in battle screen

const character_info = (entity) => {
  //  Name
  const $name = $("<div>")
    .text(entity.name)
    .attr("id", `${entity.id}name`)
    .attr("style", "50%")
    .css({
      color: "ghostwhite",
      "font-family": "Alagard",
      "font-size": "1rem",
      "white-space": "nowrap",
    });

  const player_info = `${entity.name} Lv ${entity.level}`;
  $name.text(player_info);

  //* HP Box
  //  HP Progress Bar
  const $hpbar = $("<div>").attr("id", `${entity.id}hpbar`).css({
    height: "0.5rem",
    width: "100%",
    "border-radius": "0.5rem",
    "background-color": "rgba(255,0,0,1)",
  });

  //  HP Progress Bar Cover
  const $hpbarcover = $("<div>")
    .attr("id", `${entity.id}hpbarcover`)
    .css({
      "background-color": "	rgba(230, 255, 204, 1)",
      height: "0.5rem",
      width: "4rem",
      "border-radius": "1rem",
    })
    .append($hpbar);

  //  HP Value (text)
  const $hpvalue = $("<div>")
    .attr("id", `${entity.id}hpvalue`)
    .text(`${entity.health}/${entity.health_max}`)
    .css({
      color: "rgba(255,0,0,1)",
      // width: "5rem",
      padding: "0 0.5rem 0 0",
      "text-align": "right",
    });

  //!   Check if mana 0, then skip mana bar
  if (entity.mana_max == 0) {
    const $hpmp = $("<div>")
      .attr("id", `${entity}hpmp`)
      .css({
        display: "flex",
        "flex-direction": "row",
        "align-items": "center",
      })
      .append($hpvalue, $hpbarcover);

    const $infobox = $("<div>")
      .attr("id", `${entity.id}infobox`)
      .css({
        "background-color": "rgba(0,0,0,0.5)",
        "border-radius": "1rem",
        padding: "1rem",
        "font-size": "0.7rem",
        display: "flex",
        "flex-direction": "column",
      })
      .append($name, $hpmp);

    return $infobox;
  }

  //*  MP Box
  //  MP Progress Bar
  const $mpbar = $("<div>").attr("id", `${entity.id}mpbar`).css({
    height: "0.5rem",
    width: "100%",
    "border-radius": "0.5rem",
    "background-color": "rgba(0,0,255,1)",
  });

  // MP Progress Bar Cover
  const $mpbarcover = $("<div>")
    .attr("id", `${entity.id}mpbarcover`)
    .css({
      "background-color": "	rgba(230, 255, 204, 1)",
      height: "0.5rem",
      width: "4rem",
      "border-radius": "1rem",
    })
    .append($mpbar);

  //  MP Value (Text)
  const $mpvalue = $("<div>")
    .attr("id", `${entity.id}mpvalue`)
    .text(`${entity.mana}/${entity.mana_max}`)
    .css({
      color: "rgba(0,0,255,1)",
      // width: "5rem",
      padding: "0 0.5rem 0 0",
      "text-align": "right",
    });

  //*   Group hp / mp bars & values together for nicer look
  //  Holds all the HP Related bars
  const $hpmpvalues = $("<div>")
    .attr("id", `${entity.id}hpmpvalues`)
    .css({
      display: "flex",
      "flex-direction": "column",
    })
    .append($hpvalue, $mpvalue);

  //  Holds all the MP Related bars
  const $hpmpbars = $("<div>")
    .attr("id", `${entity.id}hpmpbars`)
    .css({
      display: "flex",
      "flex-direction": "column",
      gap: "0.33rem",
    })
    .append($hpbarcover, $mpbarcover);

  //  HP/MP Div holder
  const $hpmp = $("<div>")
    .attr("id", `${entity}hpmp`)
    .css({
      display: "flex",
      "flex-direction": "row",
      "align-items": "center",
    })
    .append($hpmpvalues, $hpmpbars);

  //!   Push everything in
  //  Holds all the information above the entity's head
  const $infobox = $("<div>")
    .attr("id", `${entity.id}infobox`)
    .css({
      "background-color": "rgba(0,0,0,0.5)",
      "border-radius": "1rem",
      padding: "1rem",
      "font-size": "0.7rem",
      display: "flex",
      "flex-direction": "column",
    })
    .append($name, $hpmp);

  return $infobox;
};

export default character_info;
