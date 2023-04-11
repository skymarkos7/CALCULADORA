let valorAtual = '';
let valorAnterior = '';
let operador = '';

function adicionarValor(valor) {
    valorAtual += valor;
    document.getElementById('resultado').value = valorAtual;
}

function adicionarOperador(novoOperador) {
    operador = novoOperador;
    valorAnterior = valorAtual;
    valorAtual = '';
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
}

function limpar() {
    valorAtual = '';
    valorAnterior = '';
    operador = '';
    document.getElementById('resultado').value = '';
}
