class ResData {
    constructor(statusCode, message, data = null){
        this.statusCode = statusCode
        this.message = message
        this.data = data
    }
}

module.exports = {ResData}