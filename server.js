const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

const auth = require("./firstapp/auth"); //include authenitcation protocal
const drive = require("./firstapp/drive"); //including driver functions


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static("firstapp"));

app.get("/", (req, res)=>{
  res.sendFile(path.resolve(), __dirname, "firstapp", "index.html" );
})

app.get("/boy", (req, res)=>{
  res.sendFile(path.resolve(), __dirname, "firstapp", "landing_page.html" );
})

app.post("/login", (req, res) => {
  try {
    console.log(req.body);
    auth.checkpsw(req.body.email,req.body.pw);
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