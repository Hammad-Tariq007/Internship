// Faulty Calculator Example (50% Faulty)
let random = Math.random();
console.log(random);
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
let op = prompt("Enter operator");
if (random < 0.5) {
  if (op == "+") {
    alert(`The result is ${num1 - num2}`);
  } else if (op == "*") {
    alert(`The result is ${num1 + num2}`);
  } else if (op == "-") {
    alert(`The result is ${num1 / num2}`);
  } else if (op == "/") {
    alert(`The result is ${num1 ** num2}`);
  }
} else {
  alert(`The result is ${eval(`${num1} ${op} ${num2}`)}`);
}
