import jwt from "jsonwebtoken";

class AuthCheck {

    static _checkAuth(req, res, next) {
        const TOKEN = req.headers?.token;
        console.log(TOKEN, 'TOKEN > TOKEN > TOKEN')
        if (TOKEN) {
            jwt.verify(TOKEN, 'jaswantkhatrokekhiladiagaintt', function (err, decoded) {
                console.log('hello', decoded)
                next();
            });
        } else {
            res.status(401).json({ status: 'error', message: "unauthorized user" })
        }

    }


}

export default AuthCheck;