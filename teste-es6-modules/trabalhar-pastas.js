// Função para criar uma pasta
import {promises as fs} from 'fs'

async function criarPasta (nomePasta) {
   try {
     console.log(`📁Criando pasta "${nomePasta}"...`);
    
     // Criar a pasta
     await fs.mkdir(nomePasta);

     console.log(`✅Pasta "${nomePasta}" criada com sucesso!`);

    } catch (error) {
       if (error.code === 'EXIST') {
         console.log(`⚠️ A pasta "${nomePasta}" já existe.`);
         } else {
         console.error('❌ Erro ao criar pasta:', error.message);
        }
    }
}
// Função para listar arquivos de uma pasta
async function listarArquivos (nomePasta) {
try {
console.log(`Listando arquivos da pasta "${nomePasta}":`);

// Ler conteúdo da pasta
const arquivos = await fs.readdir (nomePasta);

if (arquivos.length === 0) {
     console.log(' (pasta vazia)');
} else {
arquivos.forEach((arquivo, index) => {
    console.log(`    ${index + 1}. ${arquivo}`);
});
}

} catch (error){
    console.error(`❌ Erro ao listar pasta "${nomePasta}":`, error.message);
}
}

async function exemploComPastas(){
    console.log('=== TRABALHANDO COM PASTAS ===\n');

    await criarPasta('minha-pasta-teste');
    console.log('');

    await listarArquivos('.');
    console.log('');

    await listarArquivos('minha-pasta-teste');

    console.log('\n=== EXEMPLO CONCLUÍDO ===');
}

exemploComPastas();
    
