const express = require("express");
const app = express();
const path = require("path");

app.use("/static" , express.static("static"));
app.set("view engine" , "pug");
app.set("views" , path.join( __dirname , "views"));
app.use(express.urlencoded());

app.get("/" , (req , res)=>{
    console.log("Enter the Home page");
    res.status(200);
    res.render("index.pug");
})

app.listen(80 , ()=>{
    console.log("Game is Started");
});