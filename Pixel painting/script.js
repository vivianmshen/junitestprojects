var penColor = "";

/*function setPenColor(selectedColor) {
	penColor = selectedColor;
	document.getElementById("currentPenColor").innerHTML = "Current pen color: " + penColor;
}*/

/*function changePixelColor(pixel) {
	pixel.style.backgroundColor = penColor;
	document.getElementById("hi").innerHTML = "boo"
}*/

function setPixelColor() {
	var pixels = document.getElementsByClassName("pixel");
	for (var i = 0, len = pixels.length; i < len; i++) {
  		pixels[i].addEventListener('click', function() {
  			if(penColor == "") alert("Please choose a color!");
  			this.style.backgroundColor = penColor;
  		});
	}
}

function setupPenColors() {
	var colors = document.getElementsByClassName("color");
	for (var i = 0, len = colors.length; i < len; i++) {
  		startColor = colors[i].getAttribute("value");
  		colors[i].style.backgroundColor = startColor;
  		colors[i].addEventListener('click', function() {
  			penColor = this.getAttribute('value');
  			document.getElementById("currentPenColor").innerHTML = "Current pen color: " + penColor;
  		});
	}
}

setupPenColors();
setPixelColor();


