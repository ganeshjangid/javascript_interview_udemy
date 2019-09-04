let obj={
    a:10,
    b:20,
    lang:['hindi','php','javascript','node'],
    getResult: function (){
        //console.log(this);
        console.log(this.a+this.b);
        console.log(this.lang.join(', '));
        
    },
    getResultArrow:()=>{
        console.log(this);
        
        var This=this;
        console.log(This.a + This.b);
        console.log(This.lang.join(', '));
        
    }
};

obj.getResult();

    obj.getResultArrow();
