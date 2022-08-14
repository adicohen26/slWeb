// react
import React from "react"; 
import App from "./components/App.jsx";
import { createRoot } from 'react-dom/client';
//mongoose
// const mongoose=require ("mongoose");
// const express=require("express");

// const app = express();

// react ui
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);

//connectiong to the db
// mongoose.connect("mongodb://localhost:27017//slDB");

// const serviceSchema=new mongoose.Schema({
//     type:String,
//     name:String,
//     discription:String,
//     particimants:String,
//     duration:String,
//     imgName:String,
//     recpies:String
// });

// const Service=mongoose.model("Service", serviceSchema);
// const service=new Service({
//     type:"סדנא",
//     name:"ללא גלוטן",
//     discription:"סדנא בה נלמד איך לארח ללא גלוטן",
//     particimants:"8-16",
//     duration:"3 שעות",
//     imgName:"aaa.png",
//     recpies:[{name:"משקה פתיחה", imgName:"aaa"},{name:"לחם טף", imgName:"asa"}]
// });

// service.save();

// app.listen(3000, () =>
//   console.log('Express server is running on localhost:3000')
// );