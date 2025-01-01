const { CustomError } = require("../lib/customError")

class GuardMiddlwares {
    // Multiple roles tekshiruvi
    verifyRole(...roles) {
        return function (req, res, next) {
            try {
                // Agar ro'l argumentlari bo'lmasa, qo'shimcha tekshiruv o'tkazmaydi
                if (roles.length === 0) {
                    return next()
                }

                const currentUser = req.currentUser
                console.log(currentUser);

                // Agar foydalanuvchi mavjud bo'lmasa, xatolik yuborish
                if (!currentUser) {
                    throw new CustomError(500, "currentUser is not provided")
                }

                // Agar foydalanuvchi roliga mos kelmasa, xatolik yuborish
                if (!roles.includes(currentUser.role)) {
                    throw new CustomError(403, "you can't access role")
                }

                // Agar ro'l mos kelsa, keyingi middleware yoki route handlerga o'tish
                next()
            } catch (error) {
                next(error)
            }
        }
    }
}

// Guard middleware obyektini yaratish
const guard_middlwares = new GuardMiddlwares()

module.exports = { guard_middlwares }
