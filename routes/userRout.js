const { getAllUser, register, login, destroy, logout } = require("../controller/userController")

const router = require("express").Router()

router
    .get("/get-user", getAllUser)
    .post("/register", register)
    .post("/login", login)
    .post("/destroy", destroy)
    .post("/logout", logout)

module.exports = router