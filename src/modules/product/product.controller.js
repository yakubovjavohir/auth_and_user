const { CustomError } = require("../../lib/customError")
const { ProductModel } = require("./entity/product.entity")
const {productService} = require("./product.service")
const { validate } = require("../../lib/validate")
const {productSchema} = require("./dto/index")
class ProductController {
    #productController
    constructor(productController){
        this.#productController = productController
    }


    async getAll(req, res, next){
        try {
            const data = await this.#productController.findData()
            res.status(data.statusCode).json(data)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            const body = req.body
            const data = await this.#productController.createData(body)
            res.status(data.statusCode).json(data)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            const id = req.params.id
            const productId = await this.#productController.getById(id)
            
            if (!productId.data) {
                throw new CustomError(404, "nod found!")
            }
            const data = await this.#productController.deleteData(productId.data)
            res.status(data.statusCode).json(data)
        } catch (error) {
            next(error)
        }
    }
    

    async update(req, res, next){
        try {
            const id = req.params.id
            const dto = req.body

            validate(productSchema, dto)

            const data = await this.#productController.updateProduct(id, dto)
            
            res.status(data.statusCode).json(data)

        } catch (error) {
            next(error)
        }
    }
}

const product_controller = new ProductController(productService)
module.exports = {product_controller}