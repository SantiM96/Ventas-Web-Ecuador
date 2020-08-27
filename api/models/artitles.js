const mongoose = require("mongoose")
const Shema = mongoose.Schema

const artitles = mongoose.model("artitle", new Shema ({
    titulo: String,
    desc: String,
    img: String,
    precio: Number,
    cantidad: Number
}))

module.exports= artitles