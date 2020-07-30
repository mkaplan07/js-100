// 1
// five falsy values: 0, '', null, undefined, NaN

// 2 Yes? No? Part 1
let randomNumber = Math.round(Math.random()); // 0 or 1
if (randomNumber) {
  console.log(`${randomNumber} – Yes!`);
} else {
  console.log(`${randomNumber} – No!`);
}

// 3 Yes? No? Part 2 (ternary operator)
let random2 = Math.round(Math.random()); // for different results
// random2 ? console.log(`${random2} – Yes!`) : console.log(`${random2} – No!`)
console.log(random2 ? `${random2} – Yes!` : `${random2} – No!`);

// 4 Check the Weather, Part 1
let rlSync = require('readline-sync');
let weather = rlSync.question('How\'s it gonna be?\n');
if (weather === 'sunny') {
  console.log('It\'s a beautiful day!');
} else if (weather === 'rainy'){
  console.log('Grab your umbrella.')
} else {
  console.log('Let\'s stay inside.')
}

// 6 Check the Weather, Part 2
weather = rlSync.question('How\'s it look out there?\n'); // re-assign weather
switch (weather) {
  case 'sunny':
    console.log('It\'s a beautiful day!');
    break;
  case 'rainy':
    console.log('Grab your umbrella.');
    break;
  default:
    console.log('Let\'s stay inside.');
}
