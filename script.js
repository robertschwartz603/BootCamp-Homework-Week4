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
//wrong question penalty
var wrongTime = 5;

//Attaches start event listener to button
start.addEventListener("click", Start);

// Attaches event listener to submit button
for (var i = 0; i < userSelection.length; i++) {
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
        //this is always last question - do not touch. used for GameOver() activation before Timer() runs out.
        question: "End of Quiz!",
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        correct: "D"
    }
];

//logs how many questions you have
console.log(questions.length);

//connected to start button
function Start() {
    //resets all fields
    score = 0;
    timerCount = 30; // *SETS COUNTDOWN LENGTH*
    highscores = [];
    currentQuestion = 0;
    //starts timer
    Timer()
    renderQ()
    //hides start button
    start.classList.add("hide");
};

function renderQ() {
    questionEl.innerText = questions[currentQuestion].question;
    AnswerA.innerText = questions[currentQuestion].a;
    AnswerB.innerText = questions[currentQuestion].b;
    AnswerC.innerText = questions[currentQuestion].c;
    AnswerD.innerText = questions[currentQuestion].d;
    scoreDisplay.innerText = score;
};

//button value debug logs
console.log(AnswerA);
console.log(AnswerB);
console.log(AnswerC);
console.log(AnswerD);

//button then compares user selection with right answer and logs score.
function Submit(e) {
    if (e) {
        console.log(e.target); //shows what was clicked
        console.log(e.target.id); //shows button ID
    }
    if (e.target.id == questions[currentQuestion].correct) {
        console.log("correct answer");
        score++;
        console.log(score); //logs score
    } else {
        console.log("wrong answer");
        timerCount = timerCount - wrongTime; //subracts from timer if wrong
        timerCheck()
    }
    if (questions[currentQuestion].question == "End of Quiz!") { //activates game over if on last question by looking "End of Quiz"
        GameOver()
    } else {
        currentQuestion++;
        renderQ()
    }
};

//timerCheck function - available to have a wrong answer establish GameOver state if timer is depleted on penalty
function timerCheck() {
    if (timerCount <= 0) {
        clearInterval(timer);
        GameOver();
    }
}

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
        Initials: Initials,
        score: score,
    }
    localStorage.setItem("highScore", JSON.stringify(highScore)); //sends score object to local storage
    renderHighScoreList();
};

function renderHighScoreList() { //calls on locally stored object
    var highScoreList = JSON.parse(localStorage.getItem("highScore")); //parses the object 
    if (highScoreList) { //checks that its populated
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(highScoreList.score + " -- " + highScoreList.Initials));
        ul.appendChild(li);
        WellDone();
        //document.querySelector(".leaderboardScores").textContent = highScoreList.score + highScoreList.Initials //renders it to high score list
    }
};

function WellDone() {
    //initializes play again query:
    var playAgain = window.confirm("Well done! Play again?");
    // If yes
    if (playAgain) {
        clearInterval(timer);
        Start();
    } else {
        timerElement.textContent = 0;
    }
}



// ---- To Do: ----
//  add proper questions
//  get timer reduce after wrong question
//  finish deploy and readme

