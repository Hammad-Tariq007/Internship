console.log("Hammad\'".length);

let str = "I love Pakistan";
console.log("Includes Function:");

console.log(str.includes("love"));
console.log(str.includes("Love"));
console.log(str.includes("Pakistan",8));

console.log("startsWith Function:");
console.log(str.startsWith("I"));
console.log(str.startsWith("Love"));
console.log(str.startsWith("love",2));

console.log("toLowerCase Function:");
console.log(str.toLowerCase());

console.log("toUpperCase Function:");
console.log(str.toUpperCase());

let amount_str = "Please give Rs1000";
console.log("Extracting amount:");
console.log(amount_str.slice(-6));

amount_str[3]="o";
console.log(amount_str);


