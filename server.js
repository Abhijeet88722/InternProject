const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { send } = require("process");


app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://abhijeetbasfore:abhijeet123@cluster0.pz4ax.mongodb.net/", {useNewgitUrlParser: true},{useUnifiedTopology: true});

const infoSchema = {
    name: String,
    email : String,
    phone: Number,
    message: String
}

const Info = mongoose.model("Info", infoSchema)

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let newInfo = new Info ({
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
    });
    newInfo.save();
    res.redirect('/');
    
})

app.listen(3000,function(){
    console.log("server is up");
})