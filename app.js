//express is a dependency
const express = require('express') //import express module
const app = express() //create an express app

app.get('/',(req,res)=>
   res.send("Hello world")      //sends response
)


//starts up the server on a specified port ('3000') and prints a log comment to the console.
app.listen(3000,(req,res)=>
    console.log("running..")
)