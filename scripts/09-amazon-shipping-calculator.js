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



    if (cost <= 40) {
        cost = cost + 10;
    } 

    const roundUpCost = cost.toFixed(2);
    document.querySelector('.js-total-cost').innerText = `$${roundUpCost}`;
}

let subscribeValue = true;

// function valueChecking() {
// subscriveValue ? 'Subscribe' : 'Subscribed';
// }

function subscribe() {
    const buttonElement = document.querySelector('.subscribtion');

    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerText = 'Subscribed';
    } else {
        buttonElement.innerText = 'Subscribe';
    }
}