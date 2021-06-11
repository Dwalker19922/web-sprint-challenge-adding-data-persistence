// build your `Project` model here
const db = require("../../data/dbConfig")

//get all projects
const getAll = async () => {
   const rows = db("projects")
   const data = await rows//just a precaution

   const revisedData = data.map(item => {

      const { project_id, project_name, project_description, project_completed } = item

      const transform = {//new return obj
         "project_id": project_id,
         "project_name": project_name,
         "project_description": project_description,
         "project_completed": project_completed === 0 ? false : true  //transforms 0/1 to boolean
      }
      return transform//return to map
   })
   return revisedData//return to function
}

/////getById///helper:)
async function getById(project_id) {
   const rows = db("projects")
      .where("project_id", project_id)
      .select("project_name", "project_description", "project_completed")
   return rows
}

//post new project
const insert = async (newProject) => {
   const rows = await db("projects")
      .insert(newProject)
   const id = await rows[0]////response from server looks like [9]
   const data = await getById(id)
   const { project_name, project_description, project_completed } = await data[0]///data returns an array
   const returnData = {
      "project_id": id,
      "project_name": project_name,
      "project_description": project_description,
      "project_completed": project_completed === 0 ? false : true ////boolean again could have made this a helper function but 40 min remaining dont need to break code
   }
   return await returnData
}
module.exports = { getAll, insert }