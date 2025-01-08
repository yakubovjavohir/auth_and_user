const { categoryService } = require("./category.service")

class CategoryController {
    #Categorycontroller
    constructor(Categorycontroller){
        this.#Categorycontroller = Categorycontroller
    }   

    async getAll(req, res, next){
        try {
            const data = await this.#Categorycontroller.findData()
            res.status(data.statusCode).json(data)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            const body = req.body
            const data = await this.#Categorycontroller.createData(body)
            res.status(data.statusCode).json(data)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            const id = req.params.id
            const data = await this.#Categorycontroller.deleteData(id)
            res.status(data.statusCode).json(data)
        } catch (error) {
            next(error)
        }
    }
}

const category_controller = new CategoryController(categoryService)

module.exports = {category_controller}