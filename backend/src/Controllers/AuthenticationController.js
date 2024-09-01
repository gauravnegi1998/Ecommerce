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
        jwt.sign(USER, process.env.SECRETE_TOKEN, { expiresIn: 60 * 60 * 10 }, function (err, token) {
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
            const USER = await customerModel.findOne({ email: req?.body?.email }).select(['-__v', '-meta',]);
            if (USER?.email) {

                const USER_DATA = _.pick(USER, ['_id', 'createdAt', 'zipCode', 'address', 'country', "address2", "birthday", "city", "state", 'role', 'isUserLogin', 'email', 'firstName', 'lastName', 'phoneNumber']);
                console.log(USER_DATA, 'USER_DATAUSER_DATAUSER_DATA')
                this._bcryptPassword(req?.body?.password, USER?.password, (result) => {
                    this._generateToken(USER_DATA, (token) => {
                        console.log(token, result, "token, result");
                        if (result && token) {
                            res.status(200).json({
                                status: 'ok', token, expireDate: (60 * 60 * 4),
                                userData: USER_DATA, message: "Login successfully."
                            });
                        } else {
                            const err = new CustomError('Please provide Email ID and password .', 400);
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