const highScoreSpan = document.getElementById("highScoreSpan");
 
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
 
function saveHighScore() {
    highScore.push(score_tracker);
    console.log(score_tracker)
    console.log(highScore)
    highScore.sort((a, b) => b - a);
    console.log(highScore)
    highScore.splice(1);
    console.log(highScore)
    localStorage.setItem('highScore', JSON.stringify(highScore));
}
