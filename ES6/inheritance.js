
class CreateBuildingConst {

    constructor(name, stories, address) {
        this.name = name;
        this.stories = stories;
        this.address = address;
        this.guest = [];
    };

    info() {
        console.log(`
            name : ${this.name} | stories : ${this.stories}  | Address : ${this.address}
        `);
    }



};
/* const ambaniConst = new CreateBuildingConst('KILL BILL part4', '4', 'Nasik4');
ambaniConst.info();  */


class Resturant extends CreateBuildingConst{
    constructor(name,stories,address,cuisine){
        super(name, stories, address);

        this.cuisine=cuisine;
    }

    info(){
        super.info();
        console.log(`This is child class method ${this.cuisine}`);
        
    }
}

const kaju = new Resturant('AMBANI Places', '2', 'Nadol','Paratha');

console.log('Kaju',kaju);

kaju.info()


