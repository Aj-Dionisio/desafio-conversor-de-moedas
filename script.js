// // // O QUE A APLICAÇÃO TEM QUE FAZER?
// // ITENS MACRO 
// // // A APLICAÇÃO PRECISA:
// // //1 - RECONHCER QUANDO O BOTÃO É CLICADO 
// // // 2 - AO SER CLICADO CHAMAR UMA FUNÇÃO
// // 3 A FUNÇÃO VAI PEGAR O VALOR DO INPUT
// // 4 FAZER UMA CONTA DE CONVERSÃO 
// // 5 APRESENTAR O RESULTADO SUBSTITUINDO A VALOR NA MOEDA CONVERTIDA

// // ITENS MICRO:
// 1 - RECONHCER QUE O BOTÃO FOI CLICADO
//     1.1 - MAPEAR O BOTÃO - ok
//     1.2 - CRIE UMA FUNÇÃO QUE IRA GERAR UM CONSOLE.LOG - ok
//     1.3 - COLOCAR UM addEventListener LIGADO A FUNÇÃO FEITA ANTERIORMENTE - ok
//     1.4 - PEGAR O VALOR DO INPUT ONDE O VALOR É INSERIDO, ISSO DENTRO DA FUNÇÃO SUBSTITUINDO O CONSOLE.LOG
    //1.4.1 - mapear o input

// 2 - PEGAR O VALOR DO INPUT
//     2.1 - COLOCAR VARIAVEIS NAS MOEDAS
//     2.2 - VARIALVEL PARA A CONTA DE CONVERSÃO (VALOR INSERIDO/ VALOR DA MOEDA)
//     2.3 - APRESENTAR O RESULTADO DA CONTA


const convertbutton = document.querySelector('#buttonConvert');
const inputvalue = document.querySelector('.currencyinput').value

function convert(){
    console.log(inputvalue);
}

convertbutton.addEventListener('click',convert);

//const convertbutton = document.querySelector('#buttonConvert');

// function convert() {
//     const inputvalue = document.querySelector('.currencyinput').value; // Get the value inside the function
//     console.log(inputvalue);
// }

// convertbutton.addEventListener('click', convert);