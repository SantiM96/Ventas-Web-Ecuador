const mongoose = require("mongoose")
const Shema = mongoose.Schema

const Users = mongoose.model("User", new Shema ({
    email: String,
    name: String,
    password: String,
    salt: String,
    rol: { type: String, default: "user"} // admin
}))

module.exports= Users