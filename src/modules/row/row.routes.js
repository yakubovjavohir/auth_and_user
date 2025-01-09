const {Router} = require("express")
const {row_controller} = require("./row.controller")
const {auth_middlwares} = require("../../middlewares/auth.middlwares")
const {guard_middlwares} = require("../../middlewares/guard.middlwares")
const row_router = Router()

row_router.post("/", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin", "hr"), 
    row_controller.create.bind(row_controller)
)

row_router.get("/", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin", "hr"), 
    row_controller.getAll.bind(row_controller)
)

row_router.delete("/:id", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin", "hr"), 
    row_controller.delete.bind(row_controller)
)
module.exports = {row_router}