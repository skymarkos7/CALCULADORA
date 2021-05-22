
var n1=0;
var n2=0;
var nr=0;
var nl=0;
var ng=0;
var op=0;
var nt=0;
var mostra=0;
var ig=0;
//var geral=['0'];



function num0(){
	nl = 0;

	if (mostra===0) {
		mostra="0"
		document.getElementById('visor').innerHTML=mostra;
	}else{	
		mostra = mostra+"0";
		document.getElementById('visor').innerHTML=mostra;
	}  
}


function num1(){
	nl = 1;

	if (mostra===0) {
		mostra="1"
		document.getElementById('visor').innerHTML=mostra;
	}else{
		mostra = mostra+"1";
		document.getElementById('visor').innerHTML=mostra;	
	}
}


function num2(){
	nl = 2;

	if (mostra===0) {
		mostra="2"
		document.getElementById('visor').innerHTML=mostra;
	}else{	
		mostra = mostra+"2";
		document.getElementById('visor').innerHTML=mostra;
	}
}



function num3(){
	nl = 3;
	if (mostra===0) {
		mostra="3"
		document.getElementById('visor').innerHTML=mostra;
	}else{	
		mostra = mostra+"3";
		document.getElementById('visor').innerHTML=mostra;
	}	    
}



function num4(){
	nl = 4;	
	if (mostra===0) {
		mostra="4"
		document.getElementById('visor').innerHTML=mostra;
	}else{	
		mostra = mostra+"4";
		document.getElementById('visor').innerHTML=mostra;
	}	
}



function num5(){
	nl = 5;
	if (mostra===0) {
		mostra="5"
		document.getElementById('visor').innerHTML=mostra;
	}else{	
		mostra = mostra+"5";
		document.getElementById('visor').innerHTML=mostra;
	}
}



function num6(){
	nl = 6;
	if (mostra===0) {
		mostra="6"
		document.getElementById('visor').innerHTML=mostra;
	}else{	
		mostra = mostra+"6";
		document.getElementById('visor').innerHTML=mostra;
	}
}



function num7(){
	nl = 7;
	if (mostra===0) {
		mostra="7"
		document.getElementById('visor').innerHTML=mostra;
	}else{	
		mostra = mostra+"7";
		document.getElementById('visor').innerHTML=mostra;
	}
}



function num8(){
	nl = 8;
	if (mostra===0) {
		mostra="8"
		document.getElementById('visor').innerHTML=mostra;
	}else{	
		mostra = mostra+"8";
		document.getElementById('visor').innerHTML=mostra;
	}
}



function num9(){

	//	var adicionar = geral.push("9");;
	//	document.getElementById('span').innerHTML=geral;


	if (mostra===0) {
		mostra="9"
		document.getElementById('visor').innerHTML=mostra;
	}else{	
		mostra = mostra+"9";
		document.getElementById('visor').innerHTML=mostra;
	}
}



//================  operações  ==========================

function igual(){
		ig = 0;		
	if (op=="+") {
		n2 = parseInt(mostra);
		nr = n1+n2;
		document.getElementById('visor').innerHTML=nr;
		mostra = 0;
	}
	if (op=="-") {
		n2 = Number(mostra);
		nr = n1-n2;
		document.getElementById('visor').innerHTML=nr;
		mostra = 0;
	}
	if (op=="x") {
		n2 = Number(mostra);
		nr = n1*n2;
		document.getElementById('visor').innerHTML=nr;
		mostra = 0;
	}
	if (op=="/") {
		n2 = Number(mostra);
		nr = n1/n2;
		document.getElementById('visor').innerHTML=nr;
		mostra = 0;
	}
}




function mais(){
	op = "+";		

	if (mostra==0) {
		n1 = nr;
	}else{
		n1 = parseInt(mostra);
		mostra = mostra+"+";
		document.getElementById('visor').innerHTML=mostra;
		nr = parseInt(mostra);
		mostra=0;	
	}

}




function menos(){
	op = "-";
	if (mostra==0) {
		n1 = nr;
	}else{
	n1 = Number(mostra);
	mostra = mostra+"-";
	document.getElementById('visor').innerHTML=mostra;	
	mostra=0;
	}
}


function vezes(){
	op = "x";
	if (mostra==0) {
		n1 = nr;
	}else{
	n1 = Number(mostra);
	mostra = mostra+"x";
	document.getElementById('visor').innerHTML=mostra;	
	mostra=0;
	}
}


function dividir(){
	op = "/";
	if (mostra==0) {
		n1 = nr;
	}else{
	n1 = Number(mostra);
	mostra = mostra+"/";
	document.getElementById('visor').innerHTML=mostra;	
	mostra=0;
	}
}


function ac(){
	n1=0;
 	n2=0;
 	nr=0;
 	nl=0;
 	ng=0;
 	op=0;
 	nt=0;
 	mostra=0;
 	ig=0;
	document.getElementById('visor').innerHTML=mostra;
}

