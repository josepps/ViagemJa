const { ValidationError } = require("express-Validation");

module.exports = (error, req, res, next) => {
    if (error instanceof ValidationError){
        return res.status(error.statusCode).json(error);
    }

    return res.status(500).json(error);
};