const { CustomError } = require("../../lib/customError")
const { RowModel } = require("./entity")
const { row_service } = require("./row.service")

class RowController{
    #service
    constructor(service){
        this.#service = service
    }
    
    async create(req, res, next){
        try {
            const dto = req.body
            const result = await this.#service.createRow(dto)
            res.status(result.statusCode).json(result)
        } catch (error) {
            next(error)
        }
    }

    async getAll(req, res, next){
        try {
            const result = await this.#service.getAll()
            res.status(result.statusCode).json(result)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            const id = req.params.id

            const data = await RowModel.findById({_id:id})
            
            if (!data) {
                throw new CustomError(404, "row not found!")
            }

            const result = await this.#service.delete(id)
            res.status(result.statusCode).json(result)
        } catch (error) {
            next(error)
        }
    }
}

const row_controller = new RowController(row_service)
module.exports = {row_controller}