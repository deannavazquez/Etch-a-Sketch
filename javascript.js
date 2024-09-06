const container = document.querySelector("#container");
let draw = false;


// Function to create grid with a given number of squares per side
function createGrid(squaresPerSide){
    container.innerHTML = ""; // Clears existing grid
    container.style.setProperty('--input', squaresPerSide); // Set CSS variable for the grid

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
      const gridItem = document.createElement("div");
        gridItem.classList.add("grid");
        container.appendChild(gridItem); 
      }
    }

    // Helper function to pick a random color
    function getRandomColor() {
      const colors = ["#FF0000", "#EF00FF", "#1100FF", "#00F7FF", "#00FF11"];  
      return colors[(Math.floor(Math.random() * colors.length))];
    }

    // Function to handle drawing on grid items
    function handleDrawing(event) {
      if (draw || event.type === 'mousedown') {
        event.target.style.backgroundColor = getRandomColor();
      }
}
    
// Function to set up event listeners
function setupEventListeners() {
  container.addEventListener('mousedown', () => draw = true);
  container.addEventListener('mouseup', () => draw = false);
  container.addEventListener('mouseleave', () => draw = false); // Stops drawing when mouse leaves the container
  
  container.addEventListener('mouseover', handleDrawing);
  container.addEventListener('mousedown', handleDrawing);

  const clearBtn = document.querySelector(".clear");
  clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.grid').forEach(gridItem => {
      gridItem.style.backgroundColor = "#FFFFFF";
    });
  });
}

// Function to prompt for grid size and recreate grid
function sizeGrid() {
  let input = Number(window.prompt ("How many squares per side for new sketch?"));
  if (input > 0 && input <= 100 ) {
    createGrid(input)
  } else {
    alert("Please enter a number between 1 and 100");
  }
}

// Initialize grid and event listeners
createGrid(16);
setupEventListeners();
  
const resetBtn = document.querySelector(".reset");
resetBtn.onclick = sizeGrid;


