/* //-------------------------------------------------------------------------------
Way #1

var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    for(let a in firstArray){
        newArray.push(firstArray[a]);
    }
    for(let b in secondArray){
        newArray.push(secondArray[b]);
    }
    return newArray;
}

console.log(mergeArrays(chunk_one, chunk_two));
*/
//-------------------------------------------------------------------------------
//Way #2

/*
var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = firstArray.concat(secondArray);
    return newArray;
}

console.log(mergeArrays(chunk_one, chunk_two));
*/
//-------------------------------------------------------------------------------
//Way #3

/*
var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    firstArray.push(...secondArray);
    return firstArray;
}

console.log(mergeArrays(chunk_one, chunk_two));
*/
//-------------------------------------------------------------------------------
//Way #4

var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArr = [...firstArray, ...secondArray];
    return newArr;
}

console.log(mergeArrays(chunk_one, chunk_two));

//-------------------------------------------------------------------------------
//How to unpack things, example 
/*
const myarr =()=>{
    let hello={item1="something", item2:"something else"};
    let {item1, item2} = hello;
    console.log(item1)
}
*/
