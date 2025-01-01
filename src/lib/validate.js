const { CustomError } = require("./customError")

async function validate(schema, config) {
    const {error} = await schema.validate(config)
    if(error){
        throw new CustomError(400, error.message)
    }
}

module.exports = {validate}