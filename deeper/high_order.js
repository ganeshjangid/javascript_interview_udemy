const cb=(name)=>{
    console.log(name);
};

const callback=(cb)=>{
    return cb;
};

console.log(callback("ganesh suthar"));


const nums=[1,2,3];

nums.nest=()=>{};

nums.forEach((v,i)=>{
    console.log(`index :${i} and values :${v}`);
});

/* Get result for object */
for (const i in nums) {
    console.log(nums[i]);
}


/* for array and object */
for (const i of nums) {
    console.log(i);
}


/* 
ForEach  is also high order function

*/
console.log("ForEach  is also high order function");


const callbackForEach = (v, i) => {
    console.log(`index :${i} and values :${v}`);
};
nums.forEach(callbackForEach);


function lessThan(x){

    return function(y){
        return x < y;
    };
}

const less=lessThan(10);

console.log(less(20));


