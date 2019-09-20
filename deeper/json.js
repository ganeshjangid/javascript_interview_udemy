const json=`{
    "color":"Red",
    "door":25,
    "arr":[10,20,30],
    "details":{
        "year":2015,
        "manu":"honda"
    },
    "solid":true
}`;

console.log(json);

console.log(JSON.parse(json));

const car={
    name:"ganesh",
    age:25,
    arr:[01,20,3,0],
    feature:{
        luck:25,
        life:"ganesh"
    }
};

console.log(car);
console.log(typeof(car));


console.log(JSON.stringify(car));

console.log(typeof(car));


