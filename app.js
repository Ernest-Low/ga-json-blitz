import $ from "jquery";


const monster_exp = (monster_level) => {
  const lowerexp = 3 * Math.pow(monster_level, 2) + 30 * monster_level + 67;
  const higherexp = 3 * Math.pow(monster_level, 2) + 45 * monster_level + 70;
  return `Monster Level: ${monster_level}\nExp gain: ${lowerexp} - ${higherexp}`;
};

const hero_exp = (hero_level) => {
  const expreq = 15 * Math.pow(hero_level, 2) + 85 * hero_level;
  return `Hero Level: ${hero_level}\nExp Req: ${expreq}`;
};

// console.log(monster_exp(1));
// console.log(monster_exp(2));
// console.log(monster_exp(3));
// console.log(monster_exp(4));
// console.log(monster_exp(5));
console.log(hero_exp(1));
console.log(hero_exp(2));
console.log(hero_exp(3));
console.log(hero_exp(4));
console.log(hero_exp(5));
