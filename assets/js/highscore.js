// Code was created using the James Quick tutorial linked in the README.md

const highScoreSpan = document.getElementById("highScoreSpan");
 
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
 
function saveHighScore() {
    highScore.push(score_tracker);
    highScore.sort((a, b) => b - a);
    highScore.splice(1);
    localStorage.setItem('highScore', JSON.stringify(highScore));
}
