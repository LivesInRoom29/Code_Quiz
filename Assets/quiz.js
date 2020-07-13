const countdownEl = document.querySelector('#countdown');
const instructionsEl = document.querySelector('section.start-quiz');
const startButtonEl = document.querySelector('#start-button');
const quizContainer = document.querySelector('.questions');
const questionEl = document.querySelector('#question');
const answ1El = document.querySelector('#answer1');
const answ2El = document.querySelector('#answer2');
const answ3El = document.querySelector('#answer3');
const answ4El = document.querySelector('#answer4');
const resultEl = document.querySelector('div.result-display');
// An array of objects containing each questions along with all answer choices and the actual answer.
const questions = [
    {
        question: "question1?",
        answer: "answer3",
        choices: ["answer1", "answer2", "answer3", "answer4"]
    },
    {
        question: "question2?",
        answer: "answer1",
        choices: ["answer1", "answer2", "answer3", "answer4"]
    },
    {
        question: "question3?",
        answer: "answer4",
        choices: ["answer1", "answer2", "answer3", "answer4"]
    },
    {
        question: "question4?",
        answer: "answer3",
        choices: ["answer1", "answer2", "answer3", "answer4"]
    },
    {
        question: "question5?",
        answer: "answer2",
        choices: ["answer1", "answer2", "answer3", "answer4"]
    },
    {
        question: "question6?",
        answer: "answer4",
        choices: ["answer1", "answer2", "answer3", "answer4"]
    },
    {
        question: "question7?",
        answer: "answer1",
        choices: ["answer1", "answer2", "answer3", "answer4"]
    },
    {
        question: "question8?",
        answer: "answer1",
        choices: ["answer1", "answer2", "answer3", "answer4"]
    },
    {
        question: "question9?",
        answer: "answer3",
        choices: ["answer1", "answer2", "answer3", "answer4"]
    },
    {
        question: "question10?",
        answer: "answer2",
        choices: ["answer1", "answer2", "answer3", "answer4"]
    }
];
let index = 0; // The index for the questions array.
let score = 0;
let timeleft = 120;

// This function starts the quiz when the start button is clicked.
function startQuiz() {
    // Show countdown timer.
    countdownEl.style.visibility = "visible";

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

// This function will use the questions array to send a questions with a set of answer choices.
function sendQuestions(index) {
    instructionsEl.style.display = "none";  // Removes the title and instructions.
    quizContainer.style.display = "block";  // Shows the question and answers

    const quest = questions[index]; // Determines which object in the array (which question)

    questionEl.textContent = quest.question // the actual question within the object quest
    answ1El.textContent = quest.choices[0]; // The answer choices 1-4
    answ2El.textContent = quest.choices[1];
    answ3El.textContent = quest.choices[2];
    answ4El.textContent = quest.choices[3];
}

// Checks if the answer chosen is correct... compare to answer in object
function checkAnswer(questIndex, answerIndex) {
    const quest = questions[questIndex]; // Determines which object in the array (which question)

    // If the index of the answer choice is the same as the actual answer...
    if (quest.choices[answerIndex] === quest.answer) {
        console.log('Yay, correct'); // TO BE REMOVED
        score += 10;
        // Display "Correct!" for two seconds
        resultEl.style.display = "block";
        resultEl.children[1].textContent = "Correct!"
    } else {
        console.log('WRONG!');  // TO BE REMOVED
        // Display "Incorrect :(" for two seconds
        timeleft -= 10;
        resultEl.style.display = "block";
        resultEl.children[1].textContent = "Incorrect :(";
    }

    index++;  // Increments the index so that the next question will come up the next time sendQuestions is called.

    // After 2 seconds, reset the result to blank, remove it from display, and get new question/answers or end game
    setTimeout(function() {
        resultEl.children[1].textContent = "";
        resultEl.style.display = "none";
        if (index < 10) {
            sendQuestions(index);
        } else {
            endGame();
        }
    }, 2000);
}

// need a function to end the game
function endGame() {

}

// Event listeners for the start buttons and for the 4 different answer choices.
startButtonEl.addEventListener("click", function() {
    startQuiz();
});
answ1El.addEventListener("click", function() {
    checkAnswer(index, 0);
});
answ2El.addEventListener("click", function() {
    checkAnswer(index, 1);
});
answ3El.addEventListener("click", function() {
    checkAnswer(index, 2);
});
answ4El.addEventListener("click", function() {
    checkAnswer(index, 3);
});



