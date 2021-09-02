var myNumbers = [23,234,345,4356234,243,43,56,2];
//oldArray

var newArray = myNumbers.map(myFunction);
//let newArray = oldArray.map(nameOfFunction);

//function nameOfFunction(parameter)
function myFunction (num) {
    return num * 3;
}

console.log(newArray);