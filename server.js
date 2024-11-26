const http =require("http");
const mongodb = require("mongodb")
let db;
const connectionString = 
"mongodb://atlas-sql-674091e50a29e9546bc16a7a-m9ipv.a.query.mongodb.net/Reja`?ssl=true&authSource=admin"
mongodb.connect(connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },

(err , client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB connection succeed");
        module.exports = client;

        const app =require("./app");
        const server = http.createServer(app);
        let PORT= 3000;
        server.listen(PORT,function (){
        console.log(`The server is runing successfully on part:${PORT}, http://localhost:${PORT}`);
    });

    }
}
)