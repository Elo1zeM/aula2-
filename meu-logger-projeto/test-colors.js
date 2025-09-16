//teste-cores.js - Testeando o pacote 'colors'

//IMPORTA o pacote que acabamos de instalar
const colors = require('colors');

//FUNÇÂO PRINCIPAL - Testa diferentes cores
function testarCores(){
    console.log('🎨 Testando o pacote Colors!');
    console.log(''); //Linha em branco

    //Textos coloridos básicos
    console.log('Este texto é verde!'.green);
     console.log('Este texto é vermelho!'.red);
      console.log('Este texto é azul!'.blue);
       console.log('Este texto é amarelo!'.yellow);
        console.log('Este texto é magenta!'.magenta);
         console.log('Este texto é ciano!'.cyan);

    console.log(''); //Linha em branco

    //Textos com estilos
    console.log('Este texto está em negrito!'.bold);
    console.log('Este texto está sublinhado!'.underline);
    console.log('Este texto está invertido!'.inverse);

     console.log('');

     //Combinando cores e estilos
    console.log('Este texto é vermelho e negrito!'.red.bold);
    console.log('Este texto é azul e sublinhado!'.blue.underline);
    console.log('Texto vermelho invertido!'.red.inverse);

      console.log('');

    //Usando cores de fundo
          console.log('Texto com fundo vermelho!'.bgRed);
          console.log('Texto com fundo azul!'.bgGreen);
          console.log('Texto branco com fundo azul!'.white.bgBlue);

             console.log('');
              console.log('🎉 Teste concluído! Seu terminal agora tem cores!'.rainbow);
        }

    //EXECUTA A FUNÇÃO
    testarCores();