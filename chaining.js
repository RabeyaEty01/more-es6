//declare variable based on the name of an object property

const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, y, b } = myObject;
//console.log('myObject.p', myObject?.p?.q); //optional chaining

//destructuring array 1
const [p, q] = [45, 37, 91, 86];
console.log(p, q);

//destructuring array 1
const [best, faltu] = ['momotaj', 'poroshi', 'ety'];
console.log(best, faltu);

const { sky, color } = { sky: 'blue', soil: 'mati', color: 'red' }
console.log(color);



//chaining


const company = {
    name: 'GP',
    ceo: { cid: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
};
//console.log(company.web.tech.third);
console.log(company?.backend?.tech.third);
//kono karone kono ekta value jodi undefined hoye jay oita rodh korar jonno ? eta use korbo . etake optional chaining.