
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const server= express();
server.use(bodyParser.json());

const auth = require("./auth.js"); //include authenitcation protocal
const drive = require("./drive.js"); //including driver functions

const http = require('http')
const fs = require('fs')
const port = 3000

server = http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('./index.html', function(error, data){
        if(error){
            response.writeHead(404)
            response.write('Error File not found')
        }
        else{
            response.write(data)
            response.end();
        }
    })
})


server.listen(port, function(error){
    if(error){
    console.log('oops error', error)
    }
    else{
    console.log("Server is listening on port" + port)
    }
})


//server.post('/authenticate', function(request, response){
  //  auth.checkpsw();
//})

