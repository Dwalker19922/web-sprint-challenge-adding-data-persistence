const resourceM=require("./model")

const verifyUniqueName=(req,res,next)=>{

  resourceM.getNamebyName(req.body.resource_name)
    .then(rscN=>{
        console.log(rscN)
        if(rscN.length>0){/// rscN or "res" returns an array
            res.status(400).json({message:"that resource name is in use"})
        }
        else{
            next()
        }
    })
    .catch(next)
}
module.exports={
    verifyUniqueName
}