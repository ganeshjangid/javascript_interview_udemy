const building={
    name:'KILL BILL',
    stories:1,
    address:'MALAD MUMBAI',
    info:function(){
        console.log(`
            name : ${this.name} | stories : ${this.stories}  | Address : ${this.address}
        `);
    }
};

const tst={
    name:"ganesh",
    info:function(){
        console.log(`this is ${this.name}`)
    }
}
tst.info();

building.info();

const details=['KILL BILL part2','2','Dahisar'];

const createBuilding=(name,stories,address)=>{
    //console.log(details[0][0]);
    return {
        name,
        stories,
        address,
        info: function () {
            console.log(`
            name : ${this.name} | stories : ${this.stories}  | Address : ${this.address}
        `);
        }
    };

};


const empireState = createBuilding('KILL BILL part2', '2', 'Dahisar');

empireState.info();

const ambani = createBuilding('KILL BILL part3', '3', 'Nasik');

ambani.info();


/* 
    Constructor

*/


function CreateBuildingConst (name, stories, address) {
    //console.log(details[0][0]);
    
        this.name=name;
        this.stories=stories;
        this.address=address;
        this.info= function () {    
            console.log(`
            name : ${this.name} | stories : ${this.stories}  | Address : ${this.address}
        `);
        };
};


const ambaniConst = new CreateBuildingConst('KILL BILL part4', '4', 'Nasik4');
ambaniConst.info(); 

