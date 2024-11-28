const express = require("express")
const app = express();
const path = require("path");
const port = 3003;

app.use(express.static(path.join(__dirname, 'src')));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get("/index.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get("/results.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"results.html"))
})
app.listen(port,()=>{
    console.log(`WEB Server Active | Port | ${port}`)
})