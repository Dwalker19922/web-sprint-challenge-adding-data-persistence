// build your `Resource` model here
const db= require("../../data/dbConfig")
//get all
const getAll=()=>{
    const rows = db("resources")
    return rows
}
///just a helper
const getNameById=(resource_id)=>{
    const rows = db("resources")
    .where("resource_id",resource_id)
    .select("resource_name")
    return rows
}
///anouther middleware helper
const getNamebyName=(resource_name)=>{
    const rows=db("resources")
    .where("resource_name",resource_name)
    return rows
}
////post
const insert= async(newPost)=>{
const rows = await db("resources")
.insert(newPost)
const id = await rows[0]////retrieves id from res

const returnData = await getNameById(id)///obtains full data from res id
const data = await returnData[0]
return data
}

module.exports={
    getAll,
    insert,
    getNamebyName
}