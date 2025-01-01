const { userService } = require("./user.service")
const { jwtInstance } = require("../../lib/jwt")

class UserController {
    #userController
    constructor(userController) {
        this.#userController = userController
    }

    async getAll(req, res, next) {
        try {
            const data = await this.#userController.findData()
            res.status(data.statusCode).json(data)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            const body = req.body
            console.log(body);
            
            const data = await this.#userController.createData(body)
            res.status(data.statusCode).json(data)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            const id = req.params.id
            const data = await this.#userController.deleteData(id)
            res.status(data.statusCode).json(data)
        } catch (error) {
            next(error)
        }
    }
}

const user_controller = new UserController(userService)
module.exports = { user_controller }
