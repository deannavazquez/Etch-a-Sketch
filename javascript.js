const container = document.querySelector("#container");

function createGrid(squaresPerSide){
    container.innerHTML = ""; // Clears existing grid
    container.style.setProperty('--input', squaresPerSide); // Set CSS variable for the grid

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid");
        container.appendChild(gridItem);

    // Attach the click event listener to each grid item
    gridItem.addEventListener('mouseenter', () => {
        gridItem.style.backgroundColor = '#000000';
    });
  }
}

function resetGrid() {
  let input = Number(window.prompt ("How many squares per side for new sketch?"));
  if (input > 0 && input <= 100 ) {
    createGrid(input)
} else {
        alert("Please enter a number between 1 and 100");
    }
}

createGrid(16)
  
let btn = document.querySelector(".reset");
btn.onclick = resetGrid;

  

