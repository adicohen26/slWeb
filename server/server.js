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
    // const previewOptions=[{
    //     type:"סדנא משלבת הרצאה",
    //     name: "לחם זברה סלק",
    //     productName:"סדנת דגנים",
    //     benefits:["מנקה כבד - נוגד חמצון","משפר תהליכי עיקול"],
    //     imgName:"previewImg.png"
    //  },{
    //     type:"סדנא משלבת הרצאה",
    //     name: "גרנולה מכוסמת ירוקה",
    //     productName:"סדנת קטניות",
    //     benefits:["מנקה את הכבד - נוגד חמצון","משפר תהליכי עיכול"],
    //     imgName:"previewImg.png"
    //  }
    // ];

    Review.find(function(err,resultReviews) {
        if(err){
            console.log(err);
        }else if(resultReviews){
            Preview.find(function(err,resultPreview){
                if(err){
                    console.log(err);
                }else if(resultPreview){
                    console.log(resultPreview);
                    res.send({previewOptions:resultPreview, reviews:resultReviews});
                }else{
                    res.send("there are no reviews");
                } 
            });
        }else{
            res.send("there are no reviews");
        }
    });

    // PreviewOption.find(function(err,result) {
    //     if(err){
    //         console.log(err);
    //     }else if(result){
    //         previewOptions=result;
    //     }else{
    //         // res.send("there are no reviews");
    //     }
    // });
});

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

const reviewSchema=new mongoose.Schema({
    name:String,
    role:String,
    testimonial:String,
    imgName:String
});
const Review=mongoose.model("Review", reviewSchema);

const PreviewSchema=new mongoose.Schema({
    type:String,
    name:String,
    productName:String,
    benefits:Array,
    imgName:String
});
const Preview=mongoose.model("Preview", PreviewSchema);

app.listen(5000,() => {console.log("server is up on port 5000")});

