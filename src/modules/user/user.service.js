const { UserModel } = require("./entity/user.entity")
const { ResData } = require("../../lib/resData")
const {bcryptInstance} = require("../../lib/bcrypt")
class UserService {
    #userservice
    constructor(userservice) {
        this.#userservice = userservice
    }

    async findData() {
        const data = await this.#userservice.find()
        const resdata = new ResData(200, "success", data)
        return resdata
    }

    async createData(dto) {
        const hashedPassword = await bcryptInstance.hash(dto.password);
        const data = await this.#userservice.create({
            fullName: dto.name,
            phone: dto.phone,
            password: hashedPassword,
            role: dto.role,
        })
        const resdata = new ResData(201, "success", data)
        return resdata
    }

    async deleteData(id) {
        const data = await this.#userservice.deleteOne({ _id: id })
        console.log(data);
        
        const resdata = new ResData(200, "delete data", data)
        return resdata
    }

    async getUserById(id) {
        const user = await this.#userservice.findById(id);
        return user;
    }
}

const userService = new UserService(UserModel)
module.exports = { userService }
