require("dotenv").config()

const config = {
    PORT:Number(process.env.PORT),
    MONGO_URL:process.env.MONGO_URL,
    JWT_ACC_TOKEN:process.env.JWT_ACC_TOKEN,
    JWT_REF_TOKEN:process.env.JWT_REF_TOKEN,
    JWT_ACC_TIME:Number(process.env.JWT_ACC_TIME),
    JWT_REF_TIME:Number(process.env.JWT_REF_TIME)
}

module.exports = {config}