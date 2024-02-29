const mongoose = require("mongoose")


const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
})


module.exports = mongoose.model("task", taskSchema)