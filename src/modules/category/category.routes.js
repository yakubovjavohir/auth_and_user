const {Router} = require("express")
const {category_controller} = require("./category.controller")
const {auth_middlwares} = require("../../middlewares/auth.middlwares")
const {guard_middlwares} = require("../../middlewares/guard.middlwares")

const category_router = Router()

category_router.get("/",
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin", "hr"),
    category_controller.getAll.bind(category_controller))


category_router.post("/",
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin", "hr"), 
    category_controller.create.bind(category_controller))



category_router.delete("/:id",
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin", "hr"),
    category_controller.delete.bind(category_controller))

module.exports = {category_router}