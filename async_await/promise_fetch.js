const flip=new Promise((resolve,reject)=>{
    console.log(Math.random());
    
    if(Math.random() > 0.5){
        resolve("Success");
    }else{
        reject("Failed");
    }
});

flip
.then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
});