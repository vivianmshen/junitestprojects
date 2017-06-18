var question1 = ["What is the capital of Germany?", ["Berlin", "Paris", "Vienna"], "Berlin"];
var question2 = ["What is 5 x 8?", ["90", "40", "56"], "40"];
var question3 = ["What animal carries around its kids in a pouch?", ["Bear", "Kangaroo", "Lion"], "Kangaroo"];

var questions = [question1, question2, question3];

var score = 0;
var questionIndex = 0;

function setFirstQuestion() {
	var questionSection = document.getElementById("question");
	questionSection.innerHTML = questions[questionIndex][0];
	addAnswers(questionSection);
	questionIndex++;
}

function nextQuestion() {
	var questionSection = document.getElementById("question");
	var answerSection = document.querySelectorAll("button");
	checkPreviousAnswer(this);
	if(questionIndex < 3) {
		removePreviousAnswers(questionSection, answerSection);
		questionSection.innerHTML = questions[questionIndex][0];
		addAnswers(questionSection);
		questionIndex++;
	} else {
		questionSection.innerHTML = "Quiz over: You got " + score + " answers right!";
	}
}

function checkPreviousAnswer(selectedAnswer) {
	if(selectedAnswer.innerHTML == questions[questionIndex-1][2]) {
		score++;
	}
}

function removePreviousAnswers(questionSection, answerSection) {
	for (var answerNum = 0; answerNum < 3; answerNum++) {
		questionSection.removeChild(answerSection[answerNum]);
	}
}

function addAnswers(questionSection) {
	for (var answerNum = 0; answerNum < 3; answerNum++) {
		var btn = document.createElement("BUTTON");
		var t = document.createTextNode(questions[questionIndex][1][answerNum]);
		btn.appendChild(t);
		btn.style.display = "block";
		btn.style.cursor = "pointer";
		btn.addEventListener("click", nextQuestion);
		questionSection.appendChild(btn);
	}
}

setFirstQuestion();


