// This code was created using the W3S tutorial for Modals, link in acknowledgements

const instructionModal = document.getElementById("instructionModal");
const instructionBtn = document.getElementById("instructionButton");
const highScoreModal = document.getElementById("highScoreModal");
const highScoreBtn = document.getElementById("highScoreButton");
const gameOverModal = document.getElementById("gameOverModal");
 
const span = document.getElementsByClassName("close")[0];
const span1 = document.getElementsByClassName("close")[1];
 
instructionBtn.onclick = function() {
    instructionModal.style.display = "block";
};
 
span.onclick = function() {
    instructionModal.style.display = "none";
};
 
highScoreBtn.onclick = function() {
  highScoreModal.style.display = "block";
  let highScore = JSON.parse(localStorage.getItem("highScore")) || [];
  displayArea = document.getElementById("highScoreSpan");
  displayArea.innerHTML = highScore;
};
 
span1.onclick = function() {
  highScoreModal.style.display = "none";
};


