//  function for reversing an array
function reverceArray(arr) {
    let length = arr.length;
    // we will traverse through out array using of loop
    let tempArr = new Array(length);

    for (let index = 0; index < arr.length; index++) {
        tempArr[index] = arr[length - index - 1];
    }
    console.log(tempArr);
}
const arr1 = [23, 21, 28, 54, 57];
reverceArray(arr1);

// Input to the computer : an array 
const arr2 = [87, 65, 33, 66, 12, 89, 9];
// Find the length of an array menually without using function 
// Concept behind loop : to did a repetative task in single calls :

// Sorting an array 
// function sortArray(arr){
//     let length = arr.length;
//     let sortedArr = new Array(length);




// }


// example of callback function in jS
function mainFunction(callback) {
    callback();
    console.log("hi John");
}
function callbackFunction() {
    console.log("Bye Bye");
}
// mainFunction(callbackFunction);

// example of promise in JS
// let promise = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve("Success is true");
//     } else {
//         reject("Success is not true");
//     }
// });
// promise.then(function () { console.log("Promise resolved"); })
//     .catch((error) => {
//         console.log("Error:", error); // Handles reject
//     });

// async and await in JS

let __a = 2;
let __b = 2;
console.log(__a +  __b);
    

