const {ResData} = require("../../lib/resData")
const { ProductModel } = require("./entity/product.entity")
class ProductService {
    #productservice
    constructor(productservice){
        this.#productservice = productservice
    }

    async findData(){
        const data = await this.#productservice.find().populate("categoryID").populate("rowID").exec()
        const resdata = new ResData(200, "success", data)
        return resdata
    }

    async createData(dto){
        const data = await this.#productservice.create({
            name:dto.name,
            decr:dto.decr,
            price:dto.price,
            count:dto.count,
            categoryID:dto.categoryID,
            rowID:dto.rowID
        })
        const resdata = new ResData(201, "success", data)
        return resdata
    }

    async deleteData(id){
        const data = await this.#productservice.deleteOne({_id:id})
        const resdata = new ResData(200, "delete data", data)
        return resdata
    }
}

const productService = new ProductService(ProductModel)
module.exports = {productService}