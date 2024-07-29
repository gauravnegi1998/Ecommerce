import CustomError from "./CustomError.js";

class ErrorsHandlers {

    asyncErrorHandler(func) {
        return (req, res, next) => {
            func(req, res, next).catch(err => next(err))
        }
    }


    notFoundError(data, message, next) {
        if (!data) {
            const err = new CustomError(message, 404);
            return next(err);
        }
    }

}

const ErrorHandler = new ErrorsHandlers();
export default ErrorHandler;