// Окно для ввода
let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

// Заново
document.getElementById('btnRetry').addEventListener('click', function () {
        answerField.innerText = alert('Давай еще раз?');
        minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
        maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

// 
        minValue = (minValue < '-999') ? -999 : minValue;
        maxValue = (maxValue > '999') ? 999 : maxValue;

        if (isNaN(minValue)){
            minValue = -999;
            console.log(minValue);
        } 
        if (isNaN(maxValue)){
            maxValue = 999;
            console.log(maxValue);
        }

        answerNumber  = Math.floor((minValue + maxValue) / 2);
        answerField.innerText = `Вы загадали число ${answerNumber }?`
        orderNumber = '0';
        orderNumberField.innerText = orderNumber;
        gameRun = true;
    })
    // смотреть ошибку в заново и вводе nswerNumber orderNumber


// Больше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Что то пошло не так!\n\u{1F631}` ;
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        } 
    }
})


// Меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Что то пошло не так!\n\u{1F631}` ;
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber ;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        } 
    }
})

// Верно
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random());
        const answerPhrase = (phraseRandom === 1) ?
        `ТЫ молодец!\n\u{1F60D}` :
        `Победа!\n\u{1F911}` ;
        `УРАААА ТЫ КРУТ!\n\u{1F60E}`;
        answerField.innerText = answerPhrase;
        
        gameRun = false;
        orderNumber = '0';
        orderNumberField.innerText = orderNumber;
    }
})

// Запись в текст
function numberToLetters(num){
    
    const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
    const teens = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяноста'];
    const ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
   
    if (num < -999 || num > 999) {
        return "Число находится за пределами диапазона от -999 до 999";
    }

    if (num === 0) {
        return 'ноль';
    }

    let result = '';

    if (num < 0) {
        result += negative;
        num = Math.abs(num);
    }

    const onesDigit = num % 10;
    const tensDigit = Math.floor((num % 100) / 10);
    const hundredsDigit = Math.floor(num / 100);

    if (hundredsDigit > 0) {
        result += hundreds[hundredsDigit] + ' ';
    }

    if (tensDigit > 1) {
        result += tens[tensDigit] + ' ';
        if (onesDigit > 0) {
            result += ones[onesDigit];
        }
    } else if (tensDigit === 1) {
        result += teens[onesDigit];
    } else {
        if (onesDigit > 0) {
            result += ones[onesDigit];
        }
    }

    return result;
}

const number = '';
const numberInWords = numberToLetters(number);
console.log(numberInWords);

// function numberToLetters(Number){
    
//     const sign = Number < 0 ? "минус " : "";
//     const absoluteNumber = Math.abs(Number);
//     const a = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
//     const b = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяноста'];
//     const c = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

//     function extractDigit(Number, position) {
//         return Math.floor((Number % Math.pow(10, position + 1)) / Math.pow(10, position));
//     }

//     function replaceDigit(digit, position) {
//         if (position === 0) {
//             return a[digit];
//         } else if (position === 1) {
//             return b[digit];
//         } else if (position === 2) {
//             return c[digit];
//         }
//     }

//     let result = "";
//     if (absoluteNumber === 0) {
//         return "ноль";
//     }
//     for (let i = 0; i < 3; i++) {
//         const digit = extractDigit(absoluteNumber, i);
//         const replacedDigit = replaceDigit(digit, i);
//         if (replacedDigit !== '') {
//             result = replacedDigit + " " + result;
//         }
//     }

//     return sign + result.trim();
// }
// const Number = ""
// const result = numberToLetters(parseInt(Number));
// console.log(result);


