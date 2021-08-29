class Support {
    name;
    designation = 'Support Web Dev';
    address;
    //constructor
    constructor(name, address) {
        this.name = name;
        this.address = address;

    }
    //function
    startSession() {
        console.log(this.name, 'start a support session');

    }
}
//object
const amir = new Support('Amir khan', 'BD');
const salman = new Support('Salman khan', 'Dubai');
const sharuk = new Support('SRK khan', 'Dubai');
const Noman = new Support('Abdullah Al Noman', 'Canada');
amir.startSession();
salman.startSession();
//console.log(amir, salman, sharuk, Noman);
console.log(salman,Noman);

//class er khetre kono property ke access korte chaile this.exmple diye likhte hobe