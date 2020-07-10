const countdownEl = document.querySelector('#countdown');
const startButtonEl = document.querySelector('#start-button');

startButtonEl.addEventListener("click", function() {
    startQuiz();
});

// This function starts te quiz when the start button is clicked.
function startQuiz() {
    // Add time to countdown timer.
    let timeleft = 120;

    var timeInterval = setInterval(function() {
        countdownEl.textContent = timeleft + " seconds left";

        if (!timeleft--) {
            countdownEl.textContent = "";
            //run function to show score and give option to see high scores
            clearInterval(timeInterval);
        }
    }, 1000);

    // Need function to send out questions
}




