
let calculation = localStorage.getItem('calculation') || '';
document.getElementById('result').value = calculation;

function appendToResult(value) {
  calculation += value;
  const mathOperatorsClasses = document.querySelector('.math-operators');
  // if(!(value === '-')) {
    document.getElementById('result').value += value;
    localStorage.setItem('calculation', value)
    console.log(calculation);
  // } else {
//     if(value === '-') {
//       document.getElementById('result').value = value + document.getElementById('result').value;
//       localStorage.setItem('calculation', value)
//       console.log(calculation);
// //     } else {
// // //      const negativeToPositive = value.replace()

// //       document.getElementById('result').value += value;
// //       localStorage.setItem('calculation', value)
// //       console.log(calculation);
// //     }
//   }
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
