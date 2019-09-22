console.log("First");

console.log("second");


const timerId=setTimeout(() => {
    console.log("Third");    
}, 5000);

clearTimeout(timerId);

console.log("Four");
