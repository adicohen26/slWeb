//mongoose
const mongoose=require ("mongoose");
const express=require("express");

const app = express();

app.get("/services", (req,res) =>{
    res.json({"hello" : "hiiii"});
});

app.get("/", (req,res) =>{
    res.sendFile(__dirname+'../client/src/index.js');
});

app.listen(5000,() => {console.log("server is up on port 5000")});

//connectiong to the db
mongoose.connect("mongodb://localhost:27017/slDB");

const serviceSchema=new mongoose.Schema({
    type:String,
    name:String,
    discription:String,
    particimants:String,
    duration:String,
    imgName:String,
    recpies:String
});

const Service=mongoose.model("Service", serviceSchema);
const service=new Service({
    type:"סדנא",
    name:"ללא גלוטן",
    discription:"סדנא בה נלמד איך לארח ללא גלוטן",
    particimants:"8-16",
    duration:"3 שעות",
    imgName:"aaa.png",
    // recpies:[{name:"משקה פתיחה", imgName:"aaa"},{name:"לחם טף", imgName:"asa"}]
});

// service.save();

