let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

/* //Way #1

const mergeTwoList = (arr) => {
    let even = [];
    let odd = [];
    for(let x in arr){
        if(arr[x] % 2 !== 0){
            odd.push(arr[x]);
        } else {
            even.push(arr[x]);
        }
    }
    return odd.concat(even);
}

console.log(mergeTwoList(list_of_numbers))
*/

//Way #2

const mergeTwoList = (arr) => {
    let even = [];
    let odd = [];
    arr.forEach(element => {
        if (element % 2 != 0){
            odd.push(element);
        } else {
            even.push(element);
        }
    });

    return [...odd, ...even];
}

console.log(mergeTwoList(list_of_numbers))