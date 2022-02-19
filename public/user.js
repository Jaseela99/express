const mongoose = require("mongoose")
//adding a schema
const userSchema =new mongoose.Schema({
 name:{
     type :"string",                   //name : String
     required:true,                    //to validate a schema
     lowercase:true                    //name entered in lowercase will be validated
    },
 age :{
     type:Number,
     min :1,                             //to set min and max
     max:100

 },
 hobbies:[String],
 createdAt:{
     type:Date,
     immutable:true,  //created cannot be changed
     default:()=>Date.now()          //to have current date
 }

})

//model 

module.exports = mongoose.model("User",userSchema)   //User is the model name