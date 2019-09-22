function makeSuffix(suffix){

    function addSuffix(words) {
        return suffix+"  "+words;
    }

    return  addSuffix;
}

const addLy=makeSuffix("Ganesh");

console.log(addLy("suthar"));
