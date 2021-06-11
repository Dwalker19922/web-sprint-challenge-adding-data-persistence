// build your `/api/projects` router here

//router setup
const express = require('express')
const projects = express.Router()
const { validateProject } =require('./middleWare')
//import model
const projectM=require("./model")
//endpoint get
projects.get("/",(req,res,next)=>{
projectM.getAll()
.then(pjs=>{
    res.json(pjs)
})
})
//endpoint post
projects.post("/",validateProject,(req,res,next)=>{
    console.log(req.body)
    projectM.insert(req.body)
    .then(pjs=>{
        res.json(pjs)
    })
})


//export
module.exports =projects