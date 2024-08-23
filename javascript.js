const container = document.querySelector("#container");

for (let i = 1; i < (16 * 16) +1; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid");
    container.appendChild(gridItem);

    // Attach the click event listener to each grid item
    gridItem.addEventListener('mouseout', () => {
        gridItem.style.backgroundColor = '#FF5161';
    });
}

function resetGrid() {
  
  let input = Number(window.prompt ("How many squares per side for new sketch?"));
  container.innerHTML = '';
  for (let i = 1; i < (input * input) +1; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid");
    container.appendChild(gridItem);

    // Attach the click event listener to each grid item
    gridItem.addEventListener('mouseout', () => {
        gridItem.style.backgroundColor = '#FF5161';
    });
} }
  
  let btn = document.querySelector(".reset");
  btn.onclick = resetGrid;

  

