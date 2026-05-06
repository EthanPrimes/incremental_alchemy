const state = {
    resources: {
        mercury: 0,
        sulfur: 0,
        salt: 0
    }
};

function tick() {
    // Nothing yet
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
