//!  Animate the infobox above character head to new hp/mp values
const update_hpmp = (entity, hpcost, mpcost) => {

  //  Variable declarations
  const new_hp = entity.health - hpcost;
  const new_mp = entity.mana - mpcost;
  const style = document.documentElement.style;
  const $hpbar = $(`#${entity.id}hpbar`);
  const $mpbar = $(`#${entity.id}mpbar`);
  const $hpvalue = $(`#${entity.id}hpvalue`);
  const $mpvalue = $(`#${entity.id}mpvalue`);
  //

  //  HP Value change
  const hp_info = `${new_hp}/${entity.health_max}`;
  $hpvalue.text(hp_info);

  //  HP Bar Animation
  const hp_bar = `${Math.ceil((entity.health / entity.health_max) * 100)}%`;
  const new_hp_bar = `${Math.ceil((new_hp / entity.health_max) * 100)}%`;
  $hpbar.css({ width: hp_bar });
  style.setProperty("--healthpercent", hp_bar);
  style.setProperty("--new_healthpercent", new_hp_bar);
  $hpbar.addClass("hpanimation");
  $hpbar.css({ width: new_hp_bar });
  setTimeout(() => {
    $hpbar.removeClass("hpanimation");
  }, 3050);

  //

  //  MP Value Change
  const mp_info = `${new_mp}/${entity.mana_max}`;
  $mpvalue.text(mp_info);

  // MP Bar Animation
  const mp_bar = `${Math.ceil((entity.mana / entity.mana_max) * 100)}%`;
  const new_mp_bar = `${Math.ceil((new_mp / entity.mana_max) * 100)}%`;
  style.setProperty("--manapercent", mp_bar);
  style.setProperty("--new_manapercent", new_mp_bar);
  $mpbar.addClass("mpanimation");
  $mpbar.css({ width: new_mp_bar });
  setTimeout(() => {
    $hpbar.removeClass("mpanimation");
  }, 3050);

  //  Finalize hp/mp values
  entity.health = new_hp;
  entity.mana = new_mp;
};

export default update_hpmp;
