const mongoose = require("mongoose")
const {config} = require("../config/config")

const mongoConnect = mongoose.connect(config.MONGO_URL).then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log("error : ", err);
})

module.exports = {mongoConnect}