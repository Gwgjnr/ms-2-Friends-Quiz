const highScoreSpan = document.getElementById("highScoreSpan");

const highScore = JSON.parse(localStorage.getItem("highScore")) || [];

function saveHighScore() {
    highScore.push(score_tracker)
    highScore.sort((a, b) => b.score_tracker - a.score_tracker);
    highScore.splice(1);
    localStorage.setItem('highScore', JSON.stringify(highScore));
    highScoreSpan.innerHTML = JSON.stringify(highScore);
}

