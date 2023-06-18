//6k
let cartQuantity = 0;

//6a
let hour = 19; //6b
const name = 'Entoma';

if (hour >= 6 && hour <= 12) {
  console.log(`Good morning! ${name}!`); //6c
} else if (hour >= 13 && hour <= 17) {
  console.log(`Good afternoon ${name}!`);
} else {
  console.log(`Good evening/night ${name}!`);
}

//6d
const age = 5;
//6e
const isHoliday = true;

if ((age <= 6 || age > 65) && !isHoliday) {
  console.log('Discount');
} else {
  console.log('Now discount');
}

//6h
const math = Math.random();
let guess = '';
if (math <= 0.5) {
  console.log('Heads');
  guess = 'Heads';
} else {
  console.log('tails');
  guess = 'Tails';
}

//6i
const myMove = 'Tails';
if (guess === myMove) {
  console.log('You win!');
} else if (guess !== myMove) {
  console.log('You lose!');
}

//6j
myMove ? console.log('You win!') : console.log('You lose!');
