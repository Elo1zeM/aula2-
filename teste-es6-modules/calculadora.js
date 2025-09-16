//Calculadora.js - Versão CommonJS

//Função para somar 2 nº
function somar(a, b){
    return a + b; // Retorna o resultado da soma
}

//Função para subtrair 2 nº
function subtrair(a, b){
    return a - b; // Retorna o resultado da subtração
}

//Função para multiplicar 2 nº
function multiplicar(a, b){
        return a * b; //Retorna o resultado da multiplicação
    }

//Função para dividir dois números
function dividir(a, b){
    if (b === 0){
      return 'Erro: Divisão por zero!'; //Evita erro matematico
    }
    return a / b;
}


export default { 
    somar,
    subtrair,
    multiplicar,
    dividir
};