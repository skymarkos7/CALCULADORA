let valorAtual = '';
let valorAnterior = '';
let operador = '';
let qtd = '';

function verificarTecla(event) {
    console.log('S');
}

function adicionarValor(valor) {
    valorAtual += valor;
    document.getElementById('resultado').value = valorAtual;
    console.log(valorAtual);
}

function adicionarOperador(novoOperador) {
    qtd ++;
    if(qtd>1){
        calcular();
    }
    operador = novoOperador;
    valorAnterior = valorAtual;
    valorAtual = '';
    console.log(qtd);
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

function limpar() {
    valorAtual = '';
    valorAnterior = '';
    operador = '';
    qtd = '';
    document.getElementById('resultado').value = '0';
}
