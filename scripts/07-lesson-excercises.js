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
function converTemperature(degrees, unit) {
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

// //7g
// function updateCalculation(value) {
//   const numbers = ['0', '1', '2','3', '4', '5','6', '7', '8','9'];
//   for(let i = 0; i <= numbers.length; i++) {
//     if(numbers[i] === value) {
//       console.log(calculation);
//     } 
//   }
// }

//7h
function updateCartQuantity(change) {
  
  if (cartQuantity + change > 10) {
    alert('The cart is full');
    return;
  }

  if (cartQuantity + change < 0) {
    alert('Not enough items in the cart');
    return;
  }
  cartQuantity += change;
  console.log(calculation);
}
