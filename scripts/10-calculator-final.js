let calculation = localStorage.getItem('calculation') || '';
document.getElementById('result').value = calculation;

function appendToResult(value) {
  if(!(value === '-1*')) {
    calculation += value;
    document.getElementById('result').value += value;
    localStorage.setItem('calculation', value)
    console.log(calculation);
    
    // if(value === '%') {
    //   // const removePercent = value.substring(0, value.length - 1);
    //   const percentValue = removePercent+'/100';
  
    //   document.getElementById('result').value = percentValue; 
    //   calculate();
    // }

  }
  if(value === '-1*') {
    calculation += value;
    document.getElementById('result').value = value + document.getElementById('result').value ;
    calculate();
    console.log(calculation);
  } 
  // const operatorsClass = 
  if(document.querySelector('.math-operators').classList.contains('.toggle-math-operators')){
    mathOperatorsClass.classList.remove('toggle-math-operators');
  }
}


function mathOperators(operator, className) {
  calculation += operator;
  const mathOperatorsClass = document.querySelector(`.${className}`);

  if(!(mathOperatorsClass.classList.contains('.toggle-math-operators'))) {
    mathOperatorsClass.classList.add('toggle-math-operators');
  } else if(mathOperatorsClass.classList.contains('.toggle-math-operators')){
    mathOperatorsClass.classList.remove('toggle-math-operators');
  }
  localStorage.setItem('calculation', operator)
}



function calculate() {
  const result = eval(calculation);
  document.getElementById('result').value = result;
  localStorage.setItem('calculation', result);
  console.log(result);
}



function clearResult() {
  calculation = '';
  document.getElementById('result').value = '';
  localStorage.removeItem('calculation');
  console.log(calculation)
}
console.log(document.getElementById('result').value)
console.log(calculation);