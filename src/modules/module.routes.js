const {Userrouter} = require("./user/user.routes")
// const {Row_router} = require("./row/row.routes")
const {product_router} = require("./product/product.routes")
const {category_router} = require("./category/category.routes")
const {authRouter} = require("./auth/auth.routes")
const {Router} = require("express")

const router = Router()

router.use("/user", Userrouter)
// router.use("/row", Row_router)
router.use("/product", product_router)
router.use("/category", category_router)
router.use("/auth", authRouter)

module.exports = {router}