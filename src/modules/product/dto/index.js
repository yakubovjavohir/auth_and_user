const Joi = require("joi")

const productSchema = Joi.object({
    name:Joi.string().required(),
    desc:Joi.string().required(),
    price:Joi.string().required(),
    count:Joi.string().required(),
    categoryID:Joi.string().required()
})

module.exports = {productSchema}