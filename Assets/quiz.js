const countdownEl = document.querySelector('#countdown');
const scoreEl = document.querySelector('#score');
const instructionsEl = document.querySelector('section.start-quiz');
const startButtonEl = document.querySelector('#start-button');
const quizContainer = document.querySelector('.questions');
const questionEl = document.querySelector('#question');
const answ1El = document.querySelector('#answer1');
const answ2El = document.querySelector('#answer2');
const answ3El = document.querySelector('#answer3');
const answ4El = document.querySelector('#answer4');
const resultEl = document.querySelector('div.result-display');
const highScoresEl = document.querySelector('div.display-high-scores');
//Table elements for high scores
const name1El = document.querySelector('#name1');
const score1El = document.querySelector('#score1');
const name2El = document.querySelector('#name2');
const score2El = document.querySelector('#score2');
const name3El = document.querySelector('#name3');
const score3El = document.querySelector('#score3');
const name4El = document.querySelector('#name4');
const score4El = document.querySelector('#score4');
const name5El = document.querySelector('#name5');
const score5El = document.querySelector('#score5');


// An array of objects containing each questions along with all answer choices and the actual answer.
const questions = [
    {
        question: "Variables are like the ____________ of programming.",
        answer: "nouns",
        choices: ["verbs", "adverbs", "nouns", "pronouns"]
    },
    {
        question: "What are the three different types of modals you can use in ?",
        answer: "ANSWER1",
        choices: ["ANSWER1", "answer2", "answer3", "answer4"]
    },
    {
        question: "question3?",
        answer: "ANSWER4",
        choices: ["answer1", "answer2", "answer3", "ANSWER4"]
    },
    {
        question: "question4?",
        answer: "ANSWER3",
        choices: ["answer1", "answer2", "ANSWER3", "answer4"]
    },
    {
        question: "question5?",
        answer: "ANSWER2",
        choices: ["answer1", "ANSWER2", "answer3", "answer4"]
    },
    {
        question: "question6?",
        answer: "ANSWER4",
        choices: ["answer1", "answer2", "answer3", "ANSWER4"]
    },
    {
        question: "question7?",
        answer: "ANSWER1",
        choices: ["ANSWER1", "answer2", "answer3", "answer4"]
    },
    {
        question: "question8?",
        answer: "ANSWER1",
        choices: ["ANSWER1", "answer2", "answer3", "answer4"]
    },
    {
        question: "question9?",
        answer: "ANSWER3",
        choices: ["answer1", "answer2", "ANSWER3", "answer4"]
    },
    {
        question: "question10?",
        answer: "ANSWER2",
        choices: ["answer1", "ANSWER2", "answer3", "answer4"]
    }
];
let index = 0; // The index for the questions array.
let score = 0;
let timeleft = 120;
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
        //Display the score with leading zeros if needed so that there are always 3 digit places.
        scoreEl.textContent = score.toString().padStart(3, 0);
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
    }, 500); // Change back to 2000
}

// need a function to end the game
function endGame() {
    // Add remaing time to score to get final score.
    score += timeleft;
    const initials = prompt('GAME OVER! Please enter your initals to save your score.');
    storeHighScore(initials, score);
    displayHighScores();
}

function storeHighScore(inits, score) {
    highScore.push({score, inits});
    console.log(highScore); // REMOVE LATER

    // Need to sort the array so that the highest scores are first... Maybe do this to display them?

    // Store high score locally
    localStorage.setItem('highscoreKEY', JSON.stringify(highScore));
    displayHighScores();
}

function displayHighScores() {
    highScoresEl.style.display = "block";
    let highScoresList = JSON.parse(localStorage.getItem('highscoreKEY'));
    console.log(highScoresList);
    console.log(highScoresList[1]);
    console.log(highScoresList[2]);

    // Table
    name1El.textContent = highScoresList[0].inits;
    score1El.textContent = highScoresList[0].score.toString();
    name2El.textContent = highScoresList[1].inits;
    score2El.textContent = highScoresList[1].score.toString();
    name3El.textContent = highScoresList[2].inits;
    score3El.textContent = highScoresList[2].score.toString();
    name4El.textContent = highScoresList[3].inits;
    score4El.textContent = highScoresList[3].score.toString();
    name5El.textContent = highScoresList[4].inits;
    score5El.textContent = highScoresList[4].score.toString();
   // highScoresEl.style.display = "block";

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

displayHighScores();


