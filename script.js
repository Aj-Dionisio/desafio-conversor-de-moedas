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
//1.4.1 - mapear o input - está mapeado mas não apresenta o valor do input

// 2 - PEGAR O VALOR DO INPUT
//     2.1 - COLOCAR VARIAVEIS NAS MOEDAS
//     2.2 - VARIALVEL PARA A CONTA DE CONVERSÃO (VALOR INSERIDO/ VALOR DA MOEDA)
//     2.3 - APRESENTAR O RESULTADO DA CONTA


const convertbutton = document.querySelector('#buttonConvert');
const currencySelectFrom= document .querySelector ('#currencyFrom');
const currencySelectTo= document .querySelector ('#currencyTo');
const currencyToConvert = document.querySelector('.currencyValueToConvert');
const currencyTextToConvert = document.querySelector('.currencyTextToConvert');
const currencyConverted = document.querySelector('.currencyValueConverted')
const currecyTextConverted = document.querySelector('.currencyTextConverted')


function convert() {
    const inputvalue = document.querySelector('.currencyinput').value;

    console.log(currencySelectTo.value);



    const dolarToday = 5.60 // na data de 05/06
    const euroToday = 6.33 // 09/06
    const ieneToday = 0.038// 09/06
    const RupiaToday = 0.065//09/06
    const LibraToday = 7.52//09/06
    const FrancobelgaToday = 0.15737// 09/06
    const DollarCToday = 4.05 //09/06
    // console.log(currencySelect).value;
    // const result = inputvalue / dolarToday;
    // console.log(result);
//mapeando quando o tipo de moeda é selecionada e ulizando o if para quando ocorrer as atividades

if (currencySelectTo.value === 'dolar'){
    currencyConverted.innerHTML = new Intl.NumberFormat("en-us", {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(inputvalue / dolarToday);
}

if (currencySelectTo.value === 'Euro'){
    currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(inputvalue / euroToday);
}


//  formatando os valores das moedas
    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(inputvalue);

    




}

convertbutton.addEventListener('click', convert);

