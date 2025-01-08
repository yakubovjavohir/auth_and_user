const { ResData } = require("../../lib/resData")
const { CategoryModel } = require("./entity/category.entity")

class CategoryService {
    #Categoryservice
    constructor(Categoryservice){
        this.#Categoryservice = Categoryservice
    }

    async findData(){
        const data = await this.#Categoryservice.find()
        const resdata = new ResData(200, "success", data)
        return resdata
    }

    async createData(dto){
        const data = await this.#Categoryservice.create({
            name:dto.name,
        })
        const resdata = new ResData(201, "success", data)
        return resdata
    }

    async deleteData(id){
        const data = await this.#Categoryservice.deleteOne({_id:id})
        const resdata = new ResData(200, "delete data", data)
        return resdata
    }
}

const categoryService = new CategoryService(CategoryModel)

module.exports = {categoryService}