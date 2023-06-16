//5a and 5b
const name = 'Entoma';
console.log(`My name is: ${name}`);
//5c
const coffee = 5;
const bagels = 3;
const numberOfBagels = 2;
const soup = 9;
const cost = coffee + bagels * numberOfBagels + soup;
console.log(cost);
//5d
console.log(`Cost of food: $${cost}`);

//5e
const tax = cost * 0.1;
console.log(tax);

//5f
console.log(`Tax (10%): $${tax}`);

//5g
console.log(tax + cost);

// 5h
let cartQuantity = 0;
function cartQuantityUpdater(text) {
  document.querySelector('.cart-quantity').innerText = text;
}

