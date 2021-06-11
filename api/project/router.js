// build your `/api/projects` router here

//router setup
const express = require('express')
const projects = express.Router()
const { validateProject } =require('./middleWare')

//import model
const projectM=require("./model")

//endpoint get
projects.get("/",(req,res,next)=>{// eslint-disable-line
projectM.getAll()
.then(pjs=>{
    res.json(pjs)
})
.catch(next)
})

//endpoint post
projects.post("/",validateProject,(req,res,next)=>{
    console.log(req.body)
    projectM.insert(req.body)
    .then(pjs=>{
        res.json(pjs)
    })
    .catch(next)
})


//export
module.exports =projects