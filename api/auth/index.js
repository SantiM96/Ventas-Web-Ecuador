const jwt = require("jsonwebtoken")
const Users = require("../models/users")

const isAuthenticated = (req,res,next) =>{
    const token = req.headers.authorization
    if(!token){
        return res.sendStatus(403)
    }
    jwt.verify(token,"mi-secreto",(err,decode)=>{
        const {_id } = decode 
        Users.findOne({_id}).exec()
        .then(user=>{
            req.user = user
            next()
        })
    })
}
const hasRole = role => (req,res,next)=>{
    if(req.user.role === role){
        return next()
    }
    res.sendStatus(403)
}

module.exports = {
    isAuthenticated,
    hasRole
}