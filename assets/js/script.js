let currentQuestion = 0;
const questions = ["A group of crows is called a...", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10"];

const options = [
    [
        "Option 1.1",
        "Option 2.1",
        "Option 3.1"
    ]
];

function PreviousQuestion(questionNumber) {
    document.getElementById("display-question").innerText =
        questions[questionNumber];
    // Update the options here...
    ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];
}

function handlePreviousQuestion() {
    currentQuestion--;
    PreviousQuestion(currentQuestion);
}


function NextQuestion(questionNumber) {
    document.getElementById("display-question").innerText =
        questions[questionNumber];
    // Update the options here...
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
}

function handleNextQuestion() {
    currentQuestion++;
    NextQuestion(currentQuestion);
}

document.getElementById('generalKnowledgeButton').addEventListener('click', handleGeneralKnowledge);

var img = document.createElement("img");
img.src = "assets/images/milad-fakurian-58Z17lnVS4U-unsplash.jpg"; alt = "picture of a brain";
var div = document.getElementById("gk-img");
div.appendChild(img);

var img = document.createElement("img");
img.src = "assets/images/pexels-anton-h-145707.jpg"; alt = "record player";
var div = document.getElementById("music-img");
div.appendChild(img);

var img = document.createElement("img");
img.src = "assets/images/pexels-donald-tong-66134.jpg"; alt = "video camera recording";
var div = document.getElementById("movies-img");
div.appendChild(img);