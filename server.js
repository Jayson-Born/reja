console.log("Web Serverni boshlash");
const express = require ("express");
const app = express ();
const hhtp = require ("http");

// 1
app.use(express.static("public"));
app.use(express.json());
app.use (express.urlencoded({extended :true}));
//2 Session

//3
app.set("views","views");
app.set("view engine", "ejs");

//4
app.get("/", function(req,res){
    res.render("harid")
});



const server = hhtp.createServer(app);
let PORT= 3000;
server.listen(PORT,function (){
    console.log(`The server is runing successfully on part:${PORT}`);
});