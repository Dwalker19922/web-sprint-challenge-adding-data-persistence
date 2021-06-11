const tasksM = require("./model")

const validateTask = (req, res, next) => {

    const { task_description, project_id } = req.body

    if (!task_description || !project_id) {//error check
        res.status(400).json({ message: "please include a valid task description and project id" })//err response
    }

    else {
        tasksM.getProjectById(project_id)//helper to verify
            .then(prj => {
                console.log(prj.length)
                prj.length === 0 ? res.status(400).json({ message: "not a valid project id" }) : next()///again returns an array
            })
            .catch(next)
    }
}
module.exports = validateTask