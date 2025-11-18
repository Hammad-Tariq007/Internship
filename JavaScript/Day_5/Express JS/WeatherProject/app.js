const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("App is up and running...");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let cityName = req.body.city;
  console.log(cityName);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=0948e6a0448792b5ff9b82943c851a49`;
  https.get(url,(response)=>{
      console.log(response.statusCode);
      response.on("data",(data)=>{
          const weatherData =  JSON.parse(data);
          const temp = weatherData.main.temp;
          const desc = weatherData.weather[0].description;
          const imgIcon = weatherData.weather[0].icon;
          console.log(temp);
          res.write(`<h1>The Temperature in ${cityName} is ${temp} Degrees Celsius</h1>`)
          res.write(`<h3>Weather Description: ${desc} </h3>`);
          res.write(`<img src="https://openweathermap.org/img/wn/${imgIcon}@2x.png" alt="">`)
          res.end();
      })
  })
});

app.listen(port, () => {
  console.log("Server is running...");
});