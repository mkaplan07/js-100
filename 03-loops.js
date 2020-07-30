// 1 Loop and Log
let i;
for (i = 0; i <= 10; i += 2) {
  console.log(i); // 0, 2, 4, 6, 8, 10
}
console.log(`first condition that evaluates false: ${i}`) // 12

// 2 Countdown
for (let i = 10; i >= 0; i -= 1) {
  if (i === 0) {
    console.log('Launch missiles!');
  } else {
    console.log(i);
  }
}

// 3 Triple Greeting
let greeting = 'Aloha!';
for (let i = 0; i < 3; i += 1) {
  console.log(greeting);
}
let j = 0;
while (j < 3) {
  console.log(`while: ${greeting}`);
  j += 1;
}

// 4 Take Two
for (let i = 1; i <= 100; i += 1) {
  console.log(i * 2);
}

// 5 Looping over Array Elements
let five = [1, 2, 3, 4];
let index = 0;
while (index < five.length) {
  console.log(five[index]);
  index += 1;
}
console.log(`first condition that evaluates false: ${index}`); // 4

// 6 Continue
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) continue; // null has no length property
  console.log(`${cities[i]}: ${cities[i].length}`);
}
// cities.filter(el => typeof el === 'string');

// 7 And on and on and on
for (let i = 0; i < 3; i += 1) {
  console.log('and on');
  // break; // another way to terminate the loop – would log one 'and on'
}

// 8 That's Odd
let y = 1;
while (y <= 40) {
  if (y % 2 === 1) { // odd
    console.log(y);
  }
  y += 1;
}

// 9 Finding Nemo
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
for (let i = 0; i < fish.length; i += 1) {
  console.log(fish[i]);
  if (fish[i] === 'Nemo') break;
}
