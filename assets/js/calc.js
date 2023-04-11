let valorAtual = '';
let valorAnterior = '';
let operador = '';
let qtd = '';


/**
 * Verificar tecla pressionada
 */
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 48) {
		//console.log("A tecla 0 foi pressionada");
		valorAtual += '0';
		document.getElementById('resultado').value = valorAtual;
		//console.log(valorAtual);     

		som.pause();
		som.currentTime = 0;
		som.play();
    }
    if (event.keyCode === 49) {
        // console.log("A tecla 1 foi pressionada");
        valorAtual += '1';
        document.getElementById('resultado').value = valorAtual;
        //console.log(valorAtual);

	    som.pause();
		som.currentTime = 0;
		som.play();
    }
    if (event.keyCode === 50) {
        //console.log("A tecla 2 foi pressionada");
        valorAtual += '2';
        document.getElementById('resultado').value = valorAtual;
        //console.log(valorAtual);
	  
	    som.pause();
		som.currentTime = 0;
		som.play();
    }
    if (event.keyCode === 51) {
        //console.log("A tecla 3 foi pressionada");
        valorAtual += '3';
        document.getElementById('resultado').value = valorAtual;
        //console.log(valorAtual);

        som.pause();
		som.currentTime = 0;
		som.play();
    }
    if (event.keyCode === 52) {
        //console.log("A tecla 4 foi pressionada");
        valorAtual += '4';
        document.getElementById('resultado').value = valorAtual;
        //console.log(valorAtual);

        som.pause();
		som.currentTime = 0;
		som.play();
    }
    if (event.keyCode === 53) {
        //console.log("A tecla 5 foi pressionada");
        valorAtual += '5';
        document.getElementById('resultado').value = valorAtual;
        //console.log(valorAtual);

        som.pause();
		som.currentTime = 0;
		som.play();
    }
    if (event.keyCode === 54) {
        //console.log("A tecla 6 foi pressionada");
        valorAtual += '6';
        document.getElementById('resultado').value = valorAtual;
        //console.log(valorAtual);

        som.pause();
		som.currentTime = 0;
		som.play();
    }
    if (event.keyCode === 55) {
        //console.log("A tecla 7 foi pressionada");
        valorAtual += '7';
        document.getElementById('resultado').value = valorAtual;
        //console.log(valorAtual);

        som.pause();
		som.currentTime = 0;
		som.play();
    }
    if (event.keyCode === 56) {
        //console.log("A tecla 8 foi pressionada");
        valorAtual += '8';
        document.getElementById('resultado').value = valorAtual;
        //console.log(valorAtual);

        som.pause();
		som.currentTime = 0;
		som.play();
    }
    if (event.keyCode === 57) {
        //console.log("A tecla 9 foi pressionada");
        valorAtual += '9';
        document.getElementById('resultado').value = valorAtual;
        //console.log(valorAtual);

        som.pause();
		som.currentTime = 0;
		som.play();
    }

    /**
     * condicionais de teclado para operações  (+ - * /)
     */
    if (event.keyCode === 189) {
        //console.log("A tecla - foi pressionada");        
        
        qtd ++;
        if(qtd>1){
            calcular();
        }
        operador = '-';
        valorAnterior = valorAtual;
        valorAtual = '';

        som.pause();
		som.currentTime = 0;
		som.play();
    }
    if (event.keyCode === 187) {
        //console.log("A tecla + foi pressionada");
        
        qtd ++;
        if(qtd>1){
            calcular();
        }
        operador = '+';
        valorAnterior = valorAtual;
        valorAtual = '';

        som.pause();
		som.currentTime = 0;
		som.play();
    }
    if (event.keyCode === 191) {
        //console.log("A tecla / foi pressionada");
        
        qtd ++;
        if(qtd>1){
            calcular();
        }
        operador = '/';
        valorAnterior = valorAtual;
        valorAtual = '';

        som.pause();
		som.currentTime = 0;
		som.play();
    }
    if (event.keyCode === 88) {
        //console.log("A tecla x foi pressionada");
        
        qtd ++;
        if(qtd>1){
            calcular();
        }
        operador = '*';
        valorAnterior = valorAtual;
        valorAtual = '';

        som.pause();
		som.currentTime = 0;
		som.play();
    }
    if (event.keyCode === 13) {
        //console.log("A tecla Enter foi pressionada");

        calcular();
        
        som.pause();
		som.currentTime = 0;
		som.play();
    }
    if (event.keyCode === 8 || event.keyCode === 27) {
        //console.log("A tecla Delete foi pressionada");
                
        limpar();
        
        som.pause();
		som.currentTime = 0;
		som.play();
    }
    
      //console.log(event.keyCode);
    
  });

/**
 * Verificar botão clicado
 */
function adicionarValor(valor) {
    valorAtual += valor;
    document.getElementById('resultado').value = valorAtual;
    //console.log(valorAtual);
}

function adicionarOperador(novoOperador) {
    qtd ++;
    if(qtd>1){
        calcular();
    }
    operador = novoOperador;
    valorAnterior = valorAtual;
    valorAtual = '';
    //console.log(qtd);
}

function calcular() {
    let resultado = 0;
    const valor1 = parseFloat(valorAnterior);
    const valor2 = parseFloat(valorAtual);

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor1 / valor2;
            break;
        default:
            break;
    }

    document.getElementById('resultado').value = resultado;
    valorAtual = resultado.toString();
    valorAnterior = '';
    operador = '';
    qtd = '';
}

function off() {
    valorAtual = '';
    valorAnterior = '';
    operador = '';
    qtd = '';
    document.getElementById('resultado').value = '';
}

function limpar() {
    valorAtual = '';
    valorAnterior = '';
    operador = '';
    qtd = '';
    document.getElementById('resultado').value = '0';
}
