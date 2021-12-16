const spread=(...arg)=>{
    console.log(arg);
    
};



spread(10,20,30,40,50);


const source={
    tom:25,
    jerry:65
};

const clone={
    kiran:25,
    kanta:35,    
    ...source,
    kli:65

};

console.log("clone",clone);

const ele=[10,20,30,40];

const nextele = [65, 52, ...ele];

console.log(nextele);


const sumXYZ=(a,b,c)=>a+b+c;

const sumarr=[10,20,30];

console.log(sumXYZ(...sumarr));

const test={
    name:"ganesh",
    age:25
}

const test1={
    ...test,
    address:"Malad"
}

console.log(test1);

//console.log(Object.assign(test,test1));





