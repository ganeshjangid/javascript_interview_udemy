/* 
Write Function sum
*/

/* 
sum(1)(2)(3)(4)(5)(result=>console.log('result',result));


such result =15

*/

//sum(1)(2)(3)(4)(5)(result => console.log('result', result));

function sum(a){
    return (b)=>{
        return (c)=>{
            return (d)=>{
                return (e)=>{
                    const sum=a+b+c+d+e;
                    //console.log("Result is ",sum);

                    return sum;
                };
            };
        };
    };
}

const results=sum(1)(2)(3)(4)(5);

(function (){
    console.log("This is result of high order ",results);
    
})(results);



/* 1. Sum1 result */
/* 
function sum1(a){
    return (b)=>{
        //return a+b;
        console.log("Result",a+b);
        
    };
};

const res1=sum1(1);
const res2=res1(2); */

