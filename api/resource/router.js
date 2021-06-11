// build your `/api/resources` router here

//server setup
const express = require('express')
const resources = express.Router()
const resourcesM =require("./model")

//test endpoint
resources.get("/",(req, res,next) => {
    resourcesM.getAll()
    .then(rsc=>{
        res.json(rsc)
    })
})
resources.post("/",(req,res,next)=>{
resourcesM.insert(req.body)
.then(rsc=>{
    res.json(rsc)
})

})

//export
module.exports =resources