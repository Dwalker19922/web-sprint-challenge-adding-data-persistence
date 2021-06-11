const projectM = require("./model")
const validateProject=(req,res,next)=>{
    if(!req.body.project_name){
        res.status(400).json({message:"must provide project name"})
    }
    else{
        next()
    }
}
module.exports={validateProject}