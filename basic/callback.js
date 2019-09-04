/* let myName=(name)=>{
    console.log("name "+name);
};

let showFamily=(myName)=>{

    console.log("Heekkki");
    
    myName("ganesh");   
    
    setTimeout(() => {
        console.log("Four");
        
    }, 2000);

    console.log("Third");
    
    
};


showFamily(myName); */

function logsMsg(){
    console.log("This is nice message function");    
}

function printMsg(callback){

    callback();
}


printMsg(logsMsg);

const arr=[1,2,3,5,10];

const nums=function(num){
    console.log("This is number ="+num);
    
};

arr.forEach(nums);


function forEach(array,callback){

    for (let index = 0; index < array.length; index++) {
        const item=array[index];

        callback(item);
    }
};

forEach(arr, nums);



