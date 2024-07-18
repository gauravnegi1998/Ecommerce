import jwt from "jsonwebtoken";

class AuthCheck {


    static _checkAuth(req, res, next) {

        jwt.verify(TOKEN, 'jaswantkhatrokekhiladiagaintt', function (err, decoded) {
            console.log(decoded, '>>>>>>>>>>>>>>>>>>>>')
            next()
        });

    }


}

export default AuthCheck;