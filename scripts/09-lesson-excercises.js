// 9a
console.log(document.querySelector('button'));

//9b
document.querySelector('.js-button').innerHTML = '9b done!';

//9c
function playGame(playerGuess) {
    document.querySelector('.score-board').innerHTML = `You chose: ${playerGuess}`;
}
// 9d and 9e and 9f
function getText() {
    const inputName = document.getElementById("input-text");
    const getName = inputName.value;

    const output = 'Your name: ' + getName;

    const outputName = document.querySelector('.name-display');
    outputName.innerText = output;
}

//9h
/*
let text = '';
function displayCurrentlyTyping() {
    let getText = ''; 
    getText += text;


    document.querySelector('.display-text-input').innerText = `${text}`;
}
*/

function displayCurrentlyTyping() {
    const inputElement = document.querySelector('.input');
    document.querySelector('.text-message')
      .innerHTML = inputElement.value;
}