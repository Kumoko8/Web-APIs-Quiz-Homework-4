//Make variable for buttons for listeners
var question1AWrong = $("#q1-A-w");
var question1BRight= $("#q1-B-R");
var question1CWrong = $("#q1-C-W");
var question1DWrong = $("#q1-D-W");
//check!//Need to make next question button for each page
//check!//Need to figure out how to make one question appear at a time
//Need to calculate score for all correct answers
//Need to make timers
//Need to make timer subtract 10 seconds when wrong answer is clicked
//Need to make high score list (local storage)
//Need to make name initials input
//Need to stylize and format it

//Question 1

question1AWrong.on('click', function () {
  window.location.assign(
    "./quiz-question1.html"
  )
  });

question1BRight.on('click', function () {
    alert('Hello World');
  });
question1CWrong.on('click', function () {
    alert('Hello World');
  });
question1DWrong.on('click', function () {
    alert('Hello World');
  });

var question2AWrong = $("#q2-A-w");
var question2BWrong= $("#q2-B-W");
var question2CRight = $("#q2-C-R");
var question2DWrong = $("#q2-D-W");
//Question 2
question2AWrong.on('click', function () {
    alert('Hello World');
  });
question2BWrong.on('click', function () {
    alert('Hello World');
  });
question2CRight.on('click', function () {
    alert('Hello World');
  });
question2DWrong.on('click', function () {
    alert('Hello World');
  });
var question3ARight = $("#q3-A-R");
var question3BWrong= $("#q3-B-W");
var question3CWrong = $("#q3-C-W");
var question3DWrong = $("#q3-D-W");
  
//Question 3
question3ARight.on('click', function () {
    alert('Hello World');
  });
question3BWrong.on('click', function () {
    alert('Hello World');
  });
question3CWrong.on('click', function () {
    alert('Hello World');
  });
question3DWrong.on('click', function () {
    alert('Hello World');
  });

  //Question 4
var question4ARight = $("#q4-A-R");
var question4BWrong= $("#q4-B-W");
var question4CWrong = $("#q4-C-W");
var question4DWrong = $("#q4-D-W");

question4ARight.on('click', function () {
    alert('Hello World');
  });
question4BWrong.on('click', function () {
    alert('Hello World');
  });
question4CWrong.on('click', function () {
    alert('Hello World');
  });
question4DWrong.on('click', function () {
    alert('Hello World');
  });

 //Question 5
var question5AWrong = $("#q5-A-w");
var question5BWrong= $("#q5-B-W");
var question5CRight = $("#q5-C-R");
var question5DWrong = $("#q5-D-W");

//Make event listeners for all buttons

question5AWrong.on('click', function () {
    alert('Hello World');
  });
question5BWrong.on('click', function () {
    alert('Hello World');
  });
question5CRight.on('click', function () {
    alert('Hello World');
  });
question5DWrong.on('click', function () {
    alert('Hello World');
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

var nextQuestion1 = $("#next-question-1");


nextQuestion1.on('click', function () {
  var showQuestion2 = $(".question-2");
    showQuestion2.show();
  var hideQuestion1 = $(".question-1");
    hideQuestion1.hide();
  });

  var nextQuestion2 = $("#next-question-2");
  
  nextQuestion2.on('click', function () {
    var showQuestion3 = $(".question-3");
    showQuestion3.show();
  var hideQuestion2 = $(".question-2");
    hideQuestion2.hide();
    
    });

  var nextQuestion3 = $("#next-question-3");

  nextQuestion3.on('click', function () {
    var showQuestion4 = $(".question-4");
    showQuestion4.show();
  var hideQuestion3 = $(".question-3");
    hideQuestion3.hide();
    
    });
  var nextQuestion4 = $("#next-question-4");

  nextQuestion4.on('click', function () {
    var showQuestion5 = $(".question-5");
    showQuestion5.show();
  var hideQuestion4 = $(".question-4");
    hideQuestion4.hide();
    
    });

//Complete Quiz button

var completeQuiz = $("#complete-quiz");

completeQuiz.on('click', function () {
  window.location.assign(
    "./quiz-question1.html"
  )
  });

 

