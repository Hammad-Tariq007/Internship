// Question 1: Check if age is between 10 and 20

let age = prompt("Enter your age:");

if(age >= 10 && age <= 20){
    console.log("Age is between 10 and 20.");
} else {
    console.log("Age is not between 10 and 20.");
}


// (age >= 10 && age <= 20)? console.log("Age is between 10 and 20."): console.log("Age is not between 10 and 20.");




// Question 2: Print the day of the week using switch

let weekDay = prompt("Enter the day of the week").toLowerCase();

switch (weekDay) {
  case "monday":
    console.log("It's Monday");
    break;
  case "tuesday":
    console.log("It's Tuesday");
    break;
  case "wednesday":
    console.log("It's Wednesday");
    break;
  case "thursday":
    console.log("It's Thursday");
    break;
  case "friday":
    console.log("It's Friday");
    break;
  case "saturday":
    console.log("It's Saturday");
    break;
  case "sunday":
    console.log("It's Sunday");
    break;
  default:
    console.log("Invalid day entered");
    break;
}



// Question 3: Check if a number is divisible by 2 and 3

let num1 = prompt("Enter a number");

(num1 % 2 == 0 && num1 % 3 == 0)? console.log("Number is divisible by 2 and 3"): console.log("Number is NOT divisible by both 2 and 3");



// Question 4: Check divisibility with detailed conditions

let num2 = prompt("Enter a number");

if (num2 % 2 == 0 && num2 % 3 == 0) {
  console.log("Number is divisible by both 2 and 3");
} else if (num2 % 2 == 0) {
  console.log("Number is divisible by 2 only");
} else if (num2 % 3 == 0) {
  console.log("Number is divisible by 3 only");
} else {
  console.log("Number is neither divisible by 2 nor by 3");
}



// Question 5: Check if a person can drive based on age

let userAge = prompt("Enter your age:");
(userAge > 18)? console.log("You can drive"): console.log("You cannot drive");
