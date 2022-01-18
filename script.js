//VARIABLES
var start = document.querySelector(".startBtn");
var questionEl = document.querySelector(".questionField");
var AnswerA = document.querySelector("#A");
var AnswerB = document.querySelector("#B");
var AnswerC = document.querySelector("#C");
var AnswerD = document.querySelector("#D");
var userSelection = document.querySelectorAll(".userSelection");
var timerElement = document.querySelector(".timer");
var scoreDisplay = document.querySelector(".scoreDisplay");
//var submitBtn = document.querySelector("#submitBtn");
var score = 0
var timerCount = 30;
var timer;
var highscores = [];
var currentQuestion = 0;

//Attaches start event listener to button
start.addEventListener("click", Start);

// Attaches event listener to submit button
for (var i=0; i<userSelection.length;i++){
    userSelection[i].addEventListener("click", Submit);
};

//question objects and array
var questions = [
    {
        question: "why is the sky blue",
        a: "Refraction",
        b: "space aliens",
        c: "fish",
        d: "javascript",
        correct: "A"
    },
    {
        question: "why is the earth green",
        a: "applesause",
        b: "clams",
        c: "lobsters",
        d: "plants",
        correct: "D"
    },
    {
        question: "why is space black",
        a: "void",
        b: "fish",
        c: "aliens",
        d: "because there is nothing",
        correct: "D"
    },
    {
        question: "why is the sky blue",
        a: "Refraction",
        b: "space aliens",
        c: "fish",
        d: "javascript",
        correct: "A"
    },
    {
        question: "why is the earth green",
        a: "applesause",
        b: "clams",
        c: "lobsters",
        d: "plants",
        correct: "D"
    },
    {
        question: "why is space black",
        a: "void",
        b: "fish",
        c: "aliens",
        d: "because there is nothing",
        correct: "D"
    },
    {
        question: "why is the sky blue",
        a: "Refraction",
        b: "space aliens",
        c: "fish",
        d: "javascript",
        correct: "A"
    },
    {
        question: "why is the earth green",
        a: "applesause",
        b: "clams",
        c: "lobsters",
        d: "plants",
        correct: "D"
    },
    {
        question: "why is space black",
        a: "void",
        b: "fish",
        c: "aliens",
        d: "because there is nothing",
        correct: "D"
    },
    {
        question: "why is the sky blue",
        a: "Refraction",
        b: "space aliens",
        c: "fish",
        d: "javascript",
        correct: "A"
    },
    {
        question: "why is the earth green",
        a: "applesause",
        b: "clams",
        c: "lobsters",
        d: "plants",
        correct: "D"
    },
    {
        question: "why is space black",
        a: "void",
        b: "fish",
        c: "aliens",
        d: "because there is nothing",
        correct: "D"
    }
];

//connected to start button
function Start() {
    //starts timer
    Timer()
    renderQ()
    //hides start button
    start.classList.add("hide");
};

function renderQ(){
    questionEl.innerText = questions[currentQuestion].question;
    AnswerA.innerText = questions[currentQuestion].a;
    AnswerB.innerText = questions[currentQuestion].b;
    AnswerC.innerText = questions[currentQuestion].c;
    AnswerD.innerText = questions[currentQuestion].d;
    scoreDisplay.innerText = score;
}

//button value debug logs
console.log(AnswerA);
console.log(AnswerB);
console.log(AnswerC);
console.log(AnswerD);

//Submit button then compares user selection with right answer and logs score.
function Submit(e) {
    if(e){
        console.log(e.target); //shows what was clicked
        console.log(e.target.id); //shows button ID
    }
    if(e.target.id == questions[currentQuestion].correct){
        console.log("correct answer");
        score++;
        console.log(score); //logs score
    } else{
        console.log("wrong answer");
        timerCount - 10;
    }
    currentQuestion++;
    renderQ()
};

//TIMER FUNCTION
function Timer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            GameOver();
        }
    }, 1000);
};


//game over function is activated via timer = 0 or last Q answered
function GameOver() {
    var Initials = window.prompt("Game is over. Enter your initials"); //prompts for initials to add to score object
    var highScore = { //sets score object
        Initials: Initials.value,
        score: score.value, 
    }
    localStorage.setItem("highScore", JSON.stringify(highScore)); //sends score object to local storage
    renderHighScoreList();
};

function renderHighScoreList(){ //calls on locally stored object
    var highScoreList = JSON.parse(localStorage.getItem("highScore")); //parses the object 
    if (highScoreList) { //checks that its populated
        document.querySelector(".leaderboardScores").textContent = highScoreList.score + highScoreList.Initials //renders it to high score list
    }
};










 //questions[currentQuestion].answers.forEach((answer, index) => {
   //document.createElement(`<button class="answerBtn" data-index="${index}">${answer}</button>`);
// });

// document.querySelector("answers").addEventListener("click", function(e){
//     if(e.target.matches(".answerBtn")){
//         //
//     }
// });




//event.listener for startBtn - starts function.question1() and timer function;

//var questions = array of objects

//var current question (starts as 1st in arra)
