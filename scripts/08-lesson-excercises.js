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
function appendToResult(value) {
  document.getElementById('result').value += value;
}

function calculate() {
  const result = eval(document.getElementById('result').value);
  document.getElementById('result').value = result;
}

function clearResult() {
  document.getElementById('result').value = '';

}