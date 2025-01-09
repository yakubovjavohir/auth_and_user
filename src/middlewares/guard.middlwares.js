const { CustomError } = require("../lib/customError")

class GuardMiddlwares {

    verifyRole(...roles) {
        return function (req, res, next) {
            try {
                if (roles.length === 0) {
                    return next()
                }

                const currentUser = req.currentUser
                console.log(currentUser);

                if (!currentUser) {
                    throw new CustomError(500, "currentUser is not provided")
                }


                if (!roles.includes(currentUser.role)) {
                    throw new CustomError(403, "you can't access role")
                }

                next()
            } catch (error) {
                next(error)
            }
        }
    }
}

const guard_middlwares = new GuardMiddlwares()

module.exports = { guard_middlwares }
