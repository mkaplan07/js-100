// 1
function sum(a, b) {
  return Number(a) + Number(b);
}
console.log(sum(22, 10)); // 32
console.log(`implicit coercion: ${sum('3', '4')}`); // 7
// Need Number(), bc if one operaand is a string, + used for concatenation

// 2
function eichQuote() {
  console.log('Always bet on JavaScript.');
}
eichQuote(); // no return statement, returns undefined

// 3
function cite(author, quote) {
  console.log(`${author} said: "${quote}"`);
}
console.log(cite('Armstrong', 'One small step for man...'));

// 4
function squaredNumber(n) {
  return n * n; // or return n ** 2;
}
console.log(squaredNumber(3));

// 5
function multiplesOfThree() {
  let divisor = 1;
  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(`${dividend} / ${divisor} = 3`);
    divisor += 1;
  }
}
multiplesOfThree(); // '3 / 1 = 3', '6 / 2 = 3', '9 / 3 = 3'... '30 / 10 = 3'

// 6
function lengths(str1, str2) {
  if (str1.length > str2.length) {
    return 1;
  } else if (str2.length > str1.length) {
    return -1;
  } else {
    return 0;
  }
}
console.log(lengths('patience', 'perseverance')); // -1
console.log(lengths('strength', 'dignity')); // 1
console.log(lengths('humor', 'grace')); // 0

// 7
console.log('Captain Ruby'.replace(/Ruby/, 'Javascript')); // .replace('Ruby', 'Javascript');
console.log('Captain Ruby'.split(' ')[0] + ' Javascript');
console.log('Captain Ruby'.substr(0, 8) + 'Javascript'); // (start, length) – not 0-indexed

// 8
function greet(lang) {
  switch (lang) {
    case 'en': return 'Hi!'; // return stops execution, no need for break;
    case 'fr': return 'Salut!';
    case 'pt': return 'Hola!';
    default: return 'default greeting';
  }
}
console.log(greet('en'), greet('fr'), greet('sv'));

// 9
function extractLanguage(locale) {
  return locale.slice(0, 2);
  // return locale.split('_')[0]; // solution
}
console.log(extractLanguage('ko_KR.UTF-16'));

// 10
function extractRegion(locale) {
  // return locale.slice(3, 5); // start idx, end idx (exclusive)
  return locale.split('.')[0].split('_')[1]; // ['en_GB'] then ['GB']
}
console.log(extractRegion('en_GB.UTF-8'));

// 11
function localGreet(locale) {
  let region = locale.split('.')[0];
  switch (region) {
    case 'en_US': return 'Hey';
    case 'en_GB': return 'Hello!';
    case 'en_AU': return 'Howdy!';
    case 'fr_FR':
    case 'fr_CA':
    case 'fr_MA': return 'Salut!';
    default: return 'default greeting';
  }
}
let regiones = ['en_US.UTF-8', 'en_GB.UTF-8', 'en_AU.UTF-8',
  'fr_FR.UTF-8', 'fr_CA.UTF-8', 'fr_MA.UTF-8', 'ko_KR.UTF-16'];
  // ingles 1-3, 'Salut!' * 3, 'default greeting'
regiones.forEach(reg => console.log(localGreet(reg)));
