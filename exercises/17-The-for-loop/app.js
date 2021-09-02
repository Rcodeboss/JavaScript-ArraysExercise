/*

//First Way

var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];

let sumOfElements = 0; //Must be a global variable
let totalOfElements = myArray.length; //Must also be global

//The for in does NOT respect the order of the loop

for (var index in myArray){
    sumOfElements += myArray[index];
}

console.log(sumOfElements / totalOfElements); //Must be outside of the loop
*/

//-------------------------------------------------------------------------------------

//Second Way

var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];

//The for of loop DOES respect the order of the loop
const getAverage = (arr) => {
    
    let total = 0;

    for (let number of arr){
        total += number;
    }

    return total / arr.length;
}

console.log(getAverage(myArray));
