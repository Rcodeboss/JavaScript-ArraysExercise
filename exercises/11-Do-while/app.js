// stating value for the loop:
let i = 20;

// the loop code block
do {

    //Evaluate if condition of each item before you start decreasing them
    if(i % 5 == 0){
        console.log(i + "!");
    } else {
        console.log(i);
    }
    
    i--;
    if (i<1){console.log('LIFTOFF');}

} while (i > 0);

