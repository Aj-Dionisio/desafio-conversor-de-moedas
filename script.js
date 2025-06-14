const convertbutton = document.querySelector('#buttonConvert');
const currencySelectFrom = document.querySelector('#currencyFrom');
const currencySelectTo = document.querySelector('#currencyTo');
const currencyToConvert = document.querySelector('.currencyValueToConvert');
const currencyTextToConvert = document.querySelector('.currencyTextToConvert');
const currencyConverted = document.querySelector('.currencyValueConverted');
const currecyTextConverted = document.querySelector('.currencyTextConverted');
const imageToConvert = document.querySelector('#flagFrom');
const imageConverted = document.querySelector('#flagTo');


function convert() {
    const inputvalue = document.querySelector('.currencyinput').value;

    const realToday = 1.00 
    const dolarToday = 5.60 
    const euroToday = 6.33 
    const ieneToday = 0.038
    const RupiaToday = 0.065
    const LibraToday = 7.52
    const DollarCToday = 4.05 
 
    if (currencySelectTo.value === 'dolar') {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(inputvalue / dolarToday);
    }

    if (currencySelectTo.value === 'Euro') {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(inputvalue / euroToday);
    }

    if (currencySelectTo.value === 'Iene') {
        currencyConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: 'currency',
            currency: 'JPY',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(inputvalue / ieneToday);
    }

    if (currencySelectTo.value === 'Rupia') {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-IN", {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(inputvalue / RupiaToday);
    }

    if (currencySelectTo.value === 'libra') {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(inputvalue / LibraToday);
    }

    if (currencySelectTo.value === 'Dolar Canadence') {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: 'currency',
            currency: 'CAD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(inputvalue / DollarCToday);
    }

    if (currencySelectTo.value === 'real') {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(inputvalue / realToday);
    }

    //  formatando os valores das moedas
    if (currencySelectFrom.value === 'real') {
        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(inputvalue);
    }

    if (currencySelectFrom.value === 'Dolar Canadence') {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: 'currency',
            currency: 'CAD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(inputvalue);
    }

    if (currencySelectFrom.value === 'libra') {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(inputvalue);
    }

    if (currencySelectFrom.value === 'dolar') {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(inputvalue);
    }

    if (currencySelectFrom.value === 'Euro') {
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(inputvalue);
    }

    if (currencySelectFrom.value === 'Iene') {
        currencyToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: 'currency',
            currency: 'JPY',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(inputvalue);
    }

    if (currencySelectFrom.value === 'Rupia') {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(inputvalue);
    }

}

function change() {

    if (currencySelectFrom.value === 'dolar') {
        currencyTextToConvert.innerHTML = 'Dolar'
        imageToConvert.src = './assets/Dollar.png'
    }
    if (currencySelectFrom.value === 'real') {
        currencyTextToConvert.innerHTML = 'Real';
        imageToConvert.src = './assets/Real.png'
        
    }
    if (currencySelectFrom.value === 'Euro') {
        currencyTextToConvert.innerHTML = 'Euro';
        imageToConvert.src = './assets/Euro.png'
         
    }
    if (currencySelectFrom.value === 'Iene') {
        currencyTextToConvert.innerHTML = 'Iene';
    }
    if (currencySelectFrom.value === 'Rupia') {
        currencyTextToConvert.innerHTML = 'Rupia';
    }
    if (currencySelectFrom.value === 'libra') {
        currencyTextToConvert.innerHTML = 'Libra Esterlina';
    }
    if (currencySelectFrom.value === 'Dolar Canadence') {
        currencyTextToConvert.innerHTML = 'Dolar Canadence';
    }

    if (currencySelectTo.value === 'dolar') {
        currecyTextConverted.innerHTML = 'Dolar'; 
    }
    if (currencySelectTo.value === 'Euro') {
        currecyTextConverted.innerHTML = 'Euro'; 
    }
    if (currencySelectTo.value === 'real') {
        currecyTextConverted.innerHTML = 'Real'; 
    }
    if (currencySelectTo.value === 'Iene') {
        currecyTextConverted.innerHTML = 'Iene'; 
    }
    if (currencySelectTo.value === 'Rupia') {
        currecyTextConverted.innerHTML = 'Rupia'; 
    }
    if (currencySelectTo.value === 'libra') {
        currecyTextConverted.innerHTML = 'Libra Esterlina'; 
    }
    if (currencySelectTo.value === 'Dolar Canadence') {
        currecyTextConverted.innerHTML = 'Dolar Canadence'; 
    }


}


convertbutton.addEventListener('click', convert);

currencySelectFrom.addEventListener('change', change);
currencySelectTo.addEventListener('change', change);

