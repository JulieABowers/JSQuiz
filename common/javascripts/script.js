/* Questions

1. Inside which HTML element do we put the JavaScript?
    a. <scripting>
    b. <js>
    c. <script>
    d. <javascript>

    Answer: C

2. What is the correct JavaScript syntax to change the content of the HTML element below?

<p id="demo">This is a demonstration.</p>
    a. #demo.innerHTML = "Hello World!";
    b. document.GetELementByName("p").innerHTML = "Hello World!";
    c. document.GetELementByName("demo").innerHTML = "Hello World!";
    d. document.GetELement("p").innerHTML = "Hello World!";

    Answer: C

3. Where is the correct place to insert a JavaScript?
    a. Both the <head> and <body> sections
    b. The <head> section
    c. The <body> section

    Answer: A

4. What is the correct syntax for referring to an external script called "xxx.js"?
    a. <script src="xxx.js">
    b. <script href="xxx.js">
    c. <script name="xxx.js">

    Answer: A

5. The external JavaScript file must contain the <script> tag.
    a. True
    b. False

    Answer: B

6. How do you write "Hello World" in an alert box?
    a. alert("Hello World!");
    b. msg("Hello World!");
    c. confirm("Hello World!");
    d. prompt("Hello World!");

    Answer: A

7. How do you create a function in JavaScript?
    a. function = myFunction()
    b. function:myFunction()
    c. function myFunction()

    Answer: C
    
8. How do you call a function named "myFunction"?
    a. myFunction()
    b. call myFunction()
    c. call function myFunction()

    Answer: A

9. How to write an IF statement in JavaScript?
    a. if i = 5
    b. if (i == 5)
    c. if i = 5 then
    d. if i == 5

    Answer: B

10. How does a FOR loop start?
    a. for (i <= 5; i++)
    b. for (i = 0; i <= 5)
    c. for i = 1 to 5
    d. for (i = 0; i <= 5; i++)

    Answer: D
*/

var timer = 90;
var startBtn = document.querySelector("#startBtn");
var cardCtrl = document.getElementById("#card1");
var startBtnEle = $("#startBtn");
var resetBtnEle = $("#resetBtn");
var cardCtrlEle = $("#card1");
var questionCtr = 0;
var questionText = $("#questionText");

//When the page loads we only want the header and the start button to be visible
cardCtrlEle.hide();
resetBtnEle.hide();
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
        answers: "#demo.innerHTML = \"Hello World!\";",
        qB: "document.GetELementByName(\"p\").innerHTML = 'Hello World!';",
        qC: "document.GetELementByName(\"demo\").innerHTML = \"Hello World!\";",
        qD: "document.GetELement(\"p\").innerHTML = \"Hello World!\";",
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

/*
  var x = document.createElement("INPUT");
        x.setAttribute("type", "radio");
        x.setAttribute("name", "sort");
        x.setAttribute("value", "town");
        x.setAttribute("id", "town");
        container_element.appendChild(x);
        var label = document.createElement('label');
        label.setAttribute('for', 'town');
        label.innerHTML = "town";
        container_element.appendChild(label);

var questions = [
{ question1: "What color is the sky?", 
    answers:["blue", "red", "green", "orange"], 
    correctAnswer: 0
}
];

var questionHtml = '';
questions.forEach(function(question) {
questionHtml = '<p>'+  question.question1 + '</p>';
question.answers.forEach(function(answer, i) {
    questionHtml += '<input type="radio" name="answer" '
    questionHtml += 'value="' + i + '">'
    questionHtml += answer + '<br>'
})
})
document.getElementById('buttons').innerHTML = questionHtml;
 */         

function init()
{
    //Hide the start button and show the questions
    cardCtrlEle.show();
    resetBtnEle.show();
    startBtnEle.hide()

    //Display Q1
    //currentQuestion = question1;
    //$("#questionText").text(questionCtr + ". " + question1.qText);
    //console.log(currentQuestion.qText);
    generateQuestions();

}

function generateQuestions()
{
    currentQuestion = myQuestions[questionCtr];
    questionCtr++;
    $("#questionText").text(questionCtr + ". " + currentQuestion.question);

    var questionHtml = '';
    var labelText;
    $("#questionText").append("<div>");
    currentQuestion.answers.forEach(function(answer, i) {
        questionHtml += '<input type="radio" name="question" '
        questionHtml += 'value="' + i + '">'
        questionHtml += '<label for="' + i + '" padding-left=20px>' + answer + '</label><br>'
    })
    /*var answerCtr = currentQuestion.answers.length;
    for (j = 0; j <= answerCtr; j++)
    {
        <label></label><br></br>
        //$("#questionText").children().children[1]. = currentQuestion.answers[j];
        //$("#questionText").children[1].value = "grr";
        console.log($("#questionText").children().children().text);
        console.log(currentQuestion.answers[j]);

    }*/
    console.log(questionHtml);
    
    $("#questionText").children().append(questionHtml);
    $("question").text = questionHtml;

    
}
startBtn.addEventListener("click", init);
