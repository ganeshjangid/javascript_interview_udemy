/* function logsMessage(greet) {
    
    greet(()=>{
        console.log("Hii This");
        
    });
}

//logsMessage();
//greet()
//()=>greet()
//()=> 'Hii this'

logsMessage(greet(()=>greet(()=> console.log('Hii this'))));
 */
/* 
function logsMessage(msg){
    console.log(msg);
}

function greet(callback){
    //console.log(callback());
    return callback();
};

let returnHii=()=>"Hii";

logsMessage(greet(returnHii));



 */

//logsMessage(greet(() => greet(() => console.log('Hii this'))));

//logsMessage();
//greet(())
//greet(() => console.log('Hii this'))

function logsMessage(msg){
    console.log(msg);
    
}

function greet(callback){
    //callback();
    return callback();
    //console.log(callback());
    
}

const greets= () => "Hii This";



logsMessage(greet(greets));
