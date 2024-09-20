import _ from "lodash";
import CustomError from "./CustomError.js";

function castErrorHandler(error) {
    const ErrorValue = new CustomError(`invalid value ${error.value} for field ${error.path}!`, 400);
    return ErrorValue;
}

function duplicateErrorHandler(error) {
    const KEYS = _.keys(error?.keyValue)?.length > 0 ? _.keys(error?.keyValue) : "";
    if (KEYS) {
        const msg = `${KEYS[0]} can't be duplicate please change. { duplicate value: ${error?.keyValue[KEYS[0]]} }`;
        return new CustomError(msg, 500);
    }
}

function validationErrorHandler(error) {
    let ERRORS = [];
    _.forEach(_.entries(error?.errors), ([key, value], i) => {
        ERRORS = [...ERRORS, { field: key, message: value?.message }]
    });

    return new CustomError((ERRORS?.length > 1) ? JSON.stringify(ERRORS) : JSON.stringify(ERRORS[0]), 400);

}

const globalErrorHandler = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "error";


    // SET NODE_ENV=production&nodemon app.js
    if (process.env.NODE_ENV === "development") {
        if (error?.name === "CastError") error = castErrorHandler(error);
        if (error.code === 11000) error = duplicateErrorHandler(error);
        if (error.name === 'ValidationError') error = validationErrorHandler(error);

        res.status(error?.statusCode)
            .json({
                status: error.status,
                statusCode: error.statusCode,
                message: error.message,
                stackTrace: error?.stack,
                error: error
            });

    } else if (process.env.NODE_ENV === "production") {

        if (error?.name === "CastError") {
            error = castErrorHandler(error);
        }
        if (error.OperationalError) {
            res.status(error?.statusCode)
                .json({
                    status: error.status,
                    statusCode: error.statusCode,
                    message: error.message,
                });
        } else {
            res.status(500).json({ status: 'error', error: error, message: "something went wrong! please try again later" });
        }

    }


}

export default globalErrorHandler;