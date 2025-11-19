const express = require("express");
const bodyParser = require("body-parser");
var _ = require("lodash");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

const homeContent =
  "Home - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
const aboutContent =
  "About - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
const contactContent =
  "Contact - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

const posts = [];

app.get("/", (req, res) => {
  res.render("home", { bodyText: homeContent, newPosts: posts });
});

app.get("/about", (req, res) => {
  res.render("about", { bodyText: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { bodyText: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.get("/posts/:title", (req, res) => {
  const postTitle = req.params.title;
  posts.forEach((post) => {
    if (_.lowerCase(post.title) == _.lowerCase(postTitle))
      res.render("post", { title: post.title, body: post.body });
  });
});

app.post("/", (req, res) => {
  const post = {
    title: req.body.title,
    body: req.body.para,
  };
  posts.push(post);
  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server is up and running...");
});
