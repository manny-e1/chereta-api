class ErrorResponse extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }

function asyncHandler(fn){
    return (req,res,next) => {
        return Promise.resolve(fn(req, res, next)).catch(next);
    }
}

export {
    ErrorResponse,
    asyncHandler
}