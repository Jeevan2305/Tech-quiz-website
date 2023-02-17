var readlineSync = require("readline-sync");

var score = 0;

// array of objects
var questions = [{
  question: "Which is the first search engine in internet? ",
  answer: "Archie"
}, {
  question: "Which is the first web browser? ",
  answer: "Nexus"
},
{
  question: "First computer virus known as ",
  answer: "Creeper Virus"
}, {
    question: "Who is known as the father of internet? ",
    answer: "Vint Cerf"
  }, {
    question: "Who is known as the father of super computing? ",
    answer: "Seymour Cray"
  }
];

function welcome() {
 var userName = readlineSync.question("What's your name? ");
 console.log("-------------")

  console.log("Welcome "+ userName + " to DO YOU KNOW Technology?");
  console.log("-------------")
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: "+ score +" out of 5 ");
}


welcome();
game();
showScores();
