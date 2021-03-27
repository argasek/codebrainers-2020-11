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
const numberOfQuestions = 10;
let numberOfCorrectAnswers = 0;
const minRange = 1;
const maxRange = 10;
const passRate = 60;
const history = [];
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < numberOfQuestions; i++) {
    const multiplicand = getRandomNumber(minRange, maxRange);
    const multiplier = getRandomNumber(minRange, maxRange);
    const result = multiplicand * multiplier;
    const answer = prompt(`What is the result of multiplication ${multiplicand} * ${multiplier}?`);
    if (result === parseInt(answer)) {
        numberOfCorrectAnswers++;
    }
    history.push([multiplicand, multiplier, result, answer, result === parseInt(answer)]);
}

const endResult = numberOfCorrectAnswers / numberOfQuestions * 100;

const isPassed = endResult >= passRate;
console.log(`Your result is ${endResult} % ${isPassed ? 'Passed' : 'Failed'}`);
console.log(history);

//const arr = [2,4,7,9,];
//console.log(arr.length);
//console.log(arr);

// ZADANIE DOMOWE
// Napisz funkcję, która przyjmuje string jako argument, a zwraca odwrócony string
// Wykorzystaj metody związane ze Stringiem: String.split(???) oraz String.join(???) oraz Array – dokumentacja MDN
// Dla chętnych: odwrócenie stringa przy pomocy pętli `for`.
