const highScoresEl = document.querySelector('div.high-scores-container');
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


function displayHighScores() {

    let highScoresList = JSON.parse(localStorage.getItem('highscoreKEY')).sort(function (a, b) {
        return b.score - a.score;
    });

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
}

displayHighScores();