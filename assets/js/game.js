const question = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");

function pickQuestion(){
    const randomQuestion = Math.floor(Math.random() * questionsArray.length);
    currentQ = questionsArray[randomQuestion];
    loadQuestion(currentAskQuestion);

    // still need to remove the q when selected.
}

function loadQuestion(){
// use inner.html to display
}

function checkCorrect(){
// check if correct option is selected
// plus points if correct
}

function showHighScore(){
// Store in local and display using inner.html
// will need to remove lowest score
}

