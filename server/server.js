//mongoose
const mongoose=require ("mongoose");
const express=require("express");

const app = express();

//connectiong to the db
mongoose.connect("mongodb://localhost:27017/slDB");

app.get("/services/workshops", (req,res) =>{
    Service.find({type : "workshop"},function(err,result) {
        if(err){
            console.log(err);
        }else if(result){
            res.json(result);
        }else{
            res.send("there are no workshops");
        }
    });
});

app.get("/services/courses", (req,res) =>{
    Service.find({type : "course"},function(err,result) {
        if(err){
            console.log(err);
        }else if(result){
            res.json(result);
        }else{
            res.send("there are no courses");
        }
    });
});

app.get("/services/boutiqueBooths", (req,res) =>{
    Service.find({type : "boutiqueBooth"},function(err,result) {
        if(err){
            console.log(err);
        }else if(result){
            res.json(result);
        }else{
            res.send("there are no boutique booths");
        }
    });
});

app.get("/", (req,res) =>{
    // res.sendFile(__dirname+'../client/src/index.js');
});

app.listen(5000,() => {console.log("server is up on port 5000")});


const serviceSchema=new mongoose.Schema({
    type:String,
    name:String,
    discription:String,
    particimants:Array,
    duration:String,
    imgName:String,
    specificData:JSON
});

const Service=mongoose.model("Service", serviceSchema);
