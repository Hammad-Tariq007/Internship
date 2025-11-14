const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send(`The Sum is: ${result}`);
});

app.post("/bmiCalculator.html", (req, res) => {
  let height = req.body.height;
  let weight = req.body.weight;
  let height_in_m = height / 100;
  let bmi = weight / (height_in_m * height_in_m);
  let roundedBMI = Math.round(bmi*100)/100;
  res.send(`Your BMI is: ${roundedBMI}`);
});

app.listen(port, () => {
  console.log("Server is running at port 3000");
});
