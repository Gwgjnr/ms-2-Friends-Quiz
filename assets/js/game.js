const question = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");
const scoreCon = document.getElementById("score_tracker");
const questionCon = document.getElementById("question_tracker");
const max_questions = 10;

let question_tracker = 1;
let score_tracker = 0;

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

function checkCorrect(answers){
    if( answers == currentQ.answer){
        score_tracker++
        scoreCon.innerHTML = score_tracker + " correct";
        
    }
    question_tracker++
    questionCon.innerHTML = "Question " + question_tracker + "/10";
    pickQuestion()
}


function showHighScore(){
// Store in local and display using inner.html
// will need to remove lowest score
}
