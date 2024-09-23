import jwt from "jsonwebtoken";
import customerModel from "../Model/customerSchema.js";
import bcrypt from 'bcrypt';
import _ from "lodash";
import CustomError from "../Utils/CustomError.js";

class AuthenticationController {

    // check bcrypt token using compare

    constructor() {
        // this.loginUser = this.loginUserFunction.bind(this);
    }

    // _bcryptPassword(enterPassword, hashPassword, callback) {
    //     bcrypt.compare(enterPassword, hashPassword, function (err, result) {
    //         callback(result);
    //     });
    // }

    // // _generating a login token
    // _generateToken(USER, callback) {
    //     jwt.sign(USER, process.env.SECRETE_TOKEN, { expiresIn: 60 * 60 * 10 }, function (err, token) {
    //         console.log(token, err, 'dddddddddddddddddd  > > > > > > >> ')
    //         callback(token)
    //     });
    // }

    static loginUser = async (req, res, next) => {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', 'dddd', process.env.SECRETE_TOKEN)
        try {
            if (!(req?.body?.email && req?.body?.password)) {
                const err = new CustomError('Please provide Email ID and password.', 400);
                return next(err);
            }
            const USER = await customerModel.findOne({ email: req?.body?.email }).select(['-__v', '-meta',]);
            if (USER?.email) {

                const USER_DATA = _.pick(USER, ['_id', 'createdAt', 'zipCode', 'address', 'country', "address2", "birthday", "city", "state", 'role', 'isUserLogin', 'email', 'firstName', 'lastName', 'phoneNumber']);
                const match = await bcrypt.compare(req?.body?.password, USER?.password);
                if (match) {
                    jwt.sign(USER_DATA, process.env.SECRETE_TOKEN, { expiresIn: 60 * 60 * 10 }, function (err, token) {
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

                }

                // res.status(200).json({
                //     status: 'ok', token: "dddddddddddddddddddddddddddddd", expireDate: (60 * 60 * 4),
                //     userData: USER_DATA, message: "Login successfully."
                // });

                // this._generateToken(USER_DATA, (token) => {

                // });
                // this._bcryptPassword(req?.body?.password, USER?.password, (result) => {

                // });

            } else {
                const err = new CustomError('Please provide Email ID and password.', 400);
                return next(err);
            }
        } catch (err) {
            console.log(err, 'error')
        }
    }
}

export default AuthenticationController;