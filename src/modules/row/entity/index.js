const mongoose = require("mongoose")

const rowSchema = new mongoose.Schema({
    row:{type:String, required:true}
})

const RowModel = mongoose.model("Row", rowSchema, "rows")

module.exports = {RowModel}