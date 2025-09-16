import {promises as fs} from 'fs'

async function verificarArquivo(nomeArquivo){
    try{
        console.log(`🔍 Verificando se "${nomeArquivo}"e existe...`);

        await fs.access(nomeArquivo);

        console.log('✅ O Arquivo "${nomeArquivo}" existe!');
        return true;
       
    }catch (error){
        console.error(`❌ O arquivo "{nomeArquivo}" NÃO existe.`);
        return false;
    }
}

async function testarArquivos(){
    console.log('=== VERIFICANDO ARQUIVOS ===\n');

    const arquivos = [
        'dados.txt',
        'arquivo-criado.txt',
        'aruivo-inexistente.txt',
        'package.json'
    ];

    for (const arquivo of arquivos){
        await verificarArquivo(arquivo);
        console.log('');
    }

    console.log('==VERIFICAÇÃO CONCLUÍDA ===');
}

testarArquivos();

//EXEMPLO MAIS AVANÇADO: VERIFICAR E CRIAR SE NÃO EXISTIR
async function garantirArquivo(nomeArquivo, conteudoPadrao) {
    const existe = await verificarArquivo(nomeArquivo);

    if (!existe){
        console.log(`📝 Criando arquivo "${nomeArquivo}" com conteudo padrão...`);
        await fs.writeFile(nomeArquivo, conteudoPadrao, 'utf8');
        console.log(`✅ Arquivo "${nomeArquivo}" criado!`);
    }
}

async function exemploAvançado(){
      await garantirArquivo('config.txt', 'configuracao=padrao\nversao=1.0');
}
    
