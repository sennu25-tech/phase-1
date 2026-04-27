const startBtn = document.getElementById("start-btn")
const quizScreen = document.getElementById("quiz-screen")
const startScreen = document.getElementById("start-screen")
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextBtn = document.getElementById("next-btn")
const resultScreen = document.getElementById("result-screen")
const scoreText = document.getElementById("score")
const restartBtn = document.getElementById("restart-btn")

let currentQuestionIndex = 0
let score = 0

const questions = [

{
question: "What does HTML stand for?",
answers: [
{text: "Hyper Text Markup Language", correct: true},
{text: "High Tech Machine Language", correct: false},
{text: "Hyper Transfer Machine Language", correct: false},
{text: "Home Tool Markup Language", correct: false}
]
},

{
question: "Which language makes websites interactive?",
answers: [
{text: "HTML", correct: false},
{text: "CSS", correct: false},
{text: "JavaScript", correct: true},
{text: "Python", correct: false}
]
},

{
question: "Which symbol is used for comparison?",
answers: [
{text: "===", correct: true},
{text: "++", correct: false},
{text: "--", correct: false},
{text: "+=", correct: false}
]
}

]

startBtn.addEventListener("click", startQuiz)
nextBtn.addEventListener("click", nextQuestion)
restartBtn.addEventListener("click", restartQuiz)

function startQuiz(){

startScreen.classList.add("hide")
quizScreen.classList.remove("hide")

currentQuestionIndex = 0
score = 0

showQuestion()

}

function showQuestion(){

resetState()

let question = questions[currentQuestionIndex]

questionElement.innerText = question.question

question.answers.forEach(answer => {

const button = document.createElement("button")

button.innerText = answer.text

button.addEventListener("click", () => selectAnswer(answer.correct))

answerButtons.appendChild(button)

})

}

function resetState(){

answerButtons.innerHTML = ""

}

function selectAnswer(correct){

if(correct){
score++
}

nextBtn.style.display = "block"

}

function nextQuestion(){

currentQuestionIndex++

if(currentQuestionIndex < questions.length){

showQuestion()

}else{

showResult()

}

}

function showResult(){

quizScreen.classList.add("hide")
resultScreen.classList.remove("hide")

scoreText.innerText = "You scored " + score + " out of " + questions.length

}

function restartQuiz(){

resultScreen.classList.add("hide")
startScreen.classList.remove("hide")

}