let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"

function spell(str){

    let counts = {};

    for(let i=0; i<str.length; i++){

        let key = str[i].toLowerCase();

        if (key == " ") {
            continue
        }else if (!(key in counts)) {
            counts[key]=1;
        } else {
            counts[key]++;
        }
        
    }

    return counts;
}

let output = spell(par);
console.log(output);


/*Second Way

let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
counts = {};

for (let i of par.replace(/ /g,'').toLowerCase()){
    if(counts.hasOwnProperty(i)){
        counts[i]++
    } else {
        counts[i]=1;
    }
}

console.log(counts);

*/

