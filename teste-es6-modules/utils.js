//utils.js - FUnções utilitaris usando ES6 modules

//Exportando funções individuasis (named exports)
export function cumprimentar(nome) {
    return `Olá, {nome}! Bem-vindo ao ES6 modules!`;
}

export function calcularIdade(anoNascimento){
   const anoAtual = new Date().getFullYear();
   return anoAtual - anoNascimento;
}

export const PI = 3.14159;

//Exportandod uma função como padrão (default export)
export default function despedir(nome){
    return `Tchau, ${nome}! Até a próxima!`;
}