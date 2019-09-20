const weapon="Weapon";

const vader={
    title:"Hello",
    child:[10,20,30,40],
    weapon
}

console.log(vader);


const planets=['earth','mercury','venus','gupitar'];
const [one,two]=planets;
console.log(one,two);


const person={
    name:"ganesh",
    age:25,
    info:{
        hobby:"cricket",
        spell:["run"]
    }
};

const {name,age,home="home sweet home",info:{hobby}}=person;

console.log(name,age,home,hobby);

