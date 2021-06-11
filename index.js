// import server
const server =require('./api/server')
// setup port
const PORT = process.env.PORT || 5000

// server listen
server.listen(PORT,()=>{
console.log(`server listening on ${PORT}`)
})

//test endpoint
server.get('/',(req, res,next)=>{
res.json({message:"hello world from index"})
})

