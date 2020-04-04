const createError = require('http-errors');
const { messages, httpStatus } = require("../helper")
const { common } = require("../helper/libs")

const doneInit = (req, res, next)=>{
    res.done = common.done
    next()
}

const catch404 = (req, res, next) => {
    next(createError(httpStatus.NOT_FOUND, messages.PATH_NOT_FOUND));
}

const errorHandeler = (err, req, res, next) => {
    res.statusMessage = err.message || messages.UNKNOWN_ERROR
    res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR);
    res.json(err)
}

module.exports = {
    doneInit,
    catch404,
    errorHandeler
}