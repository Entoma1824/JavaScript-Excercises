//this checks if the button has a class called "js-button"
const button = document.querySelector('.js-button');
console.log(button.classList.contains('js-button'));

//10e and 10f
function toggle(className) {

    const isToggledButton = document.querySelector(`.${className}`);
    
    if(!(isToggledButton.classList.contains('is-toggled'))) {
        isToggledButton.classList.add('is-toggled');
        
    } else {
        isToggledButton.classList.remove('is-toggled');
    }
}