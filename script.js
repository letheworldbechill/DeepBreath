let timerInterval;
let startTime;
let currentTechnique;

function startWimHof() {
    clearInterval(timerInterval);
    currentTechnique = 'wim-hof';
    startTime = Date.now();
    animateCircle(30, 30, 30); // 30 breaths, 30 seconds inhale, 30 seconds exhale
    timerInterval = setInterval(updateTimer, 1000);
}

function startFourSevenEight() {
    clearInterval(timerInterval);
    currentTechnique = 'four-seven-eight';
    startTime = Date.now();
    animateCircle(4, 7, 8);
    timerInterval = setInterval(updateTimer, 1000);
}

function startBoxBreathing() {
    clearInterval(timerInterval);
    currentTechnique = 'box-breathing';
    startTime = Date.now();
    animateCircle(4, 4, 4);
    timerInterval = setInterval(updateTimer, 1000);
}

function animateCircle(inhale, hold, exhale) {
    const circle = document.querySelector(`#${currentTechnique} .circle`);
    circle.style.animation = `breathe ${inhale + hold + exhale}s infinite`;
}

function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.querySelector(`#${currentTechnique} .timer`).textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
