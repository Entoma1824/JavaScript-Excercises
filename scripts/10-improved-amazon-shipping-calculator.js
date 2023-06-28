String(25);
console.log('25' - 5); // strings turn into numbers when you * / - And this is called type coercion

window.document;
window.console.log('window');
// window.alert('hello world')

function handleCostKeyDown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');

  let cost = Number(inputElement.value);
    //10h
    if(!(cost <0 )) {

        if (cost <= 40) {
            cost = cost + 10;
        } else if (cost) {
        }
        document.querySelector('.js-total-cost').innerText = `$${cost}`;
        document.querySelector('.error-message').innerText = '';

    } else {
        document.querySelector('.error-message').innerText = 'Error: cost cannot be less than $0'
        document.querySelector('.js-total-cost').innerText = '';
    }
}

let subscribeValue = true;

// function valueChecking() {
// subscriveValue ? 'Subscribe' : 'Subscribed';
// }

function subscribe() {
  const buttonElement = document.querySelector('.subscribtion');

  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerText = 'Subscribed';

    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerText = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}