import express from "express";
import bodyParser from "body-parser";
import date from "./date.js";
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
let newItems=["Study","Anime","Eat"];
let newItem="";
app.get("/",function(req,res){
  
  let day=date();
  res.render("list",{dayType: day, newLiItem: newItems});
})
app.post("/",function (req,res) {
  newItem=req.body.newItem;
  newItems.push(newItem);
  res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server is running on port 3000");
})
