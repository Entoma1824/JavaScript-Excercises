let calculation = '';
let cartQuantity = 0;
//7a & 7b
function greet(name) {
  //7c
  if (name !== undefined) {
    console.log(`Hello ${name}`);
  } else {
    console.log('Hello there!');
  }
}

//7d
function convertToFahrenheit(celsius) {
  const fahrenheit = celsisus * (9 / 5) + 32;

  return fahrenheit;
}

//7e
function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);

  return celsius;
}
//7f
function convertTemperature(degrees, unit) {
  if (!unit) {
    if (unit === ('F' || 'f')) {
      const celsius = convertToCelsius(degrees);
      console.log(`${celsius}C`);
    } else if (unit === ('C' || 'c')) {
      const fahrenheit = convertToFahrenheit(degrees);
      console.log(`${fahrenheit}F`);
    }
  } else {
    console.log('Kindly add the unit of temperature.');
  }
}

//7g
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

// function totalCalculation() {
//   const totalCalculation = eval(calculation);
//   console.log(totalCalculation);
// }

//7h
function updateCartQuantity(change) {
  if (cartQuantity + change > 10) {
    // console.log(cartQuantity -= cartQuantity-10);
    cartQuantity -= cartQuantity - 10;
    document.querySelector('.display-cart-quantity').innerHTML = `Cart quantity: ${cartQuantity}`;
    alert('The cart is full');
    return;
  }

  if (cartQuantity + change < 0) {
    cartQuantity = 0;
    document.querySelector('.display-cart-quantity').innerHTML = `Cart quantity: ${cartQuantity}`;
    alert('Not enough items in the cart');
    return;
  }
  cartQuantity += change;
  console.log(calculation);
  
    document.querySelector('.display-cart-quantity').innerHTML = `Cart quantity: ${cartQuantity}`;
}
