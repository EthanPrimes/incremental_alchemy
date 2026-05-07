function render() {
    renderResources();
    renderActions();
    renderLore();
}

function renderResources() {
    const panel = document.getElementById("panel-resources");
    panel.innerHTML = "Resources";

    RESOURCES.forEach(function(resource) {
        const amount = state.resources[resource.id];
        const row = document.createElement("div");
        row.className = "resource-row";
        row.textContent = resource.label + ": " + amount;
        panel.appendChild(row);
    });
}

function renderActions() {
    const panel = document.getElementById("panel-actions");
    panel.innerHTML = "";

    ACTIONS.forEach(function(action) {
        const button = document.createElement("button");
        button.textContent = action.label;
        button.title = action.description;
        button.addEventListener("click", function() {
            applyAction(action)
        });
        panel.appendChild(button);
    });
}

function renderLore() {
    const panel = document.getElementById("panel-lore");
    panel.innerHTML = "";

    LORE.forEach(function(lore) {
        const entry = document.createElement("div");
        entry.className = "lore-entry"
        entry.textContent = lore
        panel.appendChild(entry)
    });
}