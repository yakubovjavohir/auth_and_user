const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name : {type:String, required:true},
    decr : {type:String, require:true},
    price : {type:Number, default:0},
    count : {type:Number, default:0},
    categoryID : {type:mongoose.Schema.Types.ObjectId, ref:"Category"}
})

const ProductModel = mongoose.model("Product", productSchema, "products")

module.exports = {ProductModel}