// 📁 ler-aquivo.js
// 🤖 PASSO 1:  Chama o robô que sabe ler arquivos
import { promises as fs } from 'fs'

// 🤖 PASSO 2: Ensina o robô como ler arquivos
async function lerMeuArquivo(){
    try{
        console.log('🤖 Robô: "Vou tentar ler o arquivo dados.txt..."');

        //🤖 PASSO 3: Robô lê o arquivo(utf8 = "leia como texto normal")
        const conteudo = await fs.readFile('dados.txt', 'utf8');

        console.log('✅ Robô: "Consegui ler! Aqui está:"');
        console.log('📝 Conteúdo que o robô encontrou:');
        console.log('-'.repeat(30));
        console.log(conteudo);
        console.log('-'.repeat(30));
    }catch (error){
        if(error.code === 'ENOENT'){
            console.log('🤖 Robô: "O arquivo deados.txt não existe!"');
            console.log('💡 Dica: Crie o arquivo na mesma pasta que este código.');
        }
    }
}

lerMeuArquivo();