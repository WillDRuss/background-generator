var css =  document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var hexArr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
var enter = document.getElementById("enter");

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value + ", " 
		+ color2.value + ")";

		css.textContent = body.style.background + ":";
}

function generateRandColors() {
	var rCArr1 = [];
	var rCArr2 = [];
	for (var i=0; i<6; i++) {
		var x = Math.round(Math.random() * 15);
		var y = Math.round(Math.random() * 15);
		rCArr1.push(hexArr[x]);
		rCArr2.push(hexArr[y]);
		var randomRgb1 = "#" 
		+ rCArr1[0] + rCArr1[1] + rCArr1[2]
		+ rCArr1[3] + rCArr1[4] + rCArr1[5];
		var randomRgb2 = "#" 
		+ rCArr2[0] + rCArr2[1] + rCArr2[2]
		+ rCArr2[3] + rCArr2[4] + rCArr2[5];
	}
	color1.value = randomRgb1;
	color2.value = randomRgb2;
	console.log(randomRgb1);
	console.log(randomRgb2);
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
enter.addEventListener("click", generateRandColors);

setGradient();






