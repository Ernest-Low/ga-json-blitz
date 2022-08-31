//! To return a string containing item information (based on itemid)
//* Mostly for use in tooltip for shop / item drops / inventory

// Misc Item IDs: 1 - 1000
// Weapon Item IDs: 1001 - 2000
// Armor Item IDs: 2001 - 3000         (Extra)
// Accessories Item IDs: 3001 - 4000   (Extra)
// Consumables:    4001 - 5000

//! Maybe add a method to return the wrapping item too?

const iteminfo = {
  //* Item name & tooltip
  item_link: function (obj) {
    //  Get a string for item tooltip
    const item_info = (item) => {
      if (item.id >= 1001 && item.id <= 2000) {
        //* Weapon
        const text = `Item Name: ${item.name}\nRarity: ${
          item.rarity
        }\nDamage: ${item.damage - item.damage_spill} - ${
          item.damage + item.damage_spill
        }\nType: ${item.type}\nValue: ${
          item.value
        }\n\nAttribute Gain / Scaling\nStrength: ${item.attributes[0]} (${
          item.scaling[0]
        })\nAgility: ${item.attributes[1]} (${
          item.scaling[1]
        })\nIntelligence: ${item.attributes[2]} (${item.scaling[2]})`;

        return text;
      } else if (item.id >= 4001 && item.id <= 5000) {
        //* Consumable
        const text = `Item Name: ${item.name}\nRarity: ${item.rarity}\nType: ${item.type}\nPotency: ${item.potency}\nValue: ${item.value}`;

        return text;
      }
    };

    const tooltip = item_info(obj);

    const $itemname = $("<p>")
      .addClass("tooltip")
      .attr("id", `itemid${obj.id}`)
      .css({
        color: "ghostwhite",
        "font-family": "Alagard",
        "font-size": "2rem",
        "text-align": "center",
      })
      .text(`${obj.name}`)
      .append(
        $("<div>")
          .addClass("tooltipbox").lazyload({threshold: 200})
          .css({
            "background-image":
              `url("/public/assets/image_data/modules/Panels/rectanglevpanel.png")`,
            "background-size": "100% 100%",
            "background-repeat": "no-repeat",
            "object-fit": "contain",
          })
          .append(
            $("<div>").lazyload({threshold: 200}).css({
              width: "10rem",
              height: "10rem",
              "background-image": `url("/public/assets/${obj.img_src}")`,
              "background-size": "100% 100%",
              "background-repeat": "no-repeat",
              "object-fit": "fill",
            }),
            $("<p>").addClass("tooltiptext").text(tooltip)
          )
      );

    return $itemname;
  },
};

export default iteminfo;
