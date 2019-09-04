var vehicle={
    type:"Sewden",
    logInfo:function(){
        var This=this;
        console.log("1. this.type",this.type);
        console.log("1. This.type",This.type);
        
     (function(){
         console.log("2. this.type", this.type);
         console.log("2. This.type", This.type); 
     })();   

     console.log("this",this);
     console.log("This",This);
     
    }
};

vehicle.logInfo();

//1 sewden
//1 sewden

//2 undefined
//2 sewden