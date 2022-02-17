//express is a dependency
const express = require("express"); //import express module
//initialization
const app = express(); //create an express app and assigned to app object

//middlewares
app.use(express.json())
 

//4 types of request get , post,put and delete
//route handler function for HTTP GET requests to the site root ('/').takes a request and a response object as arguments.
 
//three ways to accept a request are params, query and body
app.get(
  "/",
  (req, res) => res.send("Hello world") //sends response
); 
app.get("/", (req, res) => res.json({ data: "Hello world" })); //json format
app.get("/student", (req, res) => res.json({ data: "Hello world" })); //json format

app.get("/student/:id",(req,res)=>{
  console.log(req.params);
  const id =req.params.id;
  res.send(`student id is ${id}`)
})
 app.get("/student",(req,res)=>{
  console.log(req.query);
  const id =req.query.name;
  res.send(`student name is ${name}`)
})
app.post("student",(req,res)=>{
  console.log(req.body)
})

//starts up the server on a specified port ('3000') and prints a log comment to the console.
app.listen(9000, (req, res) => console.log("running.."));
