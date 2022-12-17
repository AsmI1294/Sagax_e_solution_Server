const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const categories = require("./categories.json");

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(port);
});
