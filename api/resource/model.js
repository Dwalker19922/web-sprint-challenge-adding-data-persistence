// build your `Resource` model here
const db= require("../../data/dbConfig")
const getAll=()=>{
    const rows = db("resources")
    return rows
}
const getNameById=(resource_id)=>{
    const rows = db("resources")
    .where("resource_id",resource_id)
    .select("resource_name")
    return rows
}
const getNamebyName=(resource_name)=>{
    const rows=db("resources")
    .where("resource_name",resource_name)
    return rows
}
const insert= async(newPost)=>{
const rows = await db("resources")
.insert(newPost)
const id = await rows[0]
const returnData = await getNameById(id)
const data = await returnData[0]
return data
}
module.exports={
    getAll,
    insert,
    getNamebyName
}