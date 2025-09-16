// loger.js - SISTEMA DE LOGER PARA NOSSA APLICAÇÃO
//Este arquivo cria uma "classe"  que sabe como salvar mensagens em arquivos

// 1. IMPORTAÇÕES - Trazendo as ferramentas que vamos usar
const fs = require('fs').promises; //SISTEMA DE ARQUIVOS (jeito moderno que não trava)
const path = require('path'); // MANIPULAÇÃO DE CAMINHOS

// 2. CLASSE LOGGER - Nossa "fábrica" de logs
class Logger {
//CONSTRUTOR - Executa quando criamos um novo Logger
    constructor(logFile = 'app.log'){
        //__dirname = pasta atual do arquivo
        // path.join = junta caminhos de forma segura
        this.logFile = path.join(__dirname, logFile);
        console.log(`📝 Logger criado! Arquivo: ${this.logFile}`);
    }

    //MÉTODO PRINCIPAL - Escreva qualquer tipo de log
    async log(message, level = 'INFO'){
//Cria um "carimbo de data e hora" (tipo 2024-01-15 ás 10:30:45)
        const timestamp = new Date().toISOString(); //Pega a data/hora atual e transforma em texto
//Monta a linha do log: [DATA] NÍVEL: MENSAGEM
        const logEntry = `[${timestamp}] ${level}: ${message}\n`;

        try{
        // appendFile = "cola" n final do arquivo (como escrever no final de um caderno)
            await fs.appendFile(this.logFile, logEntry);
            console.log(`✅ Log salvo: ${level} - ${message}`);
        } catch (error) {
            console.error('❌ Erro ao escrever log:', error.message);
        }
    }

    //MÉTODO DE CONVENIÊNCIA - Para logs informativos
    async info(message){
        await this.log(message, 'INFO');
    }

    //MÉTODO DE CONVENIÊNCIA - Para logs de erro
    async error(message){
        await this.log(message, 'ERROR');
    }
    //MÉODO EXTRA - Para logs de aviso
    async warn(message){
        await this.log(message, 'WARN');
    }
}

//EXPORTA a classe para outros arquivos usarem
module.exports = Logger;