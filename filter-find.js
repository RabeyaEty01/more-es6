const numbers = [5, 13, 7, 41, 29, 79, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
//console.log(bigNumbers);
console.log(smallNumbers);



const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile-phone', price: 15000, color: 'black' },
    { name: 'smart-watch', price: 3000, color: 'black' },
    { name: 'sticky-note', price: 30, color: 'pink' },
    { name: 'water-glass', price: 3, color: 'white' }

];

const expensive = products.filter(product => product.price > 100);
//console.log(expensive);

const blacks = products.filter(product => product.color == 'black');
//console.log(blacks);


const whiteItem = products.find(product => product.color == 'black');
console.log(whiteItem);

//filter array return korbe.filter condition onujayi jottogula element fullfill korbe shobgulare show korbe array diye.shorter moddhe jodi ektareo pay tahole o array er moddhe dibe . Jodi kaurei na pay shorter moddhe tahole empty array show korbe.

//  find element k dibe, array dibena. find condition onujayi jottogula element fullfill korbe shobgulare show korbe na ,shudhu first element tare show korbe. shorto fullfill kore emn kaure jodi na pay tahole undefined show korbe.