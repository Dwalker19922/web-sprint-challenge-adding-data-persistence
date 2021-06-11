// build your `/api/tasks` router here
const validateTask = require("./middleWare")
//setup server
const express = require('express')
const tasks = express.Router()
const tasksM = require("./model")

//test endpoint
tasks.get('/', (req, res, next) => {
    tasksM.getAll()
        .then(tsk => {
            res.json(tsk)
        })
})
tasks.post("/",validateTask,(req,res,next)=>{
    tasksM.insert(req.body)
    .then(tsk=>{
        res.json(tsk)
    })
})

//export

module.exports = tasks