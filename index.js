const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
require("dotenv").config({ path: "./.env" })
mongoose.connect(process.env.MONGO_URL)
const cors = require("cors")


const app = express()

app.use(express.static(path.join(__dirname, "dist")))

app.use(express.json())
app.use(cors({ origin: "https://localhost:5173" }))
app.use("/api/v1/auth", require("./routes/userRout"))
app.use("/api/v1/task", require("./routes/taskRoute"))


app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
    res.status(404).json({ message: "resource Not foudn" })
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message || "Something Went Wrring" })
})

mongoose.connection.once("open", () => {
    console.log("MONGOOSE CONNECT")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})
