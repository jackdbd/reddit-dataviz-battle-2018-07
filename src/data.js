export const species = [
  "Cardinals",
  "Chickadees",
  "Doves",
  "Goldfinches",
  "Grosbeaks",
  "House Finches",
  "Jays",
  "Juncos",
  "Nutatches",
  "Purple Finches",
  "Siskins",
  "Sparrows",
  "Titmice",
  "Towwhees",
  "Woodpeckers"
];

export const seeds = [
  "Black Oil Sunflower",
  "Striped Sunflower",
  "Hulled Sunflower",
  "Millet White/Red",
  "Milo Seed",
  "Nyjer Seed (Thistle)",
  "Shelled Peanuts",
  "Safflower Seed",
  "Corn Products"
];

export const preferences = ["Low", "Medium", "High"];

export const feeders = [
  "Hopper Feeder",
  "Tube Feeder",
  "Nyjer Feeder",
  "Platform Feeder",
  "Ground Feeder",
  "Suet Feeder"
];

export const entries = [
  {
    name: species[0],
    seeds: [
      { name: seeds[0], preference: preferences[2] },
      { name: seeds[1], preference: preferences[2] },
      { name: seeds[2], preference: preferences[2] },
      { name: seeds[3], preference: preferences[0] },
      { name: seeds[7], preference: preferences[2] },
      { name: seeds[8], preference: preferences[0] }
    ],
    feeders: [feeders[0], feeders[1], feeders[3], feeders[4]]
  },
  {
    name: species[1],
    seeds: [
      { name: seeds[0], preference: preferences[2] },
      { name: seeds[1], preference: preferences[1] },
      { name: seeds[2], preference: preferences[1] },
      { name: seeds[6], preference: preferences[1] },
      { name: seeds[7], preference: preferences[1] }
    ],
    feeders: [feeders[0], feeders[2], feeders[3], feeders[5]]
  },
  {
    name: species[2],
    seeds: [
      { name: seeds[0], preference: preferences[1] },
      { name: seeds[1], preference: preferences[0] },
      { name: seeds[2], preference: preferences[1] },
      { name: seeds[3], preference: preferences[2] },
      { name: seeds[4], preference: preferences[2] },
      { name: seeds[5], preference: preferences[0] },
      { name: seeds[7], preference: preferences[1] },
      { name: seeds[8], preference: preferences[1] }
    ],
    feeders: [feeders[3], feeders[4]]
  },
  {
    name: species[3],
    seeds: [
      { name: seeds[0], preference: preferences[2] },
      { name: seeds[1], preference: preferences[1] },
      { name: seeds[2], preference: preferences[2] },
      { name: seeds[3], preference: preferences[0] },
      { name: seeds[5], preference: preferences[2] }
    ],
    feeders: [feeders[0], feeders[2]]
  },
  {
    name: species[4],
    seeds: [
      { name: seeds[0], preference: preferences[1] },
      { name: seeds[1], preference: preferences[1] },
      { name: seeds[2], preference: preferences[2] },
      { name: seeds[7], preference: preferences[0] }
    ],
    feeders: [feeders[0], feeders[3]]
  },
  {
    name: species[5],
    seeds: [
      { name: seeds[0], preference: preferences[2] },
      { name: seeds[1], preference: preferences[1] },
      { name: seeds[2], preference: preferences[2] },
      { name: seeds[3], preference: preferences[1] },
      { name: seeds[5], preference: preferences[2] },
      { name: seeds[7], preference: preferences[0] }
    ],
    feeders: [feeders[0], feeders[2]]
  },
  {
    name: species[6],
    seeds: [
      { name: seeds[0], preference: preferences[2] },
      { name: seeds[1], preference: preferences[2] },
      { name: seeds[2], preference: preferences[2] },
      { name: seeds[4], preference: preferences[0] },
      { name: seeds[6], preference: preferences[1] },
      { name: seeds[7], preference: preferences[0] },
      { name: seeds[8], preference: preferences[1] }
    ],
    feeders: [feeders[0], feeders[3], feeders[4]]
  },
  {
    name: species[7],
    seeds: [
      { name: seeds[0], preference: preferences[0] },
      { name: seeds[1], preference: preferences[0] },
      { name: seeds[2], preference: preferences[0] },
      { name: seeds[3], preference: preferences[0] },
      { name: seeds[5], preference: preferences[0] },
      { name: seeds[8], preference: preferences[2] }
    ],
    feeders: [feeders[0], feeders[3], feeders[4]]
  },
  //
  {
    name: species[8],
    seeds: [
      { name: seeds[0], preference: preferences[2] },
      { name: seeds[1], preference: preferences[1] },
      { name: seeds[2], preference: preferences[1] },
      { name: seeds[6], preference: preferences[0] },
      { name: seeds[7], preference: preferences[0] }
    ],
    feeders: [feeders[0], feeders[1], feeders[5]]
  },
  {
    name: species[9],
    seeds: [
      { name: seeds[0], preference: preferences[2] },
      { name: seeds[1], preference: preferences[1] },
      { name: seeds[2], preference: preferences[2] },
      { name: seeds[3], preference: preferences[0] },
      { name: seeds[5], preference: preferences[2] }
    ],
    feeders: [feeders[0], feeders[2]]
  },
  {
    name: species[10],
    seeds: [
      { name: seeds[0], preference: preferences[0] },
      { name: seeds[1], preference: preferences[0] },
      { name: seeds[2], preference: preferences[2] },
      { name: seeds[5], preference: preferences[2] },
      { name: seeds[8], preference: preferences[0] }
    ],
    feeders: [feeders[1], feeders[2]]
  },
  {
    name: species[11],
    seeds: [
      { name: seeds[0], preference: preferences[2] },
      { name: seeds[1], preference: preferences[2] },
      { name: seeds[2], preference: preferences[2] },
      { name: seeds[3], preference: preferences[2] },
      { name: seeds[4], preference: preferences[1] },
      { name: seeds[7], preference: preferences[0] },
      { name: seeds[8], preference: preferences[1] }
    ],
    feeders: [feeders[0], feeders[1], feeders[3]]
  },
  {
    name: species[12],
    seeds: [
      { name: seeds[0], preference: preferences[2] },
      { name: seeds[1], preference: preferences[1] },
      { name: seeds[2], preference: preferences[1] },
      { name: seeds[5], preference: preferences[0] },
      { name: seeds[6], preference: preferences[1] },
      { name: seeds[7], preference: preferences[0] }
    ],
    feeders: [feeders[0], feeders[1], feeders[3], feeders[5]]
  },
  {
    name: species[13],
    seeds: [
      { name: seeds[0], preference: preferences[2] },
      { name: seeds[1], preference: preferences[2] },
      { name: seeds[2], preference: preferences[2] },
      { name: seeds[3], preference: preferences[0] },
      { name: seeds[6], preference: preferences[0] },
      { name: seeds[7], preference: preferences[0] },
      { name: seeds[8], preference: preferences[0] }
    ],
    feeders: [feeders[0], feeders[3], feeders[4]]
  },
  {
    name: species[14],
    seeds: [
      { name: seeds[0], preference: preferences[1] },
      { name: seeds[1], preference: preferences[1] },
      { name: seeds[2], preference: preferences[2] },
      { name: seeds[6], preference: preferences[0] },
      { name: seeds[7], preference: preferences[0] },
      { name: seeds[8], preference: preferences[0] }
    ],
    feeders: [feeders[0], feeders[3], feeders[5]]
  }
];
