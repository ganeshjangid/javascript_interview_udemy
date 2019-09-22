
class CreateBuildingConst {
    
    constructor(name, stories, address){
        this.name = name;
        this.stories = stories;
        this.address = address;
        this.guest=[];
    };

    info() {
            console.log(`
            name : ${this.name} | stories : ${this.stories}  | Address : ${this.address}
        `);
    }
    
    
    set guests(value){
        return  this.guest.push(value);
    }
    get elevator() {
        return this.stories > 10;
    }

};


const ambaniConst = new CreateBuildingConst('KILL BILL part4', '4', 'Nasik4');
ambaniConst.info(); 


console.log("Elevator stories", ambaniConst.elevator);
ambaniConst.guests="ganesh";
ambaniConst.guests="Nagesh";
ambaniConst.guests="Kumar";


console.log(ambaniConst.guests);



