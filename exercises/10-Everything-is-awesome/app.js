let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

//This is a fucntion
const ZerosToYahoos = (cheese) => {  //This means: const functionName == (parameter) => { code }

    let return_array = [];

    cheese.forEach( item => {  //Arrow Method
        
        if (item===1){
            return_array.push(item);
        } else if (item===0){
            return_array.push("Yahoo");
        }
    
    } );

    return return_array;
};

console.log(ZerosToYahoos(myArray));  //cheese==myArray


/*NOTES:

-----Using the forEach() Method-----

let numbers = [1, 2, 3, 4, 5];

Way to do it #1
---------------
numbers.forEach(function(number) {
    console.log(number);
});

Way to do it #2 (Arrow method)
---------------
numbers.forEach(number => console.log(number));

*/