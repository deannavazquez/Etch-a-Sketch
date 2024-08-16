const gridItems = [];

const container = document.querySelector("#container");

for (let i = 1; i < 257; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid");
    container.appendChild(gridItem);
    gridItems.push(gridItem); // to use globally if needed

    // Attach the click event listener to each grid item
    gridItem.addEventListener('mouseenter', () => {
        gridItem.style.backgroundColor = 'black';
    });
}


