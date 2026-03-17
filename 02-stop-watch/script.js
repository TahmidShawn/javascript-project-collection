const timer = document.getElementById("show-timer");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

// event listener
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// variable
let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let timerInterval = null;

function startTimer() {
    timerInterval = setInterval(() => {
        milliSeconds++;
        if (milliSeconds === 100) {
            milliSeconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
        }
        displayTimer();
    }, 10);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    displayTimer();
}

function displayTimer() {
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");
    const ms = String(milliSeconds).padStart(2, "0");
    timer.textContent = `${m}:${s}:${ms}`;
}
