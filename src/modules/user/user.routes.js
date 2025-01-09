const { Router } = require("express")
const { user_controller } = require("./user.controller")
const { auth_middlwares } = require("../../middlewares/auth.middlwares")
const { guard_middlwares } = require("../../middlewares/guard.middlwares")

const Userrouter = Router()

Userrouter.get("/",
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin", "hr"),
     user_controller.getAll.bind(user_controller))

Userrouter.post("/",
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin", "hr"),
    user_controller.create.bind(user_controller)
)

Userrouter.delete("/:id",
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin","hr"),
    user_controller.delete.bind(user_controller)
)

module.exports = { Userrouter }
