import { ErrorResponse } from "../utils/helpers.js";

function notFound(req,res,next){
    const error = new ErrorResponse(`Not Found - ${req.originalUrl}`, 404);
    next(error);
}

function errorHandler (err,_,res,next) {
    const statusCode = err.statusCode || 500;
    console.log(err);
    res.status(statusCode).json({
        message: err.message,
    });
}

export { 
    notFound, 
    errorHandler
 }