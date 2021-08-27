const friends = ['Tom Hanks', 'Tom Cruise', 'tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(friend => friend.length);
//console.log(fLengths);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile-phone', price: 15000, color: 'black' },
    { name: 'smart-watch', price: 3000, color: 'black' },
    { name: 'sticky-note', price: 30, color: 'pink' },
    { name: 'water-glass', price: 3, color: 'white' }

];

const productName = products.map(product => product.name);
const productPrices = products.map(product => product.price);

products.map(product => console.log(product));

//products.forEach(product=> console.log(product));

//console.log(productName);
//console.log(productPrices);



// map() prottekta elemnet e loop through korbe , tar jonno kono ekta function  apply korbe and function e jei result pabe shei result gula ekta array er moddhe rakhbe and array ta return korbe.
//forEach() prottekta elemnet er jonno kaaj korbe but kono array return korbena .


