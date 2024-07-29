import jwt from "jsonwebtoken";

class AuthCheck {

    static _checkAuth(req, res, next) {
        const TOKEN = req.headers?.authorization ? req.headers?.authorization?.replace('Bearer ', '') : "";
        console.log(req.headers?.authorization, TOKEN, 'TOKEN > TOKEN > TOKEN')
        if (TOKEN) {
            jwt.verify(TOKEN, 'jaswantsainikhtrokekhiladiTT', function (err, decoded) {
                console.log('hello', err, decoded)
                if (err) {
                    res.status(401).json({ status: "error", message: "invalid token" })
                } else {
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