const source={
    tara:35,
    mangi:95,
    lila:86
};

//console.log(source);

console.log(Object.keys(source));
console.log(Object.values(source));


const dest={
    timmy:52,
    joyce:65
};


const dest2={
    timmy1:62,
    joyce1:69
};

const dest3={
    name:"ganesh",
    age:28
}



//Object.assign(dest,source,dest2);
Object.assign(dest,dest3);

console.log(dest);


