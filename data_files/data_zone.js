//* Starting zone: Castle (for now)
//* Enemies by ID type + range in future
//* For now, specifiy exactly what enemy goes in

const zones = {
  forest: {
    name: "Forest",
    name2: "forest",
    id: 1,
    level_range: [1, 3],
    enemy_type: [1, 2, 3, 4],
    enemy_count: 8,
    random_zone: false,
    img_src: "url('../image_data/backgrounds/Zone_1_Background.png')",
  },
  ice_cave: {
    name: "Ice Cave",
    name2: "ice_cave",
    id: 2,
    level_range: [1, 3],
    enemy_type: [1, 2, 3, 4],
    enemy_count: 8,
    random_zone: true,
    random_count: 9,
    img_src: "url('../image_data/backgrounds/Ice_Cave_9.png')",
  },
  castle: {
    name: "Castle",
    name2: "castle",
    id: 3,
    level_range: [1, 3],
    enemy_type: [1, 2, 3, 4],
    enemy_count: 8,
    random_zone: true,
    random_count: 18,
    img_src: "castle_",
  },
};

// url('../image_data/backgrounds/
//* Default URL from battlescene
//* Append .png') at end
export default zones;
