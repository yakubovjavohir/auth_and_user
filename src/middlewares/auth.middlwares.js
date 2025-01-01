const { CustomError } = require("../lib/customError");
const { jwtInstance } = require("../lib/jwt");
const { userService } = require("../modules/user/user.service");

class AuthMiddlwares {
    async verifyToken(req, res, next) {
        try {
            const token = req.headers.authorization;

            if (!token) {
                throw new CustomError(401, "No token provided");
            }

            const [type, tokenValue] = token.split(" ");
            
            if (type !== "Bearer") {
                throw new CustomError(401, "Invalid token type");
            }

            // Tokenni tasdiqlash
            const payload = await jwtInstance.verifyAccToken(tokenValue);
            console.log("User ID:", payload);

            // Foydalanuvchi ma'lumotlarini olish
            const user = await userService.getUserById(payload.id);
            if (!user) {
                throw new CustomError(404, "User not found");
            }

            req.currentUser = user;
            next();
        } catch (error) {
            next(error);
        }
    }
}

const auth_middlwares = new AuthMiddlwares();
module.exports = { auth_middlwares };
