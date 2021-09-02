function matrixBuilder(integer){

    let array = [];

    for (let i=0; i<integer; i++){
        
        let newArr = [];        

        for (let a=0; a<integer; a++){
            newArr.push(Math.round(Math.random()));
            
        }

        array.push(newArr);
        
    } 

    
    return array;
}

console.log(matrixBuilder(5))
