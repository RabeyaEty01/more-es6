const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '017171897777', address: 'Chandpur', dress: 'silver' };

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;


console.log(phone, price);
console.log(phone, price, dress);
console.log(phone);
console.log(phone, price, id, dress);
console.log(phone, price);
console.log(phone);
console.log(phone);


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

// const work = company.web.work;
// const framework = company.web.framework;
// const ceoName = company.ceo.name;

const { work, framework } = company.web;
const { name, cid, food } = company.ceo;
const { second, third } = company.web.tech;

console.log(work, framework, food, name, second,third);
