const countdownEl = document.querySelector('#countdown');
const startButtonEl = document.querySelector('#start-button');
const quizContainer = document.querySelector('.questions');
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
let index = 0;

startButtonEl.addEventListener("click", function() {
    startQuiz();
});

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

    const quest = questions[index]; //which object in the array (which question)
    const p = document.createElement('p');
    const ansDiv = document.createElement('div');
    const a1 = document.createElement('button');
    const a2 = document.createElement('button');
    const a3 = document.createElement('button');
    const a4 = document.createElement('button');

    p.textContent = quest.question //the actual question within the object quest
    a1.textContent = quest.choices[0]; // The answer choices 1-4
    a2.textContent = quest.choices[1];
    a3.textContent = quest.choices[2];
    a4.textContent = quest.choices[3];

    ansDiv.setAttribute = ("class", "answerDiv");


    quizContainer.appendChild(p);
    quizContainer.appendChild(ansDiv);
    ansDiv.appendChild(a1);
    ansDiv.appendChild(a2);
    ansDiv.appendChild(a3);
    ansDiv.appendChild(a4);

    index++;

}



