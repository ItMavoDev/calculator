let numero = 0;
let resultado = 0;
let operador = "";

function agregarNumero(numero) {
    let resultado = document.getElementById('resultado');
    resultado.value += numero;
}

function agregarOperador(operador) {
    let resultado = document.getElementById('resultado');
    if (resultado.value.endsWith('+') || resultado.value.endsWith('-') || resultado.value.endsWith('*') || resultado.value.endsWith('/')) {
        return;
    }
    resultado.value += operador;
}

function borrar() {
    let resultado = document.getElementById('resultado')
    resultado.value = ''
}

function calcular() {
    let calculo = 0;
    switch (operador) {
        case "+":
            calculo = numero + resultado;
            break;
        case "-":
            calculo = numero - resultado;
            break;
        case "*":
            calculo = numero * resultado;
            break;
        case "/":
            calculo = numero / resultado;
            break;
    }
    resultado = calculo;
    operador = "";
    numero = 0;
}