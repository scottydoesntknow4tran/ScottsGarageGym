const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  try {

  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error!");
  }
});

app.post("/register", (req, res) => {
  try {

  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error!");
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on " + PORT));