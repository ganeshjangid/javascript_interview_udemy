let x="Red";

{
    let x='Green';

    console.log('1:',x); //Green

    (function(){
        console.log("2:",x); //undefined
        
        var x="Blue";

        console.log("3 :",x); //blue
        
    })();
}   

console.log("4:",x); //red


if(true){
    var b="test"; // use let and check
    console.log(b);
}


console.log(b); 