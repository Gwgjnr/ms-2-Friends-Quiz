const question = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");

pickQuestion()

function pickQuestion(){
    const randomQuestion = Math.floor(Math.random() * questionsArray.length);
    currentQ = questionsArray[randomQuestion];
    loadQuestion(currentQ);

    // still need to remove the q when selected.
}

function loadQuestion(){
    const q = currentQ;
    
    question.innerHTML = q.question;
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
    optionD.innerHTML = q.optionD;
}

function checkCorrect(){
// check if correct option is selected
// plus points if correct
}

function showHighScore(){
// Store in local and display using inner.html
// will need to remove lowest score
}

