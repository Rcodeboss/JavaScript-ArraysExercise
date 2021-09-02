let newString = '';

function lyricsGenerator(array){

    for(let i in array){
        
        if(array[i]===0){
            newString += 'Boom ';
        } else if (array[i]===1){
            newString += 'Drop the base ';
        }
        
        if (array[i]===1 && array[i-1]===1 && array[i-2]===1){
            newString += '!!!Break the base!!! ';
        }
    }

    return newString;
}

// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))