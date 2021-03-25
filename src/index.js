const age = prompt('What is your age?');
const parsedAge = parseInt(age);
console.log(parsedAge);
if ( isNaN(parsedAge)){
    console.log('ParsedAge is not a number');
}
console.log('In 25 years you will be ' + (parseInt(age) + 25) + ' years old');

