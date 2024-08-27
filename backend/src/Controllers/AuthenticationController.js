import jwt from "jsonwebtoken";
import customerModel from "../Model/customerSchema.js";
import bcrypt from 'bcrypt';
import _ from "lodash";
import CustomError from "../Utils/CustomError.js";

class AuthenticationControllerMain {

    // check bcrypt token using compare

    constructor() {
        this.loginUser = this.loginUserFunction.bind(this);
    }

    _bcryptPassword(enterPassword, hashPassword, callback) {
        bcrypt.compare(enterPassword, hashPassword, function (err, result) {
            callback(result);
        });
    }

    // _generating a login token
    _generateToken(USER, callback) {
        jwt.sign(USER, process.env.SECRETE_TOKEN, { expiresIn: 60 * 60 * 60 * 60 }, function (err, token) {
            console.log(token, err, 'dddddddddddddddddd  > > > > > > >> ')
            callback(token)
        });
    }

    async loginUserFunction(req, res, next) {
        try {
            if (!(req?.body?.email && req?.body?.password)) {
                const err = new CustomError('Please provide Email ID and password.', 400);
                return next(err);
            }
            const USER = await customerModel.findOne({ email: req?.body?.email });
            if (USER?.email) {
                this._bcryptPassword(req?.body?.password, USER?.password, (result) => {
                    this._generateToken(_.pick(USER, ['_id', 'role', 'email', 'firstName', 'lastName', 'phoneNumber']), (token) => {
                        console.log(token, result, "token, result");
                        if (result && token) {
                            res.status(200).json({ status: 'ok', token, message: "Login successfully." })
                        } else {
                            const err = new CustomError('Please provide Email ID and password tt.', 400);
                            return next(err);
                        }
                    });
                });

            } else {
                const err = new CustomError('Please provide Email ID and password.', 400);
                return next(err);
            }
        } catch (err) {
            console.log(err, 'error')
        }
    }
}
const AuthenticationController = new AuthenticationControllerMain();

export default AuthenticationController;