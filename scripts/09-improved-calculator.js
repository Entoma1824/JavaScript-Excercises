//8a
const product = {
  name: 'basketball',
  priceInCents: 2095,
};

//8b
product.priceInCents += 500;
console.log(product);

//8c
product['delivery-time'] = '3 days';
console.log(product);

//8d
const product1 = {
  name: 'Keyboard',
  priceInCents: 10000,
};
const product2 = {
  name: 'Mouse',
  priceInCents: 6000,
};
console.log(comparePrice(product2, product1));
function comparePrice(product1, product2) {
  const priceComparison = product1.priceInCents > product2.priceInCents;
  if (priceComparison) {
    return product2;
  } else {
    return product1;
  }
}
//8e
const product3 = {
  name: 'Keyboard',
  priceInCents: 10000,
};
console.log(isSameProduct(product1, product3));
function isSameProduct(product1, product2) {
  if (product1.name === product2.name && product1.price === product2.price) {
    return true;
  } else {
    return false;
  }
}

/* https://chat.openai.com/share/8b85a728-3be3-4097-98a5-6db73f345925 */ //8f

/* https://chat.openai.com/share/8b85a728-3be3-4097-98a5-6db73f345925 */ //8g


//8h
//I will finish this section later because I'm getting confused with the localStorage.

let calculation = localStorage.getItem('calculation') || '';
document.getElementById('result').value = calculation;



function appendToResult(value) {
  calculation += value;
  document.getElementById('result').value += value;
  localStorage.setItem('calculation', value)
  console.log(calculation);

}

function calculate() {
  const result = eval(document.getElementById('result').value);
  document.getElementById('result').value = result;
  // localStorage.getItem('calculation')
  localStorage.setItem('calculation', result)
  console.log(result);
}

function clearResult() {
  document.getElementById('result').value = '';
  localStorage.removeItem('calculation');
  console.log(calculation)
}

//8i and 8j
const scoreBoard = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
};


function playGame(playerGuess) {
  let guess = '';
  const math = Math.random();
  if (math <= 0.5) {
    guess = 'Heads';
    console.log(guess);
    if (guess === playerGuess) {
      document.querySelector('.score-board').innerHTML = `Wins:${scoreBoard.wins += 1} Losses: ${scoreBoard.losses}`;
    } else if (guess !== playerGuess) {
      document.querySelector('.score-board').innerHTML = `Wins:${scoreBoard.wins} Losses: ${scoreBoard.losses += 1}`;
    }
    return guess;
  } else {
    guess = 'Tails';
    console.log(guess);
    if (guess === playerGuess) {
      document.querySelector('.score-board').innerHTML = `Wins:${scoreBoard.wins += 1} Losses: ${scoreBoard.losses}`;
    } else if (guess !== playerGuess) {
      document.querySelector('.score-board').innerHTML = `Wins:${scoreBoard.wins} Losses: ${scoreBoard.losses += 1}`;
    }
    //8k
    localStorage.setItem('score', JSON.stringify(scoreBoard));

    return guess;
  }
}

// function status() {
//   if (guess === playerGuess) {
//     document.querySelector('.score-board').innerHTML = `Wins:${scoreBoard.wins += 1} Losses: ${scoreBoard.losses}`;
//   } else if (guess !== playerGuess) {
//     document.querySelector('.score-board').innerHTML = `Wins:${scoreBoard.wins} Losses: ${scoreBoard.losses += 1}`;
//   }
// }


