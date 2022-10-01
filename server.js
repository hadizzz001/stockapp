const express = require("express");
const app = express();

app.set("view engine","ejs");

app.get('/',(erq,res)=>{
    res.render("index");
})


const server = app.listen(process.env.PORT || 3000);
const portNumber = server.address().port;
console.log(`port is run at ${portNumber}`);

