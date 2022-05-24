/** Exercise 13-14-15
ex13: put a list of questions together
ex14: club everything to make the game
- use question list
- and function to put together a quiz
ex15: print the final score to the user
- In your program, create a data structure to hold high scores.
- Show user his score and high scores.
- Ask the user to send a screenshot if he has beaten the score. **/

// import readlinesync
var readlineSync = require('readline-sync')

// Initialize Score
var score = 0

// Ask username
var userName = readlineSync.question("Hi! What is your Name? ")

console.log (" Hi! " + userName + " Let's play a game to know how well you know me.")

// list of questions
var questionOne = {
question: "Who is my favorite SuperHero? ",
answer: "Batman"
}

var questionTwo = {
question: "Which is my favorite Song? ",
answer: "Renegade"
}

var questionThree = {
question: "Which flavor Ice Cream Do I like?",
answer: "Chocolate"
}

var questionFour = {
question: "Who is my favorite Music artist? ",
answer: "Eminem"
}

// Quiz function
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question)
  
  if (userAnswer.toLocaleLowerCase() == answer.toLocaleLowerCase()) {
    console.log("You are Correct, the answer is: " + answer)
    score = score + 1
    console.log("Your Score is: " + score)
    console.log("-------------------------------")
  }  else {
    console.log("You are Wrong, the correct answer is: " + answer)
    console.log("Your Score is: " + score)
    console.log("-------------------------------")
  }
}

var questions = [questionOne, questionTwo, questionThree, questionFour];

for (i=0; i<questions.length; i++) {
  var currentQuestion = questions[i]
  quiz(currentQuestion.question, currentQuestion.answer)
}

// HighScore DB
var highScore1 = {name: "Saket",
                 score: "2"}

var highScore2 = {name: "Ddraig",
                 score: "1"}

var highScore3 = {name: "PreetyBala",
                 score: "3"}

var highScores = [highScore1, highScore2, highScore3]

function highScoreDB() {
  //console.log("Current High Score Players : " + name + " , Score: " + score)
  console.log("Current High Score LeaderBoard")
  console.log("--------------------------------")
  highScores.map(score => console.log(score.name, " : ", score.score))
}

highScoreDB()

// final score
console.log("Your final score is: " + score)