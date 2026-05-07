const RESOURCES = [
    { id: "cinnabar", label: "Cinnabar"},
    { id: "mercury", label: "Mercury"},
    { id: "sulfur", label: "Sulfur"},
    { id: "salt", label: "salt"},
];

const ACTIONS = [
    { id: "collect-cinnabar", label: "Collect Cinnabar", description: "Gather cinnabar ore", cost: {}, effect: {cinnabar: 1}},
    { id: "collect-mercury", label: "Collect Mercury", description: "Gather pure mercury", cost: {}, effect: {mercury: 1}},
    { id: "collect-sulfur", label: "Collect Sulfur", description: "Gather pure sulfur", cost: {}, effect: {sulfur: 1}},
    { id: "collect-salt", label: "Collect Salt", description: "Gather pure salt", cost: {}, effect: {salt: 1}},
];

const LORE = ["The sunlight burns your eyes"];