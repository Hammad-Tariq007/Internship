// Question 1: Concatenate a string and a number

let a = "Hammad ";
let b = 23;
let c = a + b;
console.log(c);
console.log(typeof a);

// Question 2: Create an object and add a new property

const obj = {
  firstName: "Hammad",
  lastName: "Tariq",
};

console.log(obj);

obj.number = 10;

console.log(obj);

// Dictionary Example

const dictionary = {
  read: "To look at and understand words",
  write: "To form letters or words",
  listen: "To pay attention to sound",
  hear: "To perceive sound",
};

let word = prompt("Enter a word").toLowerCase();

switch (word) {
  case "read":
    console.log(dictionary.read);
    break;
  case "write":
    console.log(dictionary.write);
    break;
  case "listen":
    console.log(dictionary.listen);
    break;
  case "hear":
    console.log(dictionary.hear);
    break;
  default:
    console.log("Word not found in the dictionary");
    break;
}
