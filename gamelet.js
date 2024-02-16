const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress); //Key handler
let position = 0; // Sets position
function handleKeyPress(e) {
  // Describes what the keys do
  if (e.code === "ArrowLeft") {
    position = position - 100;
  }
  if (e.code === "ArrowRight") {
    position = position + 100;
  }
  if (position < 0) {
    // Resets the position
    position = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = position + "px";
}
