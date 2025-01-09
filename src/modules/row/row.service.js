const { ResData } = require("../../lib/resData")
const { RowModel } = require("./entity/index")


class RowService {
    #repo
    constructor(repo){
        this.#repo = repo
    }

    async createRow(dto){
        const data = await this.#repo.create({
            row:dto.row
        })
        const resdata = new ResData(201, "create", data)
        return resdata
    }

    async getAll(){
        const data = await this.#repo.find()
        const resdata = new ResData(200, "success", data)
        return resdata
    }

    async delete(id){
        const data = await this.#repo.deleteOne({_id:id})
        const resdata = new ResData(200, "success", data)
        return resdata
    }
}

const row_service = new RowService(RowModel)
module.exports = {row_service}