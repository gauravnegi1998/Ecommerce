import jwt from "jsonwebtoken";
import customerModel from "../Model/customerSchema.js";
import bcrypt from 'bcrypt';
import _ from "lodash";

class AuthenticationControllerMain {

    // check bcrypt token using compare

    constructor() {
        this.loginUser = this.loginUserFunction.bind(this);
    }

    _bcryptPassword(enterPassword, hashPassword, callback) {
        bcrypt.compare(enterPassword, hashPassword, function (err, result) {
            console.log(result, '>>>>>>>>>>>>>dfsdfsdfsdfsdf >>>')
            callback(result);
        });
    }

    // _generating a login token
    _generateToken(USER, callback) {
        console.log(USER, 'ddddddddddddddddddddddddddd')
        jwt.sign(USER, 'jaswantsainikhtrokekhiladiTT', { expiresIn: 60 * 60 }, function (err, token) {
            console.log(token, err, 'dddddddddddddddddd')
            callback(token)
        });
    }

    async loginUserFunction(req, res) {
        try {
            const USER = await customerModel.findOne({ email: req?.body?.email });
            if (USER?.email) {
                this._bcryptPassword(req?.body?.password, USER?.password, (result) => {
                    this._generateToken(_.pick(USER, ['_id', 'role', 'email', 'firstName', 'lastName', 'phoneNumber']), (token) => {
                        console.log(token, result, "token, result");
                        if (result && token) {
                            res.status(200).json({ status: 'ok', token, message: "Login successfully." })
                        } else {
                            res.status(401).json({ status: 'error', message: "Something went wrong please try again" })
                        }
                    });
                });

            } else {
                res.status(401).json({ status: 'error', message: "username or password is wrong" })
            }
        } catch (err) {
            console.log(err, 'error')
        }
    }
}
const AuthenticationController = new AuthenticationControllerMain();

export default AuthenticationController;