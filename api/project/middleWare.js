const validateProject=(req,res,next)=>{
    if(!req.body.project_name){//if mising project name
        res.status(400).json({message:"must provide project name"})
    }
    else{
        next()//continue
    }
}
module.exports={validateProject}