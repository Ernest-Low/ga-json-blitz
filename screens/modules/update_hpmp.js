//!  Animate the infobox above character head to new hp/mp values
const update_hpmp = (entity, hpcost, mpcost) => {
  const new_hp = entity.health - hpcost;
  const new_mp = entity.mana - mpcost;
  const style = document.documentElement.style;

  const $hpbar = $(`#${entity.id}hpbar`);
  const $mpbar = $(`#${entity.id}mpbar`);
  //

  const hp_info = `${new_hp}/${entity.health_max}`;
  $hpvalue.text(hp_info);
  const hp_bar = `${Math.ceil((entity.health / entity.health_max) * 100)}%`;
  $hpbar.css({ width: hp_bar });
  const new_hp_bar = `${Math.ceil((new_hp / entity.health_max) * 100)}%`;
  $hpbar.css({ width: hp_bar });
  style.setProperty("--healthpercent", hp_bar);
  style.setProperty("--new_healthpercent", new_hp_bar);
  $hpbar.addClass("hpanimation");
  setTimeout(() => {
    $hpbar.removeClass("hpanimation");
  }, 3100);

  //

  const mp_info = `${new_mp}/${entity.mana_max}`;
  $hpvalue.text(mp_info);
  const mp_bar = `${Math.ceil((entity.mana / entity.mana_max) * 100)}%`;
  $mpbar.css({ width: mp_bar });
  const new_mp_bar = `${Math.ceil((new_mp / entity.mana_max) * 100)}%`;
  $mpbar.css({ width: mp_bar });
  style.setProperty("--manapercent", mp_bar);
  style.setProperty("--new_manapercent", new_mp_bar);
  $mpbar.addClass("mpanimation");
  setTimeout(() => {
    $hpbar.removeClass("mpanimation");
  }, 3100);
};
