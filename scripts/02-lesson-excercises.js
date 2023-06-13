//2a 
const soup = 10;
const burgers = 8;
const iceCream = 5;
const numberOfBurgers = 3;
const totalOrderOfFood =burgers*numberOfBurgers + soup + iceCream
console.log(totalOrderOfFood);

//2b 
const sameOrderWithFriends = 3;
console.log(totalOrderOfFood *sameOrderWithFriends);

//2c
const toaster = 18.50;
const shirts = 7.50;
console.log(toaster + shirts);

//2d
const tax = 0.10;
const productsCost = toaster +shirts;
console.log(tax*productsCost);

//2e 
const tax20 = 0.20;
console.log(tax20 * productsCost);

// go to https://supersimple.dev/projects/amazon/    

//https://cdn.discordapp.com/attachments/1118124058417057904/1118124763362103406/image.png

//2j
/*https://chat.openai.com/share/b43ca878-1ef0-4b83-a5b3-1ebe92c12284*/ 

//2k
/*https://cdn.discordapp.com/attachments/1118124058417057904/1118127513860833380/image.png*/

/*CHALLENGE EXERCISES!*/
function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit -32) *(5/9)
  return `${celsius}°F`;
}
//2L 

console.log(fahrenheitToCelsius(86));
