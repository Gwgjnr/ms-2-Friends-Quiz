const question = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");
const scoreCon = document.getElementsByClassName("score_tracker")[0];
const scoreCon1 = document.getElementsByClassName("score_tracker")[1];
const questionCon = document.getElementById("question_tracker");
 
let question_tracker = 1;
let score_tracker = 0;
 
pickQuestion();
 
function pickQuestion(){
    const randomQuestion = Math.floor(Math.random() * questionsArray.length);
    currentQ = questionsArray[randomQuestion];
 
    questionsArray.splice(randomQuestion, 1);
 
    loadQuestion(currentQ);
}
 
function loadQuestion(){
    const q = currentQ;
    
    question.innerHTML = q.question;
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
    optionD.innerHTML = q.optionD;
}
 
function checkCorrect(answers){
    if( answers == currentQ.answer){
        score_tracker++;
        scoreCon.innerHTML = score_tracker + " correct";
        
    }
    if( question_tracker == 20){
        gameOver();
        saveHighScore();
        scoreCon1.innerHTML = score_tracker;
    }
 
    question_tracker++;
    questionCon.innerHTML = "Question " + question_tracker + "/20";
    pickQuestion();
}
 
function gameOver() {
  gameOverModal.style.display = "block";
}
