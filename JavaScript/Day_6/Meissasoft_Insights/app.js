const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { log } = require("console");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const email = req.body.email;

  const data = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: fName,
      LNAME: lName,
    },
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us9.api.mailchimp.com/3.0/lists/YourListId/members";

  const options = {
    method: "POST",
    auth: "Meissasoft:YourAPIKey",
  };

  const request = https.request(url, options, (response) => {
    if (response.statusCode == 200) {
      //   res.send("Successfully Subscribed");
      res.sendFile(__dirname + "/success.html");
    } else {
      //   res.send("Subscription failed");
      res.sendFile(__dirname + "/failure.html");
    }
    // response.on("data", (data) => {
    //   console.log(JSON.parse(data));
    // });
  });
  request.write(jsonData);
  request.end();
});

app.post("/failure", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}...`);
});
