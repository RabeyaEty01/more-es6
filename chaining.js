//declare variable based on the name of an object property

const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, y, b } = myObject;
console.log(x, b);

//destructuring array 1
const [p, q] = [45, 37, 91, 86];
console.log(p, q);

//destructuring array 1
const [best, faltu] = ['momotaj', 'poroshi', 'ety'];
console.log(best, faltu);

const { sky, color } = { sky: 'blue', soil: 'mati', color: 'red' }
console.log(color);