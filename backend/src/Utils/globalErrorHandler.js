import CustomError from "./CustomError.js";

function castErrorHandler(error) {
    const ErrorValue = new CustomError(`invalid value ${error.value} for field ${error.path}!`, 400);
    return ErrorValue;
}

function duplicateErrorHandler(error) {

}

const globalErrorHandler = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "error";

    console.log(process.env, 'process.envprocess.env')

    // SET NODE_ENV=production&nodemon app.js
    if (process.env.NODE_ENV === "development") {

        if (error.code === 11000) {
            duplicateErrorHandler(error)
        }

        res.status(error?.statusCode)
            .json({
                status: error.status,
                statusCode: error.statusCode,
                message: error.message,
                stackTrace: error?.stack,
                error: error
            })


    } else if (process.env.NODE_ENV === "production") {

        if (error?.name === "CastError") {
            error = castErrorHandler(error)
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