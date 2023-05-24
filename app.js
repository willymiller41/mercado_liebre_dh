const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})
app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname,'./views/register.html'))
})
app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

app.get('/productCreate', (req,res)=>{
    res.sendFile(path.join(__dirname,'./views/productCreate.html'))
})

app.listen(3000, () =>{
    console.log("Servidor corriendo en el puerto 3000")
})
