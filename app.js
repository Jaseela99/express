//express is a dependency
const express = require("express"); //import express module
//const path = require("path")
//initialization
const app = express(); //create an express app and assigned to app object

//4 types of request get , post,put and delete
//route handler function for HTTP GET requests to the site root ('/').takes a request and a response object as arguments.
 
app.get(
  "/",
  (req, res) => res.send("Hello world") //sends response
  //if we have a complex file like html and css then we use
 //res.sendFile(path.join(__dirname,'index.html')) //path of index.html
); 
// app.get("/", (req, res) => res.json({ data: "Hello world" })); //json format
// app.get("/student", (req, res) => res.json({ data: "Hello world" })); //json format
 app.get("/jc", (req, res) => res.send("hello jc")); //if entered /jc

// app.get("/student/:id",(req,res)=>{
//   console.log(req.params);
//   const id =req.params.id;
//   res.send(`student id is ${id}`)
// })

var port = process.env.PORT || 9000
//starts up the server on a specified port ('3000') and prints a log comment to the console.
app.listen(port, (req, res) => console.log("running.."));
