const countdownEl = document.querySelector('#countdown');
const scoreEl = document.querySelector('#score');
const quizContainer = document.querySelector('main.quiz-container')
const instructionsEl = document.querySelector('div.get-started');
const startButtonEl = document.querySelector('#start-button');
const questionContainer = document.querySelector('.questions-container');
const questionEl = document.querySelector('#question');
const answ1El = document.querySelector('#answer1');
const answ2El = document.querySelector('#answer2');
const answ3El = document.querySelector('#answer3');
const answ4El = document.querySelector('#answer4');
const resultEl = document.querySelector('div.result-display');
const endGameEl = document.querySelector('div.end-game-container');
const highScoresEl = document.querySelector('div.high-scores-container');
const saveButtonEl = document.querySelector('#save-high-score');
const inputEl = document.querySelector('#high-score-input');


// An array of objects containing each questions along with all answer choices and the actual answer.
const questions = [
    {
        question: "Variables are like the ____________ of programming.",
        answer: "nouns",
        choices: ["verbs", "adverbs", "nouns", "pronouns"]
    },
    {
        question: "What are the three different types of modals you can use in JavaScript?",
        answer: "prompt, confirm, alert",
        choices: ["prompt, confirm, alert", "input, confirm, alert", "prompt, boolean, alert", "input, confirm, notify"]
    },
    {
        question: "This is the method you would use to cause something to show up in the console.",
        answer: "console.log()",
        choices: ["print", "print()", "console.log", "console.log()"]
    },
    {
        question: "Instead of using 'var' to initialize variables, you should use...",
        answer: "let or const",
        choices: ["changling or constant", "scalar or nonscalar", "let or const", "int or str"]
    },
    {
        question: "What is the equality operator in JavaScript?",
        answer: "===",
        choices: ["=", "==", "===", "===="]
    },
    {
        question: "'If/Else' statements are also known as __________.",
        answer: "conditionals",
        choices: ["modals", "arrays", "loops", "conditionals"]
    },
    {
        question: "Use a template literal to concatinate the value of variable 'fishType' into a sentence.",
        answer: "`The ${fishType} is my favorite type of fish.`",
        choices: ["`The ${fishType} is my favorite type of fish.`", "\"The \" + fishType + \" is the fishiest fish.\"", "The #{fishType} is the most beautiful fish.", "The + %{fishType} + lives only in the Dead Sea."]
    },
    {
        question: "What do you call objects that store multiple values of the same data type?",
        answer: "arrays",
        choices: ["arrays", "lists", "dictionaries", "booleans"]
    },
    {
        question: "In JavaScript, you need to place the body of the function inside ___.",
        answer: "{}",
        choices: ["()", "{}", "[]", "<>"]
    },
    {
        question: "Every function in JavaScript should have how many parameters?",
        answer: "any number, including no parameters",
        choices: ["0", "1", "2", "any number, including no parameters"]
    }
];
let index = 0; // The index for the questions array.
let score = 0;
let timeleft = 2;
// High score object is equal to the object saved in local storage if it exists, otherwise it's an empty array.
let highScore = JSON.parse(localStorage.getItem('highscoreKEY')) || [];

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
    questionContainer.style.display = "block";  // Shows the question and answers

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
        score += 10;
        //Display the score with leading zeros if needed so that there are always 3 digit places.
        scoreEl.textContent = score.toString().padStart(3, 0);
        // Display "Correct!" for two seconds
        resultEl.style.display = "block";
        resultEl.children[0].textContent = "Correct!"
    } else {
        // Display "Incorrect :(" for two seconds
        timeleft -= 10;
        resultEl.style.display = "block";
        resultEl.children[0].textContent = "Incorrect :(";
    }

    index++;  // Increments the index so that the next question will come up the next time sendQuestions is called.

    // After 2 seconds, reset the result to blank, remove it from display, and get new question/answers or end game
    setTimeout(function() {
        resultEl.children[0].textContent = "";
        resultEl.style.display = "none";
        if (index < 10) {
            sendQuestions(index);
        } else {
            endGame();
        }
    }, 2000);
}

// At the end of the game, displays the endGame element and finalizes the score.
function endGame() {
    // Add remaing time to score to get final score.
    score += timeleft;
    endGameEl.style.display = "block";
}

// Takes the initials from the input and the final score to save it in local memory.
function storeHighScore(inits, score) {
    highScore.push({score, inits});
    console.log(highScore); // REMOVE LATER

    // Store high score locally
    localStorage.setItem('highscoreKEY', JSON.stringify(highScore));
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
// Will store initials and the score upon submit with save button
saveButtonEl.addEventListener("click", function() {
    const initials = inputEl.value;
    console.log(initials);
    storeHighScore(initials, score);
});