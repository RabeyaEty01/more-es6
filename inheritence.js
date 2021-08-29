class TeamMember {
    name;
    address;
    //constructor
    constructor(name, address) {
        this.name = name;
        this.address = address;

    }

}


class Support extends TeamMember {
    designation = 'Support Web Dev';
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    //function
    startSession() {
        console.log(this.name, 'start a support session');

    }
}
class StudentCare extends TeamMember {
    designation = 'Care Web Dev';
    buildARoutine(student) {
        console.log(this.name, 'Build A routine', student);

    }
}
class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'Neptune App Dev';
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);

    }
}
//object
const amir = new Support('Amir khan', 'BD', 11);
const salman = new Support('Salman khan', 'Dubai', 10);
const sharuk = new Support('SRK khan', 'Dubai', 9);
const Noman = new Support('Abdullah Al Noman', 'Canada', 11);

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
console.log(alia);
//console.log(amir);
const ash = new NeptuneDev('Ash', 'Dilhi', 'Android studio');
ash.releaseApp('1.4.5');
//console.log(ash);


//javascript e ekta object theke r ekta object er property gula je shared hosse sheta ekta chain diye kaaj hoy etake prototopical chain othoba prototopical inheritence bole 