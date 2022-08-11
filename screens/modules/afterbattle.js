//! Post battle screen
//! Check if zone has remaining enemies
//? First stage, declare overall victory if cleared

//* Use after keywords for ids

import current_entities from "../entities.js";
import items from "../../data_files/data_items.js";
import iteminfo from "./iteminfo.js";
import create_battle from "./create_battle.js";

const afterBattle = {
  //  Check if zone is completed
  //! Currently full game in project1
  zone_clear_check: function () {
    current_entities.zone.enemy_count -= 1;
    if (current_entities.zone.enemy_count == 0) {
      //  Declare new zone (Not now)
      //! Means its GG Victory
      //? Victory scene to be placed here temp
      console.log("Game Over, you win!");
      this.afterScreen("YOU WIN!!!");
    } else {
      this.afterScreen("VICTORY!");
    }
  },

  //* Call defeat function
  defeat: function () {
    this.afterScreen("DEFEAT!");
  },

  //  Gold drop (temp) = Monster levels * 10 +/- 10%, + between 10 - 20 gold
  gold_drop: function () {
    let total_level = 0;
    current_entities.monsters.forEach((monster) => {
      total_level += monster.level;
    });
    const randneg = Math.random() < 0.5 ? -1 : 1;
    let gold_drop = Math.floor(
      total_level * 10 * (1 + (randneg * (Math.random() * 10)) / 100)
    );
    gold_drop = gold_drop + 10 + Math.ceil(Math.random() * 10);

    return gold_drop;
  },

  //  Account for more than common items in future
  //* Default 10% drop rate (common items)
  drop_item: function (monster_list) {
    const return_items = [];

    //  Common item droptable
    monster_list.forEach((monster) => {
      const lower_cap = monster.level <= 2 ? 1 : monster.level - 2;

      //  Search item list for common items per monster
      const items_list = items.filter((obj) => {
        if (
          obj.rarity == "Common" &&
          obj.drop_level >= lower_cap &&
          obj.drop_level <= monster.level
        ) {
          return obj;
        }
      });
      console.log(`items_list: ${items_list}`);
      const chance = Math.ceil(Math.random() * 100);
      if (chance > 90) {
        const item = items_list[Math.floor(Math.random() * items_list.length)];
        return_items.push(item);
      }
    });
    console.log(return_items);
    return return_items;
  },

  //  Returns exp gain from a monster object
  generate_experience: function (monster) {
    const lowerexp = 3 * Math.pow(monster.level, 2) + 30 * monster.level + 67;
    const higherexp = 3 * Math.pow(monster.level, 2) + 45 * monster.level + 70;
    let exp_variance = higherexp - lowerexp;
    const final_exp = lowerexp + Math.ceil(Math.random() * exp_variance);

    return final_exp;
  },

  //  Hero level up, tweak this
  hero_level: function (hero) {
    hero.level += 1;
    hero.strength += 1;
    hero.agility += 1;
    hero.intelligence += 1;
    hero.health_max += 10;
    hero.mana_max += 2;
    //  Calculate new exp required
    hero.exp_req = 15 * Math.pow(hero.level, 2) + 85 * hero.level;
    console.log(
      `$Hero now level: ${hero.level}, requires ${hero.exp_req} exp to level up.`
    );
  },

  afterScreen: function (status) {
    //  Append this screen on the black screen
    const $afterscreen = $("<div>").attr("id", "afterscreen").css({
      display: "flex",
      position: "absolute",
      // "justify-content": "space-around",
      "flex-direction": "column",
      "align-items": "center",
      "z-index": 0,
      "background-image": "url(image_data/modules/Results/victory2.png)",
      "background-size": "100% 100%",
      "background-repeat": "no-repeat",
      "object-fit": "fill",
      width: "80vw",
      height: "95vh",
      border: "4px solid blue",
      overflow: "hidden",
    });

    //  Show victory / defeat in title
    const $aftertop = $("<div>").attr("id", "aftertop").css({
      width: "100%",
      height: "40%",
    });
    //* Title (Not really in use)
    const $title = $("<h1>").attr("id", "aftertitle").css({
      color: "ghostwhite",
      "font-family": "Alagard",
      "font-size": "4rem",
    });
    // .text(status);
    $aftertop.append($title);

    //  Middle div (contains gold/loot/exp)
    const $aftermiddle = $("<div>").attr("id", "aftermiddle").css({
      display: "flex",
      "flex-direction": "row",
      "justify-content": "center",
      width: "100%",
      height: "45%",
    });

    //  Gold div
    const $golddrop = $("<div>").css({
      width: "33%",
      height: "100%",
      display: "flex",
      "flex-direction": "column",
      "jusify-content": "center",
      "align-items": "center",
    });

    //  Item div
    const $itemdrop = $("<div>");

    //  Exp div
    const $expgain = $("<div>)").css({
      width: "33%",
      height: "100%",
      "flex-direction": "column",
      "jusify-content": "center",
      "align-items": "center",
    });

    //  Bottom div for buttons
    const $afterbottom = $("<div>").attr("id", "afterbottom").css({
      display: "flex",
      "align-items": "center",
      "justify-content": "space-around",
      width: "90%",
      height: "8rem",
    });

    //  Add gold
    const gold_gained = this.gold_drop();
    current_entities.gold += gold_gained;
    //  Gold Text
    const golden_text = `Gold: + ${gold_gained}`;
    const $goldtext = $("<h2>")
      .css({
        color: "ghostwhite",
        "font-family": "Alagard",
        "font-size": "3rem",
        "word-wrap": "break-word",
        "text-align": "center",
      })
      .text(golden_text);

    //  Money picture
    const $goldpic = $("<div>").css({
      width: "25%",
      height: "30%",
      "background-image": "url(image_data/icons/currency/currency_coin.png)",
      "background-size": "100% 100%",
      "background-repeat": "no-repeat",
      "object-fit": "contain",
    });

    //  Find item table based off monster spawn (Account for rare drops in future)
    const items_gained = [];
    items_gained.push(...this.drop_item(current_entities.monsters));
    //* Check if any items
    if (items_gained.length >= 1) {
      console.log("Adding items");

      //  Add item ids to inventory
      items_gained.forEach((obj) => {
        current_entities.items.push(obj.id);
      });

      $itemdrop.css({
        width: "33%",
        height: "100%",
        "flex-direction": "column",
        "jusify-content": "center",
        "align-items": "center",
      });

      //  Item drop initial text
      const $itemtext = $("<h2>")
        .css({
          color: "ghostwhite",
          "font-family": "Alagard",
          "font-size": "3rem",
          "word-wrap": "break-word",
          "text-align": "center",
        })
        .text(`Items Found!`);

      //  List of items
      const $itemslist = $("<div>").css({
        width: "100%",
        height: "auto",
        "justify-content": "center",
        "text-align": "center",
      });

      items_gained.forEach((obj) => {
        $itemslist.append(iteminfo.item_link(obj));
      });

      $itemdrop.append($itemtext, $itemslist);
    }

    //* Exp function to change when multiple heroes get involved
    let total_exp = 0;
    //  Get EXP
    current_entities.monsters.forEach((obj) => {
      total_exp += this.generate_experience(obj);
    });

    //  Pull any old exp to calculate
    let levelup = false;
    let new_exp =
      total_exp + current_entities.players[current_entities.currentplayer].exp;
    while (
      new_exp > current_entities.players[current_entities.currentplayer].exp_req
    ) {
      levelup = true;
      new_exp -=
        current_entities.players[current_entities.currentplayer].exp_req;
      this.hero_level(current_entities.players[current_entities.currentplayer]);
    }
    current_entities.players[current_entities.currentplayer].exp = new_exp;

    const $exptext = $("<h2>")
      .css({
        color: "ghostwhite",
        "font-family": "Alagard",
        "font-size": "3rem",
        "word-wrap": "break-word",
        "text-align": "center",
      })
      .text(`+ ${total_exp} exp`);

    $expgain.append($exptext);
    if (levelup) {
      $expgain.append(
        $("<h2>")
          .css({
            color: "ghostwhite",
            "font-family": "Alagard",
            "font-size": "3rem",
            "word-wrap": "break-word",
            "text-align": "center",
          })
          .text(`Leveled up!`)
      );
    }

    //  Regenerate hero
    current_entities.monsters = [];
    current_entities.players.forEach((obj) => {
      obj.health = Math.ceil(obj.health * 1.15);
      if (obj.health > obj.health_max) {
        obj.health = obj.health_max;
      }
      obj.mana = Math.ceil(obj.mana * 1.15);
      if (obj.mana > obj.mana_max) {
        obj.mana = obj.mana_max;
      }
    });

    //* Shop Button
    //* Inventory Button

    const $nextmatch = $("<div>")
      .css({
        flex: "none",
        width: "25%",
        height: "50%",
        "background-image":
          "url(image_data/modules/Buttons/greenrectangle.png)",
        "background-size": "100% 100%",
        "background-repeat": "no-repeat",
        "object-fit": "contain",
      })
      .append(
        $("<button>")
          .attr("id", "btnnextmatch")
          .css({
            width: "100%",
            height: "100%",
            color: "ghostwhite",
            "background-color": "rgba(255,255,255,0)",
            "font-size": "1.5rem",
            "text-align": "center",
            border: "none",
            "font-family": "Alagard",
          })
          .text("ONWARD!")
          .on("click", () => {
            console.log("btnnextmatch clicked");
            $afterscreen.css({
              "z-index": 2,
            });
            $afterscreen.fadeOut(2000);
            setTimeout(() => {
              create_battle();
              $afterscreen.remove();
            }, 2000);
          })
      );

    const $shop = $("<div>")
      .css({
        flex: "none",
        width: "25%",
        height: "50%",
        "background-image":
          "url(image_data/modules/Buttons/greenrectangle.png)",
        "background-size": "100% 100%",
        "background-repeat": "no-repeat",
        "object-fit": "contain",
      })
      .append(
        $("<button>")
          .attr("id", "btnshop")
          .css({
            width: "100%",
            height: "100%",
            color: "ghostwhite",
            "background-color": "rgba(255,255,255,0)",
            "font-size": "1.5rem",
            "text-align": "center",
            border: "none",
            "font-family": "Alagard",
          })
          .text("Shop")
          .on("click", () => {
            console.log("btnshop clicked");
          })
      );

    const $inventory = $("<div>")
      .css({
        flex: "none",
        width: "25%",
        height: "50%",
        "background-image":
          "url(image_data/modules/Buttons/greenrectangle.png)",
        "background-size": "100% 100%",
        "background-repeat": "no-repeat",
        "object-fit": "contain",
      })
      .append(
        $("<button>")
          .attr("id", "btninventory")
          .css({
            width: "100%",
            height: "100%",
            color: "ghostwhite",
            "background-color": "rgba(255,255,255,0)",
            "font-size": "1.5rem",
            "text-align": "center",
            border: "none",
            "font-family": "Alagard",
          })
          .text("Inventory")
          .on("click", () => {
            console.log("btninventory clicked");
          })
      );

    $golddrop.append($goldtext, $goldpic);
    $afterbottom.append($inventory, $nextmatch, $shop);

    $aftermiddle.append($golddrop, $itemdrop, $expgain);
    $("body").append($afterscreen);
    $afterscreen.append($aftertop, $aftermiddle, $afterbottom);
  },
};

export default afterBattle;
