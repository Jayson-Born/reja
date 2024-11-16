console.log("Web Serverni boshlash");
const express = require ("express");
const app = express ();
const hhtp = require ("http");
const fs = require("fs");

let user;
fs.readFile ("database/user.json", "utf8", (err,data)=>{
    if (err){
        console.log("ERROR:", err);
    }
})
// 1
app.use(express.static("public"));
app.use(express.json());
app.use (express.urlencoded({extended :true}));
//2 Session 

//3
app.set("views","views");
app.set("view engine", "ejs");

//4
app.post ("/create- item", (req, res)=>{
    console.log(req.body);
    res.json({test:"success"});
})
app.get ("/author", (req,res) => {
    res.render("author", {user:user})}
);




app.get("/", function(req,res){
    res.render("harid")
});



const server = hhtp.createServer(app);
let PORT= 3000;
server.listen(PORT,function (){
    console.log(`The server is runing successfully on part:${PORT}`);
});