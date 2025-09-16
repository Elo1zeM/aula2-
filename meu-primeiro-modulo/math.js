//matth.js - MÓDULO DE OPERAÇÕES MATEMATICAS
//Este arquivo contem funções para CALCULOS BASICOS

//Função para somar dois números
function somar(a, b){
    console.log(`Somando ${a} + ${b}`);
    return a + b; // Retorna o resultado da soma
}

//Função para multiplicar 2 nº
function multiplicar(a, b){
    console.log(`Multiplicando ${a} * ${b}`);
        return a * b; //Retorna o resultado da multiplicação
    }

//Função para dividir dois números
function dividir(a, b){
    if (b === 0){
        console.log('Erro: Não é possível dividir por zero!');
    return null;
    }
    console.log(`Dividindo ${a} / ${b}`);
    return a / b;
}

//IMPORTANTE: Exportando as funções para outros arquivos podem usar
//É como "emprestar" suas ferramentas para outros arquivos
module.exports = { 
    somar,
    multiplicar,
    dividir
};

// Explicação do module.exports:
//- É a forma de "disponibilizar" suas funções para outros arquivos
//Sem isso, outros arquivos não conseguem usar suas funções
//É como colocar suas ferramentas numa caixa para emprestar
