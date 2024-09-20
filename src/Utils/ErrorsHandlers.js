import CustomError from "./CustomError.js";


const asyncErrorHandler = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch(err => {
            return next(err)
        })
    }
}


const notFoundError = (data, message, next) => {
    if (!data) {
        console.log(data, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
        const err = new CustomError(message, 404);
        return next(err);
    }
}



export { asyncErrorHandler, notFoundError };