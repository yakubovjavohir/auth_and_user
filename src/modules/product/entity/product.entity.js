const { ref } = require("joi")
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name : {type:String, required:true},
    decr : {type:String, require:true},
    price : {type:Number, required:true, default:0},
    count : {type:Number, required:true, default:0},
    categoryID : {type:mongoose.Schema.Types.ObjectId, ref:"Category"},
    rowID : {type:mongoose.Schema.Types.ObjectId, ref:"Row"}
})

const ProductModel = mongoose.model("Product", productSchema, "products")

module.exports = {ProductModel}