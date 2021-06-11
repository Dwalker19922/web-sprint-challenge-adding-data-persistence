// build your `/api/resources` router here
const {verifyUniqueName}= require("./middleWare")
//server setup
const express = require('express')
const resources = express.Router()
const resourcesM =require("./model")

//get all resources
resources.get("/",(req, res,next) => {// eslint-disable-line
    resourcesM.getAll()
    .then(rsc=>{
        res.json(rsc)
    })
    .catch(next)
})
//post new resource
resources.post("/",verifyUniqueName,(req,res,next)=>{
resourcesM.insert(req.body)
.then(rsc=>{
    res.json(rsc)
})
.catch(next)
})

//export
module.exports =resources