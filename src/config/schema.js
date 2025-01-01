const Joi = require("joi")

const authSchema = Joi.object({
    PORT:Joi.number().min(1000).max(9999).required(),
    MONGO_URL:Joi.string().required(),
    JWT_ACC_TOKEN:Joi.string().required(),
    JWT_REF_TOKEN:Joi.string().required(),
    JWT_ACC_TIME:Joi.number().required(),
    JWT_REF_TIME:Joi.number().required(),
})

module.exports = {authSchema}