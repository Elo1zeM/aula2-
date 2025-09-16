// teste-calculadora.js - Testando nossa calculadora

//Importar todas as funçoes da calculadora
import calc from './calculadora.js'

//Testar cada função
console.log('=== TESTANDO NOSSA CALCULADORA ===');
console.log('');

//Teste da SOMA
console.log('Soma');
console.log('5 + 3 =', calc.somar(5, 3));
console.log('10 + 7 =', calc.somar(10, 7));
console.log('');

//Teste da SUBTRAÇÃO
console.log('Subtração');
console.log('10 - 4 =', calc.subtrair(10, 4));
console.log('15 + 8 =', calc.subtrair(15, 8));
console.log('');

//Teste da MULTIPLICAÇÃO
console.log('Multiplicação');
console.log('4 * 3 =', calc.multiplicar(4, 3));
console.log('7 * 6 =', calc.multiplicar(7, 6));
console.log('');

//Teste da DIVISÃO
console.log('Divisão');
console.log('15 / 3 =', calc.dividir(15, 3));
console.log('10 / 2 =', calc.dividir(10, 2));
console.log('10 / 0 =', calc.dividir(10, 0));
console.log('');

console.log('== TESTE CONCLUÍDO ===');