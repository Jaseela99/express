const mongoose = require("mongoose")

const User =require("./User") //importing User model from user.js

//connecting mongoDB with mongoose
mongoose.connect("mongodb+srv://JASEELA:JASEELA@cluster0.d42fr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")


run()
async function run(){
try{
    const user = await User.create({
        name:"jaseela",
        age:22,
     hobbies:["painting","reading"]
    })
    console.log(user)
}catch(err){
    console.log(err.message)
}
/* const user = new User({
    name:"jaseela",
    age:22

})
user.save().then(()=>console.log("User saved")) */

}


//queries
async function run(){
try{
    const user = await User.find({name:"jaseela"}) //read
    const user = await User.where("name").equals("jaseela")//query
    const user = await User.insertOne({name:"ranjitha"})//update
    const user = await User.deleteOne({name:"ranjitha"})//delete
    console.log(user)
}catch(err){
    console.log(err.message)
}
}


 
