var submitButton = document.querySelector("button");
submitButton.addEventListener("click", function() {
	var storyArea = document.getElementById("story");
	storyArea.innerHTML = "boo";
	console.log("HELLO");
});

var button2 = document.querySelector(".test");
button2.addEventListener("click", myFunction);

function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}
