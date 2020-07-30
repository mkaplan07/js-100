// 1
function greet(salut = 'Hello') {
  console.log(salut + ', world!');
}
console.log(greet()); // Hello, world!
console.log(greet('Hi')); // Hi, world!

// 2
function greet2(salut = 'Hello', obj = 'world') {
  console.log(`${salut}, ${obj}!`);
}
console.log(greet2()); // Hello, world!
console.log(greet2('Salutations')); // Salutations, world!
console.log(greet2('Good morning', 'Launch School')); // Good morning, Launch School

// 3
function greeting() {
  return 'Good morning';
}
function recipient() {
  return 'Launch School';
}
function greet3() {
  console.log(`greet3: ${greeting()}, ${recipient()}!`)
}
greet3();

// 4
function bmiCalc(weight, height) {
  let meters = height / 100;
  return (weight / meters**2).toFixed(2);
}
console.log('80kg / 180cm is:', bmiCalc(80, 180));

// 5
function catAge(humanAge) {
  let catYears = 0;
  while (humanAge > 0) {
    if (humanAge === 2) {
      catYears += 9;
    } else if (humanAge === 1) {
      catYears += 15;
    } else {
      catYears += 4;
    }
    humanAge -= 1;
  }
  return catYears;
}
let ages = [4, 3, 2, 1, 0];
ages.forEach(el => console.log(`${el} human years = ${catAge(el)} cat years.`)); // 32, 28, 24, 15, 0

// function catAge(humanAge) {
//   switch (humanAge) {
//     case 0:
//       return 0;
//     case 1:
//       return 15;
//     case 2:
//       return 24;
//     default:
//       return 24 + ((humanAge - 2) * 4);
//   }
// }

// 6
function chopper(str) {
  return str.slice(0, -1);
  // return str.substring(0, str.length - 1);
}
console.log(chopper('hello'));
console.log(chopper('ciao!'));

// 7
const template = 'I VERB NOUN';
let sentence = (verb, noun) => template // fn expression – var name ID
  .replace('VERB', verb)
  .replace('NOUN', noun); // 1 expression over multiple lines

console.log(sentence('like', 'birds'));

// 8
let initGame = () => ({level: 1, score: 0});
// to return an object literal, need parens – see Returning object literals
let game = initGame();
console.log('Level: ' + game.level);
console.log('Score: ' + game.score);
