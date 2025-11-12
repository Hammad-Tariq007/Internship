// let arr = [1,2,3];
// console.log(arr);
// let userInput = prompt("Enter a number:");
// while (userInput != "z") {
// arr.push(userInput);
// userInput = prompt("Enter another number, Press 'z' to escape");
// }
// console.log(arr);

// let arr = [1,2,3];
// console.log(arr);
// let userInput = prompt("Enter a number:");
// while (userInput != 0) {
// arr.push(userInput);
// userInput = prompt("Enter another number, Press '0' to escape");
// }
// console.log(arr);

// let arr = [10, 20, 30, 67, 37, 90, 52];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 10 == 0){
//         newArr.push(arr[i])
//     }
// }
// console.log(arr);
// console.log(newArr);

// another method
// let newArr = arr.filter((num) => num % 10 === 0);
// console.log(arr);
// console.log(newArr);

// let arr = [2,3,4,5];
// let newArr = arr.map(num => num * num);
// console.log(arr);
// console.log(newArr);

let n = 5;
let arr = Array.from({ length: n }, (_, i) => i + 1);
console.log(arr);
let factorial = arr.reduce((acc, curr) => acc * curr, 1);
console.log(`The factorial of the array is: ${factorial}`);
