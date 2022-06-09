// Start button
var startBtn = document.querySelector("#startQuiz");
var question1 = document.querySelector(".first-Question");
var name = document.querySelector(".textbox");
var highScore = document.querySelector(".scorePage");
var hideIntro = document.querySelector(".Quiz-Challenge");
var timer = document.querySelector(".timer")
var secondsLeft = 10
var hideQuestion1 = document.querySelector(".first-Question hide")
var questionSection = [".first-Question", ".second-Question", ".third-Question"];
var answer = document.querySelectorAll(".answer")
var index = 0
var rightAnswer = ["Sanchez", "Bird Person", "I am in great pain. Please help me"]
var textBox = document.querySelector(".textBox")

function nextQuestion() {
    console.log(this.textContent)
    var userAnswer = this.textContent
    if (userAnswer === rightAnswer[index]) {
        alert("CORRECT")

    }
    else {
        alert("INCORRECT")
    }
    var section = document.querySelector(questionSection[index])
    section.classList.add("hide")
    index++
    if (index < questionSection.length) {
        var nextSection = document.querySelector
            (questionSection[index])
        nextSection.classList.remove("hide")
    }

    if (index === questionSection.length) {
        textBox.classList.remove("hide")

    }
}

//answer[0].addEventListener("click", nextQuestion)
//answer[1].addEventListener("click", nextQuestion)
// answer[2].addEventListener("click", nextQuestion)
// answer[3].addEventListener("click", nextQuestion)
for (var i = 0; i < answer.length; i++) {
    answer[i].addEventListener("click", nextQuestion)
}
// Event listener for start button
startBtn.addEventListener("click", function () {
    question1.classList.remove("hide")
    hideIntro.classList.add("hide")
    setInterval(countDown, 1000)
})


// Timer Starts
function countDown() {
    timer.textContent = secondsLeft;
    if (secondsLeft > 0) {
        secondsLeft = secondsLeft - 1;
    }


    if (secondsLeft === 0) {
        clearInterval(timer);
    }
}

var answers = {
    "q1": 3,
    "q2": 1,
    "q3": 2
}

var maxQuestions = 3;
//User is presented with question and chooses an answer
function selectAnswer(question, answer) {
    var correct = answers['q' + question];
    var isCorrect = answers === correct;

    console.log(question, answer, answers);
    console.log('isCorrect', isCorrect);
    showNextQuestion(question);
    if (maxQuestions === question) {
        showScores();
    }
}
//Question is hidden and user moves to next question
function showNextQuestion(question) {
    hideQuestion(question)
    if (maxQuestions < question) {
        showQuestion(question + 1)
    }
}
