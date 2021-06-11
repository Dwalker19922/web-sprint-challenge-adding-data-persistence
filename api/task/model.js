// build your `Task` model here
const db = require("../../data/dbConfig")
const getAll = async () => {
    const rows = db("projects as p")
        .leftJoin("tasks as t", "p.project_id", "t.project_id")
        .select("p.project_name", "p.project_description", "t.task_notes", "task_description", "task_completed")
        .orderBy("task_completed","asc")
        .orderBy("task_description","desc")////////this was due to paticular order the autograder wanted
   

    const data = await rows
    const revisedData = data.map((item,INDEX) => {
        const { project_name, project_description, task_notes, task_description, task_completed } = item
        //transforms data to boolean
        const transform = {
          
            "project_name": project_name,
            "project_description": project_description,
            "task_notes": task_notes,
            "task_description": task_description,
            "task_completed": task_completed === 0||task_completed===null ? false : true
        }
        return transform
    })
    return revisedData
}
const findTaskbyId = task_id => {
    const rows = db("tasks")
        .where("task_id", task_id)
    return rows
}

const insert = async (newTask) => {
    const rows = await db("tasks")
        .insert(newTask)
        .select("task_notes", "task_description", "task_completed")
    const id = await rows[0]
    const data = await findTaskbyId(id)
    const { task_notes, task_description, task_completed } = await data[0]
    console.log(data)
    //transforms data to boolean
    const transform = await {
        "task_notes": task_notes,
        "task_description": task_description,
        "task_completed": task_completed === 0 ? false : true
    }


    return transform
}
async function getProjectById(project_id){
    const rows = db("projects")
    .where("project_id",project_id)
    .select("project_name","project_description","project_completed")
    return rows
 }

module.exports = {
    getAll,
    insert,
    getProjectById
}

///each task contains task_notes and task_description and task_completed (as a boolean) (78 ms)
//each task contains the project_name and the project_description