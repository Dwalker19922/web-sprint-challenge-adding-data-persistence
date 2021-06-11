// build your `/api/tasks` router here

//setup server
const express = require('express')
const tasks = express.Router()

//test endpoint
tasks.get('/test',(req, res, next)=>{
    res.json({message:"connection successful"})
    })

//export
module.exports =tasks