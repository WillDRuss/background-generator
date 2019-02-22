const css =  document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const hexArr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
const enter = document.getElementById("enter");

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value + ", " 
		+ color2.value + ")";

		css.textContent = body.style.background + ":";
}

function generateRandColors() {
	let rCArr1 = [];
	let rCArr2 = [];
	let randomRgb1;
	let randomRgb2;
	for (let i=0; i<6; i++) {
		let x = Math.round(Math.random() * 15);
		let y = Math.round(Math.random() * 15);
		rCArr1.push(hexArr[x]);
		rCArr2.push(hexArr[y]);
		randomRgb1 = "#" 
		+ rCArr1[0] + rCArr1[1] + rCArr1[2]
		+ rCArr1[3] + rCArr1[4] + rCArr1[5];
		randomRgb2 = "#" 
		+ rCArr2[0] + rCArr2[1] + rCArr2[2]
		+ rCArr2[3] + rCArr2[4] + rCArr2[5];
	}
	color1.value = randomRgb1;
	color2.value = randomRgb2;
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
enter.addEventListener("click", generateRandColors);

setGradient();






