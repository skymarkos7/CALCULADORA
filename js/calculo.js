
var n1 = 0;
var n2 = 0;
var nr = 0;
var Ndigualitado = 0;
var ng = 0;
var op = 0;
var nt = 0;
var mostrador = 0;
var igual = 0;


function num0() {
	Ndigualitado = 0;

	if (mostrador === 0) {
		mostrador = "0"
		document.getElementById('visor').innerHTML = mostrador;
	} else {
		mostrador = mostrador + "0";
		document.getElementById('visor').innerHTML = mostrador;
	}
}

function num1() {
	Ndigualitado = 1;

	if (mostrador === 0) {
		mostrador = "1"
		document.getElementById('visor').innerHTML = mostrador;
	} else {
		mostrador = mostrador + "1";
		document.getElementById('visor').innerHTML = mostrador;
	}
}

function num2() {
	Ndigualitado = 2;

	if (mostrador === 0) {
		mostrador = "2"
		document.getElementById('visor').innerHTML = mostrador;
	} else {
		mostrador = mostrador + "2";
		document.getElementById('visor').innerHTML = mostrador;
	}
}

function num3() {
	Ndigualitado = 3;
	if (mostrador === 0) {
		mostrador = "3"
		document.getElementById('visor').innerHTML = mostrador;
	} else {
		mostrador = mostrador + "3";
		document.getElementById('visor').innerHTML = mostrador;
	}
}


function num4() {
	Ndigualitado = 4;
	if (mostrador === 0) {
		mostrador = "4"
		document.getElementById('visor').innerHTML = mostrador;
	} else {
		mostrador = mostrador + "4";
		document.getElementById('visor').innerHTML = mostrador;
	}
}


function num5() {
	Ndigualitado = 5;
	if (mostrador === 0) {
		mostrador = "5"
		document.getElementById('visor').innerHTML = mostrador;
	} else {
		mostrador = mostrador + "5";
		document.getElementById('visor').innerHTML = mostrador;
	}
}


function num6() {
	Ndigualitado = 6;
	if (mostrador === 0) {
		mostrador = "6"
		document.getElementById('visor').innerHTML = mostrador;
	} else {
		mostrador = mostrador + "6";
		document.getElementById('visor').innerHTML = mostrador;
	}
}


function num7() {
	Ndigualitado = 7;
	if (mostrador === 0) {
		mostrador = "7"
		document.getElementById('visor').innerHTML = mostrador;
	} else {
		mostrador = mostrador + "7";
		document.getElementById('visor').innerHTML = mostrador;
	}
}


function num8() {
	Ndigualitado = 8;
	if (mostrador === 0) {
		mostrador = "8"
		document.getElementById('visor').innerHTML = mostrador;
	} else {
		mostrador = mostrador + "8";
		document.getElementById('visor').innerHTML = mostrador;
	}
}


function num9() {
	Ndigualitado = 9;
	if (mostrador === 0) {
		mostrador = "9"
		document.getElementById('visor').innerHTML = mostrador;
	} else {
		mostrador = mostrador + "9";
		document.getElementById('visor').innerHTML = mostrador;
	}
}


//================  operações  ==========================

function igualual() {
	igual = 0;
	if (op == "+") {
		n2 = parseInt(mostrador);
		nr = n1 + n2;
		document.getElementById('visor').innerHTML = nr;
		mostrador = 0;
	}
	if (op == "-") {
		n2 = Number(mostrador);
		nr = n1 - n2;
		document.getElementById('visor').innerHTML = nr;
		mostrador = 0;
	}
	if (op == "x") {
		n2 = Number(mostrador);
		nr = n1 * n2;
		document.getElementById('visor').innerHTML = nr;
		mostrador = 0;
	}
	if (op == "/") {
		n2 = Number(mostrador);
		nr = n1 / n2;
		document.getElementById('visor').innerHTML = nr;
		mostrador = 0;
	}
}



function somar() {
	op = "+";

	
	if (mostrador == 0) {
		n1 = nr;
	} else {
		n1 = parseInt(mostrador);
		mostrador = mostrador + "+";
		document.getElementById('visor').innerHTML = mostrador;
		nr = parseInt(mostrador);
		mostradorPessistente = mostrador;
		mostrador = 0;
	}

}


function subtrair() {
	op = "-";

	if (mostrador == 0) {
		n1 = nr;
	} else {
		n1 = Number(mostrador);
		mostrador = mostrador + "-";
		document.getElementById('visor').innerHTML = mostrador;
		mostradorPessistente = mostrador;
		mostrador = 0;
	}
}


function multiplicar() {
	op = "x";

	if (mostrador == 0) {
		n1 = nr;
	} else {
		n1 = Number(mostrador);
		mostrador = mostrador + "x";
		document.getElementById('visor').innerHTML = mostrador;
		mostradorPessistente = mostrador;
		mostrador = 0;
	}
}


function dividir() {
	op = "/";

	if (mostrador == 0) {
		n1 = nr;
	} else {
		n1 = Number(mostrador);
		mostrador = mostrador + "/";
		document.getElementById('visor').innerHTML = mostrador;
		mostradorPessistente = mostrador;
		mostrador = 0;
	}
}


function ac() {
	n1 = 0;
	n2 = 0;
	nr = 0;	
	ng = 0;
	op = 0;
	nt = 0;
	mostrador = 0;
	Ndigualitado = 0;
	igual = 0;
	mostradorPessistente = 0;
	document.getElementById('visor').innerHTML = mostrador;
}

