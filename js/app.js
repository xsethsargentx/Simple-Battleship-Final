const gridContainer = document.getElementById("grid-container");
const restartBtn = document.getElementById("restart-btn");

let battleshipIndex;

//! Create the board and assign click behavior
function setupBoard() {
  gridContainer.innerHTML = ""; //! Clear old board

  for (let i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.setAttribute("data-index", i);
    gridContainer.appendChild(square);
  }

  battleshipIndex = Math.floor(Math.random() * 9);
}

//! Handle user clicks
gridContainer.addEventListener("click", function (event) {
  const clicked = event.target;

  if (
    clicked.classList.contains("grid-square") &&
    !clicked.classList.contains("correct") &&
    !clicked.classList.contains("incorrect")
  ) {
    const clickedIndex = parseInt(clicked.getAttribute("data-index"));

    if (clickedIndex === battleshipIndex) {
      clicked.classList.add("correct", "win-animation");
      alert("Hit! You found the battleship!");
    } else {
      clicked.classList.add("incorrect");
    }
  }
});

//! Restart button functionality
restartBtn.addEventListener("click", () => {
  setupBoard();
});

//! Initialize game on load
setupBoard();