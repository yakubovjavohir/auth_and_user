const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

class JWT {
    constructor(accKey, refKey, accTime, refTime) {
        this.accKey = accKey;
        this.refKey = refKey;
        this.accTime = accTime;
        this.refTime = refTime;
    }

    generateAccToken(data) {
        const token = { data, exp: Math.trunc(Date.now() / 1000) + this.accTime };
        return jwt.sign(token, this.accKey);
    }

    generateRefToken(data) {
        const token = { data, exp: Math.trunc(Date.now() / 1000) + this.refTime };
        return jwt.sign(token, this.refKey);
    }

    verifyAccToken(token) {
        const { data } = jwt.verify(token, this.accKey);
        return data;
    }

    verifyRefToken(token) {
        const { data } = jwt.verify(token, this.refKey);
        return data;
    }
}

const jwtInstance = new JWT(config.JWT_ACC_TOKEN, config.JWT_REF_TOKEN, config.JWT_ACC_TIME, config.JWT_REF_TIME);

module.exports = { jwtInstance };
