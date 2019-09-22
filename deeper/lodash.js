const source={
    one:1,
    nest:{
        two:2,
        three:3
    },
    logs:function(){}
};

const assignClone=Object.assign({},source);
const spreadClone={...source};
const jsonClone=JSON.parse(JSON.stringify(source));

source.nest.two=-9;

console.log(source);

console.log(assignClone);

console.log(spreadClone);

console.log(jsonClone);
