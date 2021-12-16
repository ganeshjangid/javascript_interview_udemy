const boomarage=new Promise((resolve,reject)=>{

    //reject("stuck in tree");    
    setTimeout(() => {
        resolve("Return successed");
    }, 5000);
});


async function test() {

    try {
        const bommStatus = await boomarage;

        console.log("boomrange status", bommStatus);
    } catch (error) {
        console.log(error);
        
    }

}

//test();


const tst=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is reject");
    }, 5000);
})

async function test1(){
    try {
        const rest= await tst;
        console.log(rest);

    } catch (error) {
        console.log(error);
    }
}


test1()


