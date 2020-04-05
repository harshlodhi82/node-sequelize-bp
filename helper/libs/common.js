const { messages, httpStatus } = require("../")
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const done = function (httpCode = httpStatus.SUCCESS, message = messages.SUCCESS, data = {}) {
    this.status(httpCode)
    this.statusMessage = message
    this.json(data)
}

const log = function (...args) {
    const env = process.env.NODE_ENV || 'development';
    if (env === 'development') {
        console.log('--------------');
        console.log(...args);
        console.log('--------------');
    }
}

const validateReq = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log2("Validation Errors>>", errors);
        throw createError(400, "Invalid Request")
    }
}

module.exports = {
    done,
    log,
    validateReq
}