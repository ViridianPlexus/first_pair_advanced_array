/*
Write a function `unique` that accepts an array as an argument. The function
should return a new array containing elements of the input array, without
duplicates.
Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.
Examples:
*/

let unique = function(array) {
    let new_arr = [];
    let obj = {};
    new_arr = array.map(num=>{
        if(!(num in obj)){
            obj[num]= 1;
            console.log(obj, new_arr)
            return num;
        }
        // console.log(new_arr)
    })
    new_arr.forEach((element, i) => {
        console.log(element,i)
        if(element===undefined){
            new_arr.splice(i,1)

        }
    });
    return new_arr;

//     new_arr = array.filter(num =>{
//         if(!new_arr.includes(num)){
//             return num;
//         }
//     })
//     return new_arr;
//

    // array.forEach(num =>{
    //     if(!new_arr.includes(num)){
    //         new_arr.push(num);
    //     }
    // })
    // return new_arr




}

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
// console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
// console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = unique;
} catch (e) {
    module.exports = null;
}
