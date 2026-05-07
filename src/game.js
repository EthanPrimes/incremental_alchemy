const state = {
    time: 0,
    position: "cave-mouth",
    resources: {
        cinnabar: 0,
        mercury: 0,
        sulfur: 0,
        salt: 0,
    }
};

function tick() {
    state.time += 1
}

function applyAction(action) {
    // Applying the given function
    for (const resource in action.effect) {
        state.resources[resource] += action.effect[resource];
    }

    render();
}

// The core loop
setInterval(function() {
    tick();
    render();
}, 1000);
