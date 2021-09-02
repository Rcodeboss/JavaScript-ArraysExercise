let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian',
'Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];


/* Another Way 
//------------------------------------------------------
function filterByName(arr, str){
    let newArr=[];
    for(x in arr){
        if(arr[x].match(str)){
            newArr.push(arr[x]);
        }
    }  
    return newArr;
}

console.log(filterByName(names,'am'));*/
//------------------------------------------------------

function filterByName(arr,str){
    let newArr = arr.filter(function(name) { 
        return name.toLowerCase().includes(str);
    });

    return newArr
}

console.log(filterByName(names,'am'));
