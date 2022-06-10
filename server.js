
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://abhijeetbasfore:WZPgZElhFjQJwo53@cluster0.pz4ax.mongodb.net/Details?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successful")
}).catch((err) => console.log(err));


const infoSchema = {
    name : String,
    email : String,
    phone : Number,
    message : String
}

const Info = mongoose.model("Info", infoSchema);


app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let newInfo = new Info ({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        message : req.body.message
    });
    newInfo.save();
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("server is running");
})