const fetch = require("node-fetch");

fetch("https://official-joke-api.appspot.com/jokes/random")
.then((result) => {
    //console.log(result.json());
    return result.json();
})
.then((res)=>{
    console.log(res);
    
})
.catch((err) => {
    console.log(err);
});


console.log("After Fetch");
console.log("After Fetch 2 ");

