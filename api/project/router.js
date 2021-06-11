// build your `/api/projects` router here

//router setup
const express = require('express')
const projects = express.Router()
//import model
const projectM=require("./model")
//endpoints
projects.get("/",(req,res,next)=>{
projectM.getAll()
.then(pjs=>{
    res.json(pjs)
})
})

//export
module.exports =projects