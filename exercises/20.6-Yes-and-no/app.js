let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

let newArr = function(num){
    if(num === 0){
        return "woko"; //You dont have to use newArr.push()
    } else {
        return 'wiki';
    }
};

console.log(theBools.map(newArr));