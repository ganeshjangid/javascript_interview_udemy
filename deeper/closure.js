const name="ganesh";

const firstName=()=>{
    console.log(name);
    
    const age=25;
    let add;

    let username="";
    let password="";

   /*  function second(){
        console.log(name);
        console.log(age);
        console.log(add);
        console.log(`username is :${username} and password is : ${password}`)
    }
    second(); */

    function setUsernamne(newUsername){
        username=newUsername;
    }

   

    function setPassword(newPassword){
        password = newPassword;
    }


    return {
        sign:function(user,pass){
            setUsernamne(user);

            setPassword(pass);
        },
        debug:function() {
            console.log(`username is :${username} and password is : ${password}`)
            
        },
        signIn:function (uname,pw) {
            if (uname === username &&  pw === password) {
                console.log("Yes, You can login in");
                
            }else{
                console.log("You are not Authorized person");
                
            }
        }
    };


    add="Malad";

}


const outer=firstName();

outer.sign("ganesh", "ganesh12345");

outer.debug();

outer.signIn('ganesh','ganesh123455');

