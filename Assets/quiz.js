const countdownEl = document.querySelector('#countdown');
const startButtonEl = document.querySelector('#start-button');
const quizContainer = document.querySelector('.questions');
const questionEl = document.querySelector('#question');
const answ1El = document.querySelector('#answer1');
const answ2El = document.querySelector('#answer2');
const answ3El = document.querySelector('#answer3');
const answ4El = document.querySelector('#answer4');
// An array of objects containing each questions along with all answer choices and the actual answer.
const questions = [
    {
        question: "question1?",
        answer: "answer1",
        choices: ["answer1", "answer2", "answer3", "answer4"]
    },
    {
        question: "question2?",
        answer: "answer2",
        choices: ["answer1", "answer2", "answer3", "answer4"]
    }
];
let index = 0; // The index for the questions array.
let score = 0;



// This function starts the quiz when the start button is clicked.
function startQuiz() {
    // Add time to countdown timer.
    let timeleft = 120;

    startButtonEl.style.display = "none";

    var timeInterval = setInterval(function() {
        countdownEl.textContent = timeleft + " seconds left";

        if (!timeleft--) {
            countdownEl.textContent = "";
            //run function to show score and give option to see high scores
            clearInterval(timeInterval);
        }
    }, 1000);

    // function to send out questions
    sendQuestions(index);
}

// This function will use the questions array to send out questions and answers.
function sendQuestions(index) {

    quizContainer.style.display = "block";

    const quest = questions[index]; //which object in the array (which question)

    questionEl.textContent = quest.question //the actual question within the object quest
    answ1El.textContent = quest.choices[0]; // The answer choices 1-4
    answ2El.textContent = quest.choices[1];
    answ3El.textContent = quest.choices[2];
    answ4El.textContent = quest.choices[3];

    index++;
}

// Need function to check if the answer is correct... compare to answer in object
function checkAnswer(index) {

}

// Event listeners:
startButtonEl.addEventListener("click", function() {
    startQuiz();
});

answ1El.addEventListener("click", function() {
    checkAnswer(0);
});

answ2El.addEventListener("click", function() {
    checkAnswer(1);
});

answ3El.addEventListener("click", function() {
    checkAnswer(2);
});

answ4El.addEventListener("click", function() {
    checkAnswer(3);
});



