// test-logger.js - Arquivo para testar nosso logger
//ATENÇÃO: Este arquivo deve estar na MESMA PASTA  que o loger

//LINHA 1: IMPORTA NOSSA CLASSSE LOGGER D ARQUIVO LOGGER.JS
//O './' significa "na mesma pasta qu este arquivo"
const Logger = require('./logger');

//LINHA 2: FUNÇÃO QUE VAI TESTAR NO LOGGER
//'async' significa que está função pode "esperar" outras operações
async function testarLogger(){
    console.log(' 🚀 Iniciando teste do Logger...');

    //LINHA 3: CRIA UM NOVO LOGGER QUE VAI SALVAR NO ARQUIVO 'TESTE.LOG'
    const logger = new Logger('teste.log');

    //LINHA 4: TESTA DFERENTES TIPOS DE MENSAGEM
    //Cada linha vai aparecer n console E ser salva no ARQUIVO
    //IMPORTANTE: Usamos await para esperar cada operação terminar
    await logger.info('Aplicação iniciada com sucesso!');
    await logger.warn('Está é uma mensagem de aviso');
    await logger.error('Simulando um erro de teste');

    console.log('✅ Teste concluído! Verifique o arquivo teste.log');
}

//LINHA 5: EXECUTA NOSSA FUNÇÃO DE TESTE
testarLogger();