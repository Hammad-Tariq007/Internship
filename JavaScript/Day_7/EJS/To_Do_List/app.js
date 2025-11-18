const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let listItems = ["Breakfast", "Job", "Workout"];
let workItems = [];

app.get("/", (req, res) => {
  let day = date.getDate();
  res.render("list", { listTitle: day, newItem: listItems });
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newItem: workItems });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;
  const list = req.body.list;
  if (list == "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    listItems.push(item);
    res.redirect("/");
  }
  //   console.log(item);
});

app.listen(port, () => {
  console.log("Server is running at port 3000...");
});

// console.log(date);