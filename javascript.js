const container = document.querySelector("#container");
let draw = false;

function createGrid(squaresPerSide){
    container.innerHTML = ""; // Clears existing grid
    container.style.setProperty('--input', squaresPerSide); // Set CSS variable for the grid

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
      const gridItem = document.createElement("div");
        gridItem.classList.add("grid");
        container.appendChild(gridItem);
        
      let color = ["#FF0000", "#EF00FF", "#1100FF", "#00F7FF", "#00FF11"];  

      gridItem.addEventListener('mousedown', () => { /// Starts drawing mode and sets a random color when the mouse is pressed.
        draw = true;
      gridItem.style.backgroundColor = color[(Math.floor(Math.random() * color.length))];
    });

      gridItem.addEventListener('mouseenter', () => { // Activates drawing mode and changes the grid item's color to a random one when mouse is pressed.
        if (draw === true) {
      gridItem.style.backgroundColor = color[(Math.floor(Math.random() * color.length))];
      }
    });

      gridItem.addEventListener('mouseup', () => { // Ends drawing mode and sets a random color when the mouse is released.
        draw = false;
      gridItem.style.backgroundColor = color[(Math.floor(Math.random() * color.length))];
    });



        
      let clearBtn = document.querySelector(".clear"); //button to clear grid coloring
        clearBtn.addEventListener('click', () => {
        gridItem.style.backgroundColor = "#FFFFFF";
      });
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


