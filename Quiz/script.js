var question1 = ["First question??", ["Answer 1", "Answer 2", "Answer 3"], "Answer 1"];
var question2 = ["Second question??", ["Answer 12", "Answer 22", "Answer 32"], "Answer 22"];
var question3 = ["Third question??", ["Answer 13", "Answer 23", "Answer 33"], "Answer 33"];

var questions = [question1, question2, question3];

var answerSection = document.querySelectorAll(".answer");

console.log(answerSection);

var score = 0;
var questionNum = 0;



function nextQuestion() {
	var questionSection = document.getElementById("question");
	console.log(questionNum);

	if(questionNum < questions.length) {
		questionSection.innerHTML = questions[questionNum][0];
		for (var answerNum = 0; answerNum < 3; answerNum++) {
			answerSection[answerNum].innerHTML = questions[questionNum][1][answerNum];
			console.log(answerNum);

		}
		questionNum += 1;

	} else {
		questionSection.innerHTML = score;
		for (var answerNum = 0; answerNum < 3; answerNum++) {
			answerSection[answerNum].innerHTML = "";
		}
		document.getElementById("submitButton").style.display = "none";
	}
}

nextQuestion();
document.getElementById("submitButton").addEventListener("click", nextQuestion);

