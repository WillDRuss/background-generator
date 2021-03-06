const css =  document.querySelector("#css-output");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const linearDirArr = document.querySelectorAll(".lin-dir")
const radialDirArr = document.querySelectorAll(".rad-dir")

const body = document.getElementById("gradient");
const linearRadio = document.getElementById("linearRadio")
const radialRadio = document.getElementById("radialRadio")
const enter = document.getElementById("enter");
const refresh = document.getElementById("refresh");
const linearOptions = document.getElementById("linear-options");
const radialOptions = document.getElementById("radial-options");
const circleOption = document.getElementById("circle")
const ellipseOption = document.getElementById("ellipse")

const hexArr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];



function linearGradOptions() {
	for (elem of linearDirArr) {
		if (elem.checked) {
			return document.getElementById(elem.id).parentNode.innerText;
			} 
	}
}


function circleOrEllipse() {
	if (circleOption.checked) {
		return 'circle ';
	} else if (ellipseOption.checked) {
		return 'ellipse ';
	}
}


function radialGradOptions() {
	for (elem of radialDirArr) {
		if (elem.checked) {
			return document.getElementById(elem.id).parentNode.innerText;
			} 
	}
}


function gradientType() {
	if (linearRadio.checked) {
		linearOptions.style.display = 'flex'
		radialOptions.style.display = 'none'
		return 'linear-gradient(' + linearGradOptions() +', '
	} else if (radialRadio.checked) {
		linearOptions.style.display = 'none'
		radialOptions.style.display = 'flex'
		return 'radial-gradient(' 
		+ circleOrEllipse() + radialGradOptions() + ', ';
	}
}


function setGradient() {
	let backgroundText = gradientType() 
		+ color1.value + ", " 
		+ color2.value + ")";

	body.style.backgroundImage = backgroundText

		css.innerHTML = 'Hex code: ' + backgroundText + ":<br>" 
		+ 'RGB code: ' + body.style.backgroundImage + ':' ;
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
refresh.addEventListener("click", setGradient);
linearRadio.addEventListener("change", gradientType);
radialRadio.addEventListener("change", gradientType);

setGradient();






