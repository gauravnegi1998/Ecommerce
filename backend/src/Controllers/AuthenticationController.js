import jwt from "jsonwebtoken";
import customerModel from "../Model/customerSchema.js";
import bcrypt from 'bcrypt';

class AuthenticationController {

    // check bcrypt token using compare
    static _bcryptPasswordCheck(enterPassword, hashPassword) {
        let STATUS = false;
        bcrypt.compare(enterPassword, hashPassword, function (err, result) {
            STATUS = result;
        });
        return STATUS;
    }

    // _generating a login token
    static _generateToken(USER) {
        let TOKEN_VALUE = null;
        jwt.sign(USER, 'jaswantkhatrokekhiladiagaintt', { expiresIn: 60 * 60 }, function (err, token) {
            TOKEN_VALUE = token ? token : null;
        });

        return TOKEN_VALUE;
    }

    static async loginUser(req, res, next) {
        try {
            const USER = await customerModel.findOne({ email: req?.body?.email });
            if (USER) {
                const CHECK_PASSWORD = this._bcryptPasswordCheck(req?.body?.password, USER?.password);
                const TOKEN = this._generateToken(USER);
                if (CHECK_PASSWORD) {
                    res.status(200).json({ status: 'ok', token: TOKEN, message: "Login successfully." })
                } else {
                    res.status(401).json({ status: 'error', message: "Password is incorrect" })
                }
            } else {
                res.status(401).json({ status: 'error', message: "username or password is wrong" })
            }
        } catch (err) {

        }
    }
}

export default AuthenticationController;