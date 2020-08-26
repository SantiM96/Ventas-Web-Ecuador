const express = require("express")
const articulos = express.Router()


articulos.get("/",(req,res)=>{
    res.send("hola mundo")
    console.log("hola")
})


module.exports = articulos