// Make sure to reference W3C in readme
const instructionModal = document.getElementById("instructionModal");
const instructionBtn = document.getElementById("instructionButton");

const span = document.getElementsByClassName("close")[0];

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