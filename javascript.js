const container = document.querySelector("#container");

function createGrid(squaresPerSide){
    container.innerHTML = ""; // Clears existing grid
    container.style.setProperty('--input', squaresPerSide); // Set CSS variable for the grid

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
      const gridItem = document.createElement("div");
        gridItem.classList.add("grid");
        container.appendChild(gridItem);
        
      let color = ["#FF0000", "#EF00FF", "#1100FF", "#00F7FF", "#00FF11"];  
        gridItem.addEventListener('mouseenter', () => {
        gridItem.style.backgroundColor = color[(Math.floor(Math.random() * color.length))];
      });
        
      let clearBtn = document.querySelector(".clear"); //button to clear grid coloring
        clearBtn.addEventListener('click', () => {
        gridItem.style.backgroundColor = "#FFFFFF";
      })

  }
}

function sizeGrid() {
  let input = Number(window.prompt ("How many squares per side for new sketch?"));
  if (input > 0 && input <= 100 ) {
    createGrid(input)
} else {
        alert("Please enter a number between 1 and 100");
    }
}



createGrid(16);
  
let btn = document.querySelector(".reset");
btn.onclick = sizeGrid;


