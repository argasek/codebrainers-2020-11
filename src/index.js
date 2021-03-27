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

const numberOfQuestions = 10;
let numberOfCorrectAnswers = 0;
const min = 1;
const max = 10;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < numberOfQuestions; i++) {
    const multiplicand = getRandomNumber(min, max);
    const multiplier = getRandomNumber(min, max);
    const result = multiplicand * multiplier;
    const answer = prompt('What is the result of multiplication ' + (multiplicand) + ' * ' + (multiplier));
    if (result === parseInt(answer)) {
        numberOfCorrectAnswers++;
    }
}
const endResult = numberOfCorrectAnswers / numberOfQuestions * 100;
console.log('Your result is ' + (endResult) + '%');
