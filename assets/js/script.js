let currentQuestion = 0;
const questions = ["What do you call a group of crows?", "Compared to their body weight, what is the strongest animal?", "Which is the only body part that is fully grown from birth?", "In what country was Elon Musk born?", "How many hearts does an octopus have?", "What planet is closest to the sun?", "Where is the strongest muscle located?", "What phone company produced the 3310?", "How many dots appear on a pair of dice?", "What country has the most islands?"];

const options = [
    ["group", "herd", "murder"],
    ["Dung beetle", "Elephant", "Ant"],
    ["heart", "fingernails", "eyes"],
    ["Colorado", "South Africa", "Italy"],
    ["3", "1", "4"],
    ["Mercury", "Venus", "Mars"],
    ["Arms", "Heart", "Jaw"],
    ["Samsung", "Blackberry", "Nokia"],
    ["36", "48", "42"],
    ["Sweden", "Jamaica", "Zanzibar"],
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