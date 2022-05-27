
const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(express.static((__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/" , function(req , res){
    res.sendFile((__dirname + "/index.html"));
})

app.post("/" , function(req , res){
    console.log(req.body);
})

app.listen("3000" , function(){
    console.log("running in port 3000");
})