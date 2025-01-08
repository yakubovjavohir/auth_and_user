const {Router} = require("express")
const {product_controller} = require("./product.controller")
const product_router = Router()

product_router.get("/", product_controller.getAll.bind(product_controller))
product_router.post("/", product_controller.create.bind(product_controller))
product_router.delete("/:id", product_controller.delete.bind(product_controller))

module.exports = {product_router}