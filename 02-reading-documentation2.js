// 1 Style Guide
let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');

// 9 SyntaxError
let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  // needed () around the if statement
  console.log('quote');
}

// 10 TypeError
let tweet = 'Woohoo!';

if (tweet.length() > 140) { // TypeError: tweet.length is not a function
  console.log('Tweet is too long!'); 
}
