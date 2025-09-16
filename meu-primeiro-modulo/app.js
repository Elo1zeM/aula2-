// app.js Arquivo principal que usa o módulo math.js
// Este arquivo vai "importar" e usar as funções do math.js

// IMPORTANDO o módulo que criamos
//0'./' significa "na mesma pasta"
const  math = require('./math.js');

//Agora podemos usar as funções do modulo math!
console.log('=== TESTANDO NOSSO MÓDULO MATEMÁTICO ===');

//TESTANDO A FUNÇÃO SOMAR
const resultadoSoma = math.somar(10, 5);
console.log('Resultado da soma:', resultadoSoma);

//TESTANDO A FUNÇÃO MULTIPLICAR
const resultadoMultiplicacao = math.multiplicar(4, 7);
console.log('Resultado da multiplicação:', resultadoMultiplicacao);

//TESTANDO A FUNÇÃO DIVIDIR
const resultadoDivisao = math.dividir(20, 5);
console.log('Resultado da divisão:', resultadoDivisao);

//TESTANDO A FUNÇÃO DIVIDIR POR ZERO (ERRO)
const divisaoPorZero = math.dividir(20, 0);
console.log('Divisão por zero:', divisaoPorZero);

console.log('== TESTE CONCLUÍDO ===');