// //express is a dependency
// const express = require("express"); //import express module
// const path = require("path")
// //initialization
// const app = express(); //create an express app and assigned to app object

// //middleware to run static, it is a function which can change access to request and response
// app.use(express.static(path.join(__dirname,"public")))





// //4 types of request get , post,put and delete
// //route handler function for HTTP GET requests to the site root ('/').takes a request and a response object as arguments.
 
// app.get(
//   "/",
//   (req, res) => res.send("Hello world") //sends response
//   //if we have a complex file like html and css then we use
//  //res.sendFile(path.join(__dirname,'index.html')) //path of index.html
// ); 
// // app.get("/", (req, res) => res.json({ data: "Hello world" })); //json format
// // app.get("/student", (req, res) => res.json({ data: "Hello world" })); //json format
//  app.get("/jc", (req, res) => res.send("hello jc")); //if entered /jc

// /* app.get("/student/:id",(req,res)=>{
//   console.log(req.params);
//   const id =req.params.id;
//   res.send(`student id is ${id}`)
// }) */


// //to access 
// app.get("/jc/:name",(req,res)=>{
//   res.send("hello"+req.params.name)
// })

// var port = process.env.PORT || 9000
// //starts up the server on a specified port ('3000') and prints a log comment to the console.
// app.listen(port, (req, res) => console.log("running.."));




const express = require ("express")
const path = require('path')//path is a nodejs module

const app = express()

//app.get('/',(req,res)=>res.send("hello world!!"))

//app.get('/',(req,res)=>res.sendFile(path.join(__dirname,"public","index.html")))//to render a html file

app.use(express.static(path.join(__dirname,"public"))) //toset static folders

const PORT =process.env.PORT ||9000; //to check there are other available ports

app.listen(PORT,()=>console.log("server is running.."))

//params
app.get('/user/:id', function (req, res) {
    res.send('user ' + req.params.id)
  })


//post
app.use(express.json()) // for parsing application/json


app.post('/profile', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})
//put

app.put('/', function (req, res) {
    res.send('PUT request to homepage')
  })