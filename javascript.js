const container = document.querySelector("#container");

for (let i = 1; i < 257; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid")
    container.appendChild(grid);
    }