// Q1. Create an object containing student names and their marks.Then, print each student's name and marks using different loops.

const students_Obj = {
  Hammad: 88,
  Zubair: 87,
  Ahmad: 80,
};

// Using for-of  
for (const key of Object.keys(students_Obj)) {
  console.log(`Name: ${key}, Marks: ${students_Obj[key]}`);
}

// Using for-in  
for (const name in students_Obj) {
  console.log(`Name: ${name}, Marks: ${students_Obj[name]}`);
}

// for loop 
const names = Object.keys(students_Obj);
for (let i = 0; i < names.length; i++) {
  const name = names[i];
  const marks = students_Obj[name];
  console.log(`Name: ${name}, Marks: ${marks}`);
}



// Q2. Write a program that keeps asking for a PIN until the user enters the correct one.

const secret = 5432;
let userInput = prompt("Enter the pin:");

while (secret != userInput) {
  console.log("Try Again!");
  userInput = prompt("Enter the pin again:");
}
console.log("Login Success");



// Q3. Calculate the mean (average) of an array of numbers using a for...of loop.

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let number of numbers) {
  sum += number;
}

let mean = sum / numbers.length;
console.log(`The mean of numbers is: ${mean}`);



// Reduce Method 

const nums = [1, 2, 3, 4, 5];
const total = nums.reduce((acc, num) => acc + num, 0);
const avg = total / nums.length;

console.log(`The mean of numbers is: ${avg}`);
