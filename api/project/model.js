// build your `Project` model here
const db = require("../../data/dbConfig")

//get all projects
const getAll= async ()=>{
   const rows= db("projects")
   const data = await rows
   const revisedData=data.map(item=>{
      const {project_id,project_name,project_description,project_completed}=item
   //transforms data to boolean
      const transform ={
         "project_id":project_id,
         "project_name": project_name,
         "project_description": project_description,
         "project_completed": project_completed===0?false:true
      }
      return transform
   })
   return revisedData
}

/////getById
 async function getById(project_id){
   const rows = db("projects")
   .where("project_id",project_id)
   .select("project_name","project_description","project_completed")
   return rows
}

//post new project
const insert = async (newProject)=>{
const rows = await db("projects")
.insert(newProject)
const id = await rows[0]
const data = await getById(id)
console.log(data)
const {project_name,project_description,project_completed}= await data[0]
const returnData={
   "project_id":id,
   "project_name": project_name,
   "project_description": project_description,
   "project_completed": project_completed===0?false:true
}
return await returnData
}
module.exports= {getAll,insert}