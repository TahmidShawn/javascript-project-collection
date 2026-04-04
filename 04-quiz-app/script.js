const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const quizQuestion = document.getElementById("quiz-question");
const currentQuestionNo = document.getElementById("current-question-no");
const totalQuestion = document.getElementById("total-question");
const currentScore = document.getElementById("score");
const ansContainer = document.getElementById("ans-container");
const finalScore = document.getElementById("final-score");
const totalFinalQuestion = document.getElementById("total-final-question");
const progressBar = document.getElementById("progress-bar");
const resultMessage = document.getElementById("result-message");

// var
let currentIndex = 0;
let score = 0;
let ansDisabled = false;

const quizQuestions = [
    {
        question: "What does 'DOM' stand for in JavaScript?",
        answers: [
            { text: "Document Object Model", correct: true },
            { text: "Data Object Method", correct: false },
            { text: "Digital Ordinance Model", correct: false },
            { text: "Document Oriented Mode", correct: false },
        ],
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: false },
            { text: "All of the above", correct: true },
        ],
    },
    {
        question: "What will 'typeof null' return?",
        answers: [
            { text: "null", correct: false },
            { text: "object", correct: true },
            { text: "undefined", correct: false },
            { text: "number", correct: false },
        ],
    },
    {
        question:
            "Which method is used to convert JSON to a JavaScript object?",
        answers: [
            { text: "JSON.parse()", correct: true },
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.convert()", correct: false },
            { text: "JSON.toObject()", correct: false },
        ],
    },
    {
        question: "What is a closure in JavaScript?",
        answers: [
            {
                text: "A function having access to its outer scope",
                correct: true,
            },
            { text: "A loop structure", correct: false },
            { text: "A type of variable", correct: false },
            { text: "An event listener", correct: false },
        ],
    },
    {
        question: "Which of these is NOT a JavaScript data type?",
        answers: [
            { text: "String", correct: false },
            { text: "Boolean", correct: false },
            { text: "Float", correct: true },
            { text: "Undefined", correct: false },
        ],
    },
    {
        question: "What will this return: 2 + '2' ?",
        answers: [
            { text: "4", correct: false },
            { text: "'22'", correct: true },
            { text: "NaN", correct: false },
            { text: "undefined", correct: false },
        ],
    },
];

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
    currentIndex = 0;
    score = 0;
    currentScore.textContent = score;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion() {
    ansDisabled = false;
    const currentQuestion = quizQuestions[currentIndex];
    quizQuestion.innerHTML = currentQuestion.question;
    currentQuestionNo.textContent = currentIndex + 1;

    const progressPercent = [currentIndex / quizQuestions.length] * 100;
    progressBar.style.width = progressPercent + "%";

    totalQuestion.textContent = quizQuestions.length;
    currentScore.textContent = score;

    ansContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ans-btn");

        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        ansContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    if (ansDisabled) return;
    ansDisabled = true;
    const selectedButton = event.target;

    const isCorrect = selectedButton.dataset.correct === "true";
    Array.from(ansContainer.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("incorrect");
        }
    });

    if (isCorrect) {
        score++;
        currentScore.textContent = score;
    }

    setTimeout(() => {
        currentIndex++;
        if (currentIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}
function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScore.textContent = score;
    totalFinalQuestion.textContent = quizQuestions.length;

    const percentage = (score / quizQuestions.length) * 100;

    const resultLevels = [
        { min: 100, text: "Perfect score! You're absolutely unstoppable" },
        { min: 80, text: "Awesome work! You really know your stuff" },
        { min: 60, text: "Nice effort! You're on the right track" },
        { min: 40, text: "Decent try! A little more practice will help" },
        { min: 0, text: "Don't worry! Keep learning and try again" },
    ];

    const result = resultLevels.find((level) => percentage >= level.min);

    resultMessage.textContent = `${result.text} (${percentage.toFixed(0)}%)`;
}
function restartQuiz() {
    resultScreen.classList.remove("active");

    startQuiz();
}
