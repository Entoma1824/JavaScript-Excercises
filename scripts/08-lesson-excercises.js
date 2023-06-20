//8a
const product = {
  name:'basketball',
  priceInCents: 2095
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
  priceInCents: 10000
}
const product2 = {
  name: 'Mouse',
  priceInCents: 6000
}
console.log(comparePrice(product2, product1));
function comparePrice(product1, product2) {
  const priceComparison = product1.priceInCents > product2.priceInCents;
  if(priceComparison) {
    return product2;
  } else {
    return product1;
  }
}
