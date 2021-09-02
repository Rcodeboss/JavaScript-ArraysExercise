/*
//-------------------------------------------------------------------------------
var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName){
    
    let newArr = [];
        
    for(let i=0; i<people.length; i++){
        
        if(people[i]==personName){
            continue;
        } else {
            newArr.push(people[i]);
        }
    
    }

    return newArr;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
*/
//-------------------------------------------------------------------------------
//Another way
/*
function deletePerson(personName){
    
    let newArr = people.filter((name)=>{
        return name != personName;
    })

    return newArr;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
*/
//-------------------------------------------------------------------------------
//Another way

function deletePerson(personName){
    for(let i=0; i<people.length; i++){
        if (people[i]==personName){
            people.splice(people[i],1);
        }
    }
    return people;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));