const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const categories = require("./categories.json");
const courses = require("./courses.json");

app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/courses/", (req, res) => {
  res.send(courses);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const eachCat = courses.filter((cat) => cat.category_id == id);
  res.send(eachCat);
});
app.get("/eachCourses/:id", (req, res) => {
  const id = req.params.id;
  const eachCat = courses.find((cat) => cat._id == id);
  res.send(eachCat);
});

app.listen(port, () => {
  console.log(port);
});
