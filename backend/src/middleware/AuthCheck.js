import jwt from "jsonwebtoken";
import customerModel from "../Model/customerSchema.js";
import CustomError from "../Utils/CustomError.js";

class AuthCheck {

    static _checkAuth(req, res, next) {
        const TOKEN = req.headers?.authorization ? req.headers?.authorization?.replace('Bearer ', '') : "";
        console.log(req.headers?.authorization, TOKEN, 'TOKEN > TOKEN > TOKEN')
        if (TOKEN) {
            jwt.verify(TOKEN, 'jaswantsainikhtrokekhiladiTT', function (err, decoded) {
                if (err) {
                    res.status(401).json({ status: "error", message: "invalid token", error: err })
                    // next();
                } else {
                    const USER = customerModel.findById(decoded?._id);
                    if (!USER) {
                        return next(new CustomError('The user with the give token does not exist!', 401));
                    }
                    if (USER?.methods?.isPasswordChange(decoded.iat)) {
                        const error = new CustomError('The password has been changes recently. please login again', 401);
                        return next(error);
                    }
                    req.currentUser = decoded;
                    next();
                }
            });
        } else {
            res.status(401).json({ status: 'error', message: "unauthorized user" })
        }

    }

    static restrict(role) {
        return (req, res, next) => {
            if (req?.currentUser?.role === role) {
                next();
            } else {
                res.status(401).json({ status: 'error', message: 'unauthorized' })
            }
        }
    }


}

export default AuthCheck;