const {ResData} = require("../../lib/resData")
const { ProductModel } = require("./entity/product.entity")
class ProductService {
    #productservice
    constructor(productservice){
        this.#productservice = productservice
    }

    async findData(){
        const data = await this.#productservice.find().populate("categoryID").exec()
        const resdata = new ResData(200, "success", data)
        return resdata
    }

    async createData(dto){
        const data = await this.#productservice.create({
            name:dto.name,
            desc:dto.desc,
            price:dto.price,
            count:dto.count,
            categoryID:dto.categoryID
        })
        const resdata = new ResData(201, "success", data)
        return resdata
    }

    async deleteData(id){
        const data = await this.#productservice.deleteOne({_id:id})
        const resdata = new ResData(200, "delete data", data)
        return resdata
    }

    async getById(id){
        const data = await this.#productservice.findOne({_id:id})
        const resdata = new ResData(200, "succes", data)
        return resdata
    }


    async updateProduct(id, dto){
        let data  = await this.#productservice.updateOne({_id:id}, {
            name:dto.name,
            decr:dto.decr,
            price:dto.price,
            count:dto.count,
            categoryID:dto.categoryID
        })

        
        console.log(data);
        

        

        const resdata = new ResData(200, "success", data)
        return resdata

    }
}

const productService = new ProductService(ProductModel)
module.exports = {productService}