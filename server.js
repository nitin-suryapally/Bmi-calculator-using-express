
const express = require("express");

const bodyParser = require("body-parser");
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM(__dirname + "/index.html");

const jquery = require('jquery')(dom.window);

const app = express();
app.use(express.static((__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/" , function(req , res){
    res.sendFile((__dirname + "/index.html"));
})

app.post("/" , function(req , res){
    console.log(req.body);
    var w =parseFloat(req.body.weight);
    console.log(w);
    var h = parseFloat(req.body.height);
    console.log(h);
    var bmi = (w/(h*h))*10000;
    res.send("Your BMI is " + bmi);
})

// function result(){
//     jquery(".cal-btn").click(function(){
//         jquery("#result").text("Your BMI is " + bmi);
//     });


app.listen("3000" , function(){
    console.log("running in port 3000");
})