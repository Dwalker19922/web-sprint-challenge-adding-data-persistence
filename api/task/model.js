// build your `Task` model here
const db =require("../../data/dbConfig")
const getAll=async()=>{
    const rows = db("tasks")
    const data = await rows
    const revisedData=data.map(item=>{
        const {task_notes,task_description,task_completed}=item
     //transforms data to boolean
        const transform ={
           "task_notes": task_notes,
           "task_description": task_description,
           "task_completed": task_completed===0?false:true
        }
        return transform
     })
    return revisedData
}
module.exports={
    getAll
}

///each task contains task_notes and task_description and task_completed (as a boolean) (78 ms)
//each task contains the project_name and the project_description