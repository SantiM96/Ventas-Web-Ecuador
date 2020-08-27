const express = require("express")
const articulos = express.Router()
const artitle = require("../models/artitles")


articulos.get("/",(req,res)=>{
    artitle.find()
    .exec()
    .then(x=> res.status(200).send(x))
})


articulos.get("/:id",(req,res)=>{
    artitle.findById(req.params.id)
    .exec()
    .then(x=> res.status(200).send(x))
})

articulos.post("/",(req,res)=>{
    artitle.create(req.body)
    .then(x=> res.status(201).send(x))
})

articulos.put("/:id", (req,res)=>{
    artitle.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

articulos.delete("/:id", (req,res)=>{
    artitle.findByIdAndDelete(req.params.id)
    .then(()=> res.sendStatus(204))
})


module.exports = articulos