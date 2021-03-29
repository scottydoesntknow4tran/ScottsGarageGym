const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const bcrpyt = require('bcrpyt');

const auth = require("./firstapp/auth"); //include authenitcation protocal
const drive = require("./firstapp/drive"); //including driver functions
const { hash } = require("bcryptjs");

const users = [];

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static("firstapp"));

app.get("/", (req, res)=>{
  res.sendFile(path.resolve(), __dirname, "firstapp", "index.html" );
})

app.get("/boy", (req, res)=>{
  res.sendFile(path.resolve(), __dirname, "firstapp", "landing_page.html" );
})

app.get("/users", (req, res)=>{
  res.sendFile(path.resolve(), __dirname, "firstapp", "register.html" );
})

app.post("/login", (req, res) => {
  try {
    console.log(req.body);
    if(auth.checkpsw(req.body.email,req.body.pw)){ console.log("passed");
     // res.sendFile(path.resolve(), __dirname, "firstapp", "landing_page.html" );
      //setTimeout(() => {res.sendFile(path.resolve(), __dirname, "firstapp", "index.html" );}, 10000);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error!");
  }
});

app.post("/users/register", async (req, res) => {
  try {
    const salt = await bcrpyt.genSalt(); //generating salt
    const hashedPassword = await bcrpyt.hash(req.body.pw, salt); //creating hashed password
    const user = {email: req.body.email, password: hashedPassword };
    users.push(user);
    res.status(201).send();
    hash('password');
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error!");
  }
});

app.post("/users/login", async (req, res) => {
  const user = users.find(user =>user.email = req.body.email);
  if (user == null){
    return res.status(400).send('User not found');
  }
  try {
    if(await bcrpyt.compare(req.body.pw, user.password)){
      res.send('Successfully logged in');
    }
    else{
      res.send("Incorrect Username or Password")
    }
    console.log(req.body);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error!");
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on " + PORT));
