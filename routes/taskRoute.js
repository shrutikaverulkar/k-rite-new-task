const { getAllTask, addTask, deleteTask, updateTask } = require("../controller/taskController")

const router = require("express").Router()


router
    .get("/", getAllTask)
    .post("/task-add", addTask)
    .delete("/task-delete/:id", deleteTask)
    .put("/task-update/:id", updateTask)



module.exports = router