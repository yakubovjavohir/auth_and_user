const {Router} = require("express")
const {product_controller} = require("./product.controller")
const {auth_middlwares} = require("../../middlewares/auth.middlwares")
const {guard_middlwares} = require("../../middlewares/guard.middlwares")
const product_router = Router()

product_router.get("/",
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin", "hr"),
     product_controller.getAll.bind(product_controller))

product_router.post("/",
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin", "hr"),
     product_controller.create.bind(product_controller))

product_router.delete("/:id",
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin", "hr"),
     product_controller.delete.bind(product_controller))

product_router.put("/:id",
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin", "hr"),
     product_controller.update.bind(product_controller))


module.exports = {product_router}