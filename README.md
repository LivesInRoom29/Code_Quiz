# Code_Quiz
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)


A timed, multiple choice coding quiz that stores and displays high scores.

## Description

Utilizing HTML, CSS and Vanilla JavaScript, this app was built from scratch. 

On page load, the user is shown the directions for the quiz and a start button. When the start button is pressed, a multiply choice question with 4 possible answers is displayed and a timer begins. If the answer chosen is correct, a message is briefly displayed to indicate that it was currect and 10 points are added to the  score. If the answer chosen is incorrect, a message is breifly display that it was incorrect and 10 seconds are deducted from the timer. Either way, a new question is displayed after 2 seconds.

In the end, the total score is the sum of correct answers times 10, plus any time remaining of the timer. The user can then input their initials to save their high score and can click on a link to the High Scores page to see the top 5 scores.


[Code Quiz](https://livesinroom29.github.io/Code_Quiz/)

![codeQuiz](https://user-images.githubusercontent.com/61219066/90327014-82f0e780-df5d-11ea-8732-f931aca420b1.gif)


## Learning Outcomes

* JavaScript
  * Became more familiar with using JavaScript to display and remove objects from the webpage as well as making the application interactive.
  * Utilized setInterval() and clearInterval() for the timer function.
  * Saved information (high scores) in local storage and displayed it later.
  * Worked with JSON objects to display questions and to store high scores and display them in order.


## Credits

* Thanks to the UNH Bootcamp instructor, TAs, tutors for providing the class with lots of practice using JavaScript.

* Lastly, as always. thanks to all the wonderful folks who post their questions and answers all over the web - you are life savers!

* Background for the High Scores page was made by [Freepik](https://www.flaticon.com/authors/freepik) from [FlatIcon](https://flaticon.com).

## License

Unlicense
