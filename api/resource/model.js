// build your `Resource` model here
const db= require("../../data/dbConfig")
const getAll=()=>{
    const rows = db("resources")
    return rows
}
module.exports={
    getAll
}