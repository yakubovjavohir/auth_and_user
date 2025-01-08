const {Router} = require("express")
const {category_controller} = require("./category.controller")
const category_router = Router()

category_router.get("/", category_controller.getAll.bind(category_controller))
category_router.post("/", category_controller.create.bind(category_controller))
category_router.delete("/:id", category_controller.delete.bind(category_controller))

module.exports = {category_router}