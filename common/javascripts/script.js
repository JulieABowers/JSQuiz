var timer = 90;
var timerEle = $("#timer");
var startBtn = document.querySelector("#startBtn");
var nextBtn = document.querySelector("#nextBtn");
var resetBtn = document.querySelector("#resetBtn");
var cardCtrl = document.getElementById("#card1");
var startBtnEle = $("#startBtn");
var nextBtnEle = $("#nextBtn");
var resetBtnEle = $("#resetBtn");
var cardCtrlEle = $("#card1");
var questionCtr = 0;
var questionText = $("#questionText");
var timerInterval;

//When the page loads we only want the header and the start button to be visible
cardCtrlEle.hide();
resetBtnEle.hide();
nextBtnEle.hide();
startBtnEle.show();
var currentQuestion;
var myQuestions = [{
        // Properties are made up of key-value pairs
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["&lt;scripting&gt;", "&lt;js&gt;", "&lt;script&gt;", "&lt;javascript&gt;"],
        correctAnswer: "2"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?\n\n<p id=\"demo\">This is a demonstration.</p>",
        answers: ["#demo.innerHTML = \"Hello World!\";", "document.GetELementByName(\"p\").innerHTML = 'Hello World!';", "document.GetELementByName(\"demo\").innerHTML = \"Hello World!\";", "document.GetELement(\"p\").innerHTML = \"Hello World!\";"],
        correctAnswer: "2"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: ["Both the &lt;head&gt; and &lt;body&gt; sections", "The &lt;head&gt; section", "The &lt;body&gt; section", "The &lt;footer&gt; section"],
        correctAnswer: "0"
    },
    {
        question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        answers: ["&lt;script href=\"xxx.js\"&gt;", "&lt;script id=\"xxx.js\"&gt;", "&lt;script name=\"xxx.js\"&gt;", "&lt;script src=\"xxx.js\"&gt;"],
        correctAnswer: "3"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: ["True", "False"],
        correctAnswer: "1"
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        answers: ["alert(\"Hello World!\");", "msg(\"Hello World!\");", "confirm(\"Hello World!\");", "prompt(\"Hello World!\");"],
        correctAnswer: "0"
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: ["function = myFunction()", "function:myFunction()", "function myFunction()"],
        correctAnswer: "2"
    },
    {
        question: "How do you call a function named \"myFunction\"?",
        answers: ["myFunction()", "call myFunction()", "call function myFunction()"],
        correctAnswer: "0"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: ["if i = 5", "if (i == 5)", "if i = 5 then", "if i == 5"],
        correctAnswer: "1"
    },
    {
        question: "How does a FOR loop start?",
        answers: ["for (i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)"],
        correctAnswer: "3"
    }];


function init()
{
    //Hide the start button and show the questions
    cardCtrlEle.show();
    resetBtnEle.show();
    nextBtnEle.show();
    startBtnEle.hide()

    timerEle.text("Time Left: ")
    startTimer()
    generateQuestions();

}

function startTimer() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
    timer--;
    timerEle.text("Time Left: " + timer)

    if(timer === 0) {
    // Stops execution of action at set interval
    clearInterval(timerInterval);
    // Calls function to create and append image
    sendMessage();
    }

}, 1000);
}

function sendMessage() {
    var msgText = "Time's Up!";
    alert(msgText);  
}

function generateQuestions()
{
    currentQuestion = myQuestions[questionCtr];
    var numQuestions = myQuestions.length;

 
    questionCtr++;
    if (questionCtr == numQuestions)
    {
        nextBtnEle.hide();
    }

    $("#whichQuestion").text("Question " + questionCtr + " of " + numQuestions);
    $("#questionText").text(currentQuestion.question);

    var questionHtml = '';
    var labelText;
    $("#questionText").append("<div>");
    currentQuestion.answers.forEach(function(answer, i) {
        questionHtml += '<input type="radio" name="question" '
        questionHtml += 'value="' + i + '">'
        questionHtml += '<label for="' + i + '">' + answer + '</label><br>'
    })

    console.log(currentQuestion);
    
    $("#questionText").children().append(questionHtml);
    $("question").text = questionHtml;



    
}
startBtn.addEventListener("click", init);
nextBtn.addEventListener("click", generateQuestions);
resetBtn.addEventListener("click", function() {
    clearInterval(timerInterval);
    timer = 90;
    questionCtr = 0;
    cardCtrlEle.hide();
    resetBtnEle.hide();
    nextBtnEle.hide();
    startBtnEle.show();
});