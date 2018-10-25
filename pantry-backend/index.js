const express = require("express");


const app = express();




app.get("/", function(req,res){
    res.send("home");
})











app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server running...");
})