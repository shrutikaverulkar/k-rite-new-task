const asyncHandler = require("express-async-handler")
const Task = require("../modal/Task")


exports.getAllTask = asyncHandler(async (req, res) => {

    const result = await Task.find()

    res.json({ message: "Task Fetch Success", result })
})



exports.addTask = asyncHandler(async (req, res) => {
    await Task.create(req.body)

    res.status(201).json({ message: "Task Added Success" })

})


exports.deleteTask = asyncHandler(async (req, res) => {

    const { id } = req.params

    await Task.findByIdAndDelete(id)

    res.json({ message: "Task Delete Success" })
})



exports.updateTask = asyncHandler(async (req, res) => {

    const { id } = req.params

    await Task.findByIdAndUpdate(id, req.body)

    res.json({ message: "Task Update Success" })
})