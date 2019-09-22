const boomarage=new Promise((resolve,reject)=>{

    reject("stuck in tree");    
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

test();

