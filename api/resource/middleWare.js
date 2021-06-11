const resourceM=require("./model")
const verifyUniqueName=async(req,res,next)=>{
   await resourceM.getNamebyName(req.body.resource_name)
    .then(rscN=>{
        console.log(rscN)
        if(rscN.length>0){
            res.status(400).json({message:"that resource name is in use"})
        }
        else{
            next()
        }
    })
}
module.exports={
    verifyUniqueName
}