var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

let biggestInteger; //You can leave it undefined
    
myArray.forEach(item => {
    if(!biggestInteger || item > biggestInteger) {
        biggestInteger = item;
    }
})

console.log(biggestInteger);

//If biggestInteger is false, undefined, or "", it is !biggestInteger