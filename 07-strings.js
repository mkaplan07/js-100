// 3
function repeat(n, str) {
  let result = str; // ('' += val) only works from a variable – can't '' += 'ha';

  while (n > 0) {
    result += str;
    n -= 1;
  }

  return result;
}
console.log(`0: ${repeat(0, 'ha')}`); // 'ha' – zero repeat
console.log(`1: ${repeat(1, 'ha')}`); // 'haha' – 1 repeat
console.log(`3: ${repeat(3, 'ha')}`); // 'hahahaha' – 2 repeats

// 4
let pirateString = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'
console.log(pirateString);

// 5
function equalizer(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(equalizer('Polar Bear', 'Polar bear')); // true
console.log(equalizer('Polar Bear', 'Penguin')); // false

// 6
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
function charCheck(str, char) {
  return `"${str}" ${str.includes(char) ? 'includes' : 'does not include'} "${char}"`;
}
console.log(charCheck(byteSequence, 'x')); // includes
console.log(charCheck(byteSequence, 'qux')); // does not include

// 7
function checkEmpty(str) {
  return str === ''; // str.length === 0
}
console.log(checkEmpty('mars')); // false
console.log(checkEmpty(' ')); // false
console.log(checkEmpty('')); // true

// 8
function noSpace(str) {
  return !/\S/.test(str); // testing for a non-whitespace character, flip false
  // return str.trim().length === 0;
}
console.log(`There's a non-whitespace character. Return ${noSpace('mars')}.`); // false
console.log(noSpace(' ')); // true
console.log(noSpace('')); // true

// 9
function capper(str) {
  let words = str.split(' ');
  return words.reduce((acc, el) => {
    acc.push(el[0].toUpperCase() + el.slice(1));
    return acc; // can't be a one-liner bc > 1 statement/exp
  }, []).join(' ');
}
console.log(capper('launch school tech & talk'));
