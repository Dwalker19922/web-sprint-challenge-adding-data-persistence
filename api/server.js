// build your server here and require it from index.js

//-!!above!!please show me how to do this as i cannot require server from index.js but i can require server in index.js!!


//set up server
const express = require('express')
const server = express()
server.use(express.json())

//import routers
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

//use routers
server.use("/api/projects",projectRouter)
server.use("/api/resources",resourceRouter)
server.use("/api/tasks",taskRouter)

// test endpoint
server.get("/api",(req,res,next)=>{
res.json({message:"hello world from server"})
})

//export
module.exports =server