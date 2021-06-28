// Make sure to reference W3C in readme
const instructionModal = document.getElementById("instructionModal");
const instructionBtn = document.getElementById("instructionButton");
const highScoreModal = document.getElementById("highScoreModal");
const highScoreBtn = document.getElementById("highScoreButton");

const span = document.getElementsByClassName("close")[0];
const span1 = document.getElementsByClassName("close")[1];

instructionBtn.onclick = function() {
    instructionModal.style.display = "block";
}

span.onclick = function() {
    instructionModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    instructionModal.style.display = "none";
  }
}

highScoreBtn.onclick = function() {
  highScoreModal.style.display = "block";
}

span1.onclick = function() {
  highScoreModal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
  highScoreModal.style.display = "none";
}
}