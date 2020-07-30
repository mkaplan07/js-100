// 1
function first(arr) {
  return arr[0];
}
console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
console.log(first([])); // undefined

// 2
function last(arr) {
  return arr[arr.length - 1];
}
console.log(last(['Earth', 'Moon', 'Mars'])); // 'Mars'

// 3
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
console.log(energy.shift(), energy.push('geothermal')); // 'fossil' 5

// 4
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
console.log(alphabet.split('')); // Array.length === 26

function doubler(a, b, c) {
  return Array.from((arguments), el => el * 2);
}
console.log(doubler('foo', 2, 3)); // [NaN, 4, 6]

// 5
let scores = [96, 47, 113, 89, 100, 102];
let highs = scores.filter(el => el > 99); // returns new array
console.log(`There were ${highs.length} scores > 99: ${highs[0]}, ${highs[1]}, and ${highs[2]}.`);

// 6
let vocab = [['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']];

// vocab.forEach(function(inner) {
//   inner.forEach(el => console.log(el));
// });

for (let i = 0; i < vocab.length; i += 1) {
  for (let j = 0; j < vocab[i].length; j += 1) {
    console.log(vocab[i][j]);
  }
}

// 8
function filter(input) {
  return Array.isArray(input);
}
console.log(doubler('foo', 2, 3), filter(doubler('foo', 2, 3))); // true
console.log(filter(['ab', 'can', 'def'])); // true
console.log(filter('str')); // false

// 9
let dest = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City']

// function contains(str, arr) {
//   return RegExp(str).test(arr);
// }
/*
vs. return arr.indexOf(str) > -1; and the for loop (below),
this one returns true for partial matches:
'York' // true (though 'Y' is also true...)

It can also handle nested arrays:
let names = ['Charlie', 'Parker', ['Bird']];
('Bird', names) // true

.indexOf, the for loop, and .includes() all use ===
Arrays are only === if they reference the same place in memory
'ab' === ['ab'] // false
/ab/.test(['ab']) // true
*/

function contains(str, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === str) {
      return true;
    }
  }
  return false;
}
console.log('Barcelona', contains('Barcelona', dest)); // true
console.log('Nashville', contains('Nashville', dest)); // false

// 10
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
console.log(passcode.join('-'));

// 11
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
function chekov(arr) {
  let len = arr.length; // bc length shrinks each iteration
  for (let i = 0; i < len; i += 1) {
    console.log(arr.shift());
  }
  console.log('What\'s left?', arr); // []
}
chekov(groceryList);

// solution: while loop, decrement w/ shift()
groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
while (groceryList.length > 0) {
  console.log(groceryList.shift());
}
