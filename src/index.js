// const age = prompt('What is your age?');

// const dividend = prompt('What is your dividend?');
// const divider = prompt('What is yor divider?');
//
// if (isNaN(dividend % divider)) {
//     console.log('You can not divide by 0');
// } else {
//     console.log('The rest of division is ' + (dividend % divider));
// }

// const parsedAge = parseInt(age);
// console.log(isNaN(parsedAge) ? 'Parsed age is not a number' : 'In 25 years you will be ' + (parseInt(age) + 25) + ' years old');
// if (isNaN(parsedAge)) {
//     console.log('Parsed age is not a number');
// } else {
//     console.log('In 25 years you will be ' + (parseInt(age) + 25) + ' years old');
// }

// function getHello(country) {
//     switch (country) {
//         case 'Poland':
//             return 'Cześć!';
//         case 'England':
//         case 'Canada':
//             return 'Hello!';
//         case 'Spain':
//         case 'Mexico':
//             return 'Hola!';
//         default:
//             return 'Hello to the unsupported country';
//     }
// }
// const country = prompt('Where are you from?');
// console.log(getHello(country));

// for (let i = 10; i > -1; i--) {
//     console.log(i);
// }
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i = i + 1;
// }
// do {
//     console.log(i);
//     i = i + 1;
// } while (i < 10);
//
// console.log(Math.floor(Math.PI));
// console.log(Math.ceil(Math.PI));
// console.log(Math.round(Math.PI));

// TABLICZKA MNOŻENIA - gra
//
// const numberOfQuestions = 10;
// let numberOfCorrectAnswers = 0;
// const minRange = 1;
// const maxRange = 10;
// const passRate = 60;
// const history = [];
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// for (let i = 0; i < numberOfQuestions; i++) {
//     const multiplicand = getRandomNumber(minRange, maxRange);
//     const multiplier = getRandomNumber(minRange, maxRange);
//     const result = multiplicand * multiplier;
//     const answer = prompt(`What is the result of multiplication ${multiplicand} * ${multiplier}?`);
//     if (result === parseInt(answer)) {
//         numberOfCorrectAnswers++;
//     }
//     history.push([multiplicand, multiplier, result, answer, result === parseInt(answer)]);
// }
//
// const endResult = numberOfCorrectAnswers / numberOfQuestions * 100;
//
// const isPassed = endResult >= passRate;
// console.log(`Your result is ${endResult} % ${isPassed ? 'Passed' : 'Failed'}`);
// console.log(history);

//const arr = [2,4,7,9,];
//console.log(arr.length);
//console.log(arr);

// ZADANIE DOMOWE
// Napisz funkcję, która przyjmuje string jako argument, a zwraca odwrócony string
// // Wykorzystaj metody związane ze Stringiem: String.split(???) oraz String.join(???) oraz Array – dokumentacja MDN
// // Dla chętnych: odwrócenie stringa przy pomocy pętli `for`.
//  function reverseString(str){
//     let reversedString = '';
//     for (let i = str.length - 1; i > -1; i--) {
//         reversedString = reversedString + str[i];
//     }
//     return reversedString;
//  }
//  console.log(reverseString('Why would you do this?'));

// for(let i = 0; i < 11; i = i+2) {
//     console.log(i);
// }

// for(let i = 100; i > -1; i = i - 5) {
//     console.log(i);
// }
//
// for(let i = 1; i < 20; i++) {
//     console.log(i * i)
// }
//
//
// const arr = [1, 2, 'd', 3, 'b', 4, 8];
// let val1 = arr.indexOf('d');
// let val2 = arr.indexOf('f');
// console.log(val1, val2);
//
// console.log(arr.splice(val1));
// console.log(arr);
//
// function sortNumbers(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// }
// const arr = [15, 2, 6, 3, 9, 44, 8, 77];
// console.log(arr.sort(sortNumbers));
//
//const arr1 = [13, 8, 9, 11, 7, 15];
//const arr2 = arr1.slice(1, 5);
//arr2.splice(1, 1);
//console.log(arr1);
//console.log(arr2);



//const arr = ['BMW', 'Wrocław', 'Białystok', 'banan', 'Mikołaj', 'jabłko', 'Baran']
//console.log(arr.sort());
//function sortNames(a, b) {
//     if (a.toLowerCase() > b.toLowerCase()) return 1;
//     if (a.toLowerCase() < b.toLowerCase()) return -1;
//     return 0;
// }
//
//console.log(arr.sort(sortNames));

//function consoleLogEachValue(element) {
//    console.log(element);
//}

//array.forEach(consoleLogEachValue);
//function upperCaseEachWord(word) {
//    return word.toUpperCase();
//}
//console.log(arr.map(upperCaseEachWord));

//array.filter(funkcja filtrująca)

//function filterBMW(word) {
//    return word !== 'BMW'
//}
//console.log(arr.filter(filterBMW));
//
//console.log(arr.includes('sląsk'));
//console.log(arr.includes('banan'));


ler arr = [1,>= 49]

const result = [min, max];
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
function lotto(myNumbers) {
    const minLottoNumber = 1;
    const maxLottoNumber = 49;
    const arrayOfNumbers = [];
    let isWinningDraw = false;
    let amountOfDraws = 0;

    for (let i = minLottoNumber; i <= maxLottoNumber; i++) {
        arrayOfNumbers.push(i);
    }

    while (isWinningDraw === false) {
        amountOfDraws = amountOfDraws + 1;
        const numbersToDraw = arrayOfNumbers.slice();
        const drawedNumbers = [];

        while (drawedNumbers.length !== 6) {
            const number = getRandomNumber(minLottoNumber, maxLottoNumber);
            const indexOfNumbers = arrayOfNumbers.indexOf(number);

            if (indexOfNumbers > -1) {
                drawedNumbers.push(number);
                numbersToDraw.splice(indexOfNumbers, 1);
            }
        }

        let isCurrentDrawWinning = true;
        for (let i = 0; i < myNumbers.length; i++) {
            if (drawedNumbers.indexOf(myNumbers[i]) === -1) {
                isCurrentDrawWinning = false;
                break;
            }
        }

        if (isCurrentDrawWinning) {
           isWinningDraw === true;
        }
    }

}
console.log ('the hour of the draw');
console.log ('draw number where the win is');





