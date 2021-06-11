// build your `/api/resources` router here

//server setup
const express = require('express')
const resources = express.Router()

//test endpoint
resources.get("/test",(req, res,next) => {
    res.json({message:"connection successful"})
})

//export
module.exports =resources