//! Post battle screen
//! Check if zone has remaining enemies
//? First stage, declare overall victory if cleared

//* Use after keywords for ids

import current_entities from "../entities.js";
import items from "../../data_files/data_items.js";
import { css } from "jquery";

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
    let gold_drop = math.floor(
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
          drop_level >= lower_cap &&
          drop_level <= monster.level
        ) {
          return obj;
        }
      });
      const chance = Math.ceil(Math.random() * 100);
      if (chance > 90) {
        const item = items_list[Math.floor(Math.random() * items_list.length)];
        return_items.push(item);
      }
    });

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

  //  Return hero max xp required to next level
  hero_experience: function (hero) {
    const expreq = 15 * Math.pow(hero.level, 2) + 85 * hero.level;
    return expreq;
  },

  afterScreen: function (status) {
    //  Append this screen on the black screen
    const $afterscreen = $("<div>").attr("id", "afterscreen").css({
      display: "flex",
      position: "absolute",
      "justify-content": "space-around",
      "flex-direction": "column",
      "align-items": "center",
      "z-index": 0,
      "background-image":
        "url('../image_data/backgrounds/castle/ruined_castle.png')",
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
      height: "25%",
    });
    const $title = $("<h1>")
      .attr("id", "aftertitle")
      .css({
        color: "ghostwhite",
        "font-family": "Alagard",
        "font-size": "4rem",
      })
      .text(status);
    $aftertop.append($title);

    const $aftermiddle = $("<div>").attr("id", "aftermiddle").css({
      display: "flex",
      "flex-direction": "row",
      width: "90%",
      height: "30%",
    });
    const $golddrop = $("<div>").css({
      width: "33%",
      height: "100%",
      display: "flex",
      "flex-direction": "column",
      "jusify-content": "center",
      "align-items": "center",
    });
    const $itemdrop = $("<div>");
    const $expgain = $("<div>)").css({
      width: "33%",
      height: "100%",
      "flex-direction": "column",
      "jusify-content": "center",
      "align-items": "center",
    });
    const $afterbottom = $("<div>").attr("id", "afterbottom");

    //  Add gold
    const gold_gained = this.gold_drop;
    current_entities.gold += gold_gained;
    //  Gold Text
    const $goldtext = $("<h2>")
      .css({
        color: "ghostwhite",
        "font-family": "Alagard",
        "font-size": "2rem",
        "word-wrap": "break-word",
        "text-align": "center",
      })
      .text(`Gold: +${gold_gained}`);
    const $goldpic = $("<div>").css({
      width: "100%",
      height: "auto",
      "background-image": "../../image_data/icons/currency/currency_coin.png",
      "background-size": "100% 100%",
      "background-repeat": "no-repeat",
      "object-fit": "contain",
    });

    //  Find item table based off monster spawn (Account for rare drops in future)
    const items_gained = [];
    items_gained.push(...this.drop_item(current_entities.monsters));
    //* Check if any items
    if (items_gained == []) {
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
          "font-size": "2rem",
          "word-wrap": "break-word",
          "text-align": "center",
        })
        .text(`Items Found!`);

      const $itemslist = $("<div>").css({
        width: "100%",
        height: "auto",
      });
      items_gained.forEach((obj) => {
        $itemslist.append(
          $("<p>").addClass("tooltip")
            .attr("id", `itemid${obj.id}`)
            .css({
              color: "ghostwhite",
              "font-family": "Alagard",
              "font-size": "1rem",
              "word-wrap": "break-word",
              "text-align": "center",
            })
            .text(`${obj.name}`).append($("<span>").addClass("tooltiptext")
            .text(``)
            
            
            
            )



        );
      });
    }

    //  Generate gold / loot
    //  Clean up monsters
    //  Regenerate hero

    $golddrop.append($goldtext, $goldpic);
    $aftermiddle.append($golddrop, $itemdrop, $expgain);
    $("body").append($afterscreen);
    $afterscreen.append($aftertop, $aftermiddle, $afterbottom);
  },
};

export default afterBattle;
