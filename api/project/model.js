// build your `Project` model here
const db = require("../../data/dbConfig")
const taskA = { task_description: 'Do foo', project_id: 1 }
const getAll=()=>{
   const rows= db("projects")
   return rows
}
module.exports= {getAll}