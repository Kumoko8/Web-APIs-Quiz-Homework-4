var scoreAmount = 0;
//display this variable to the high score list

//Make variable for buttons for listeners
var question1AWrong = $("#q1-A-w");
var question1BRight= $("#q1-B-R");
var question1CWrong = $("#q1-C-W");
var question1DWrong = $("#q1-D-W");
//check!//Need to make next question button for each page
//check!//Need to figure out how to make one question appear at a time
//
//check!//Need to calculate score for all correct answers
//check!//Need to make timers
//check!//Need to make timer subtract 10 seconds when wrong answer is clicked
//check!//Need to make high score list (local storage)
//Need to make name initials input
//Need to stylize and format it

//Timer
var timeEl = document.querySelector("#timer");

var timeLeft = 100;

function setTime () {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = " Time: " + timeLeft ;
  

  if(timeLeft === 0) {
    clearInterval(timerInterval);
    alert ("You have run out of time. Please try again!")
    window.location.assign(
      "./index.html"
    )
  }
  
  }, 1000);
  return timerInterval;
}
setTime();

//Question 1

question1AWrong.on('click', function () {
   timeLeft = timeLeft - 10;
  var showQuestion2 = $(".question-2");
   showQuestion2.show();
  var hideQuestion1 = $(".question-1");
   hideQuestion1.hide();
});

question1BRight.on('click', function () {
    scoreAmount = scoreAmount + 20;
    var showQuestion2 = $(".question-2");
   showQuestion2.show();
  var hideQuestion1 = $(".question-1");
   hideQuestion1.hide();
//keep track of score add to each correct answer
  });
question1CWrong.on('click', function () {
  timeLeft = timeLeft - 10;
  var showQuestion2 = $(".question-2");
   showQuestion2.show();
  var hideQuestion1 = $(".question-1");
   hideQuestion1.hide();
  });
question1DWrong.on('click', function () {
  timeLeft = timeLeft - 10;
  var showQuestion2 = $(".question-2");
   showQuestion2.show();
  var hideQuestion1 = $(".question-1");
   hideQuestion1.hide();
  });

var question2AWrong = $("#q2-A-w");
var question2BWrong= $("#q2-B-W");
var question2CRight = $("#q2-C-R");
var question2DWrong = $("#q2-D-W");
//Question 2
question2AWrong.on('click', function () {
  timeLeft = timeLeft - 10;
  var showQuestion3 = $(".question-3");
    showQuestion3.show();
  var hideQuestion2 = $(".question-2");
    hideQuestion2.hide();
  });
question2BWrong.on('click', function () {
  timeLeft = timeLeft - 10;
  var showQuestion3 = $(".question-3");
    showQuestion3.show();
  var hideQuestion2 = $(".question-2");
    hideQuestion2.hide();
  });
question2CRight.on('click', function () {
    scoreAmount = scoreAmount + 20;
    var showQuestion3 = $(".question-3");
    showQuestion3.show();
  var hideQuestion2 = $(".question-2");
    hideQuestion2.hide();
  });
question2DWrong.on('click', function () {
  timeLeft = timeLeft - 10;
  var showQuestion3 = $(".question-3");
    showQuestion3.show();
  var hideQuestion2 = $(".question-2");
    hideQuestion2.hide();
  });
var question3ARight = $("#q3-A-R");
var question3BWrong= $("#q3-B-W");
var question3CWrong = $("#q3-C-W");
var question3DWrong = $("#q3-D-W");
  
//Question 3
question3ARight.on('click', function () {
    scoreAmount = scoreAmount + 20;
    var showQuestion4 = $(".question-4");
    showQuestion4.show();
  var hideQuestion3 = $(".question-3");
    hideQuestion3.hide();
  });
question3BWrong.on('click', function () {
  timeLeft = timeLeft - 10;
  var showQuestion4 = $(".question-4");
    showQuestion4.show();
  var hideQuestion3 = $(".question-3");
    hideQuestion3.hide();
  });
question3CWrong.on('click', function () {
  timeLeft = timeLeft - 10;
  var showQuestion4 = $(".question-4");
    showQuestion4.show();
  var hideQuestion3 = $(".question-3");
    hideQuestion3.hide();
  });
question3DWrong.on('click', function () {
  timeLeft = timeLeft - 10;
  var showQuestion4 = $(".question-4");
    showQuestion4.show();
  var hideQuestion3 = $(".question-3");
    hideQuestion3.hide();
  });

  //Question 4
var question4ARight = $("#q4-A-R");
var question4BWrong= $("#q4-B-W");
var question4CWrong = $("#q4-C-W");
var question4DWrong = $("#q4-D-W");

question4ARight.on('click', function () {
    scoreAmount = scoreAmount + 20;
    var showQuestion5 = $(".question-5");
    showQuestion5.show();
  var hideQuestion4 = $(".question-4");
    hideQuestion4.hide();
  });
question4BWrong.on('click', function () {
  timeLeft = timeLeft - 10;
  var showQuestion5 = $(".question-5");
    showQuestion5.show();
  var hideQuestion4 = $(".question-4");
    hideQuestion4.hide();
  });
question4CWrong.on('click', function () {
  timeLeft = timeLeft - 10;
  var showQuestion5 = $(".question-5");
    showQuestion5.show();
  var hideQuestion4 = $(".question-4");
    hideQuestion4.hide();
  });
question4DWrong.on('click', function () {
  timeLeft = timeLeft - 10;
  var showQuestion5 = $(".question-5");
    showQuestion5.show();
  var hideQuestion4 = $(".question-4");
    hideQuestion4.hide();
  });



 //Question 5
var question5AWrong = $("#q5-A-w");
var question5BWrong= $("#q5-B-W");
var question5CRight = $("#q5-C-R");
var question5DWrong = $("#q5-D-W");

//Make event listeners for all buttons

question5AWrong.on('click', function () {
  timeLeft = timeLeft - 10;
  alert ("Thank you for taking this quiz! Please submit to see your score!");
  });
question5BWrong.on('click', function () {
  timeLeft = timeLeft - 10;
  alert ("Thank you for taking this quiz! Please submit to see your score!");

  });
question5CRight.on('click', function () {
    scoreAmount = scoreAmount + 20;
    alert ("Thank you for taking this quiz! Please submit to see your score!");

  });
question5DWrong.on('click', function () {
  timeLeft = timeLeft - 10;
  alert ("Thank you for taking this quiz! Please submit to see your score!");

  });


//Next Questions and Begin Quiz button

var beginQuiz = $("#begin-quiz");
var hideQuestion2 = $(".question-2");
var hideQuestion3 = $(".question-3");
var hideQuestion4 = $(".question-4");
var hideQuestion5 = $(".question-5");

hideQuestion2.hide();

hideQuestion3.hide();
  
hideQuestion4.hide();

hideQuestion5.hide();

beginQuiz.on('click', function () {
  window.location.assign(
    "./quiz-questions.html"
  )
  });

var displayScoreList = $("#high-score-list")
displayScoreList.hide();
//Complete Quiz button

var submitQuiz = $("#submit-quiz");

submitQuiz.on('click', function () {
  var displayScore = $("#high-score")
  displayScore.text(scoreAmount);
  displayScoreList.show();
  hideQuestion5.hide();
  localStorage.setItem(scoreAmount);
    
  });
var returnBtn = $("#return-btn");

returnBtn.on("click", function () {
  window.location.assign(
    "./index.html"
  )
})

function storeScores(){
  var highScore = document.querySelector("#high-score");
  var score = localStorage.getItem(scoreAmount);

  highScore.textContent = scoreAmount;
  
 }
storeScores();
