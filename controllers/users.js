const createError = require('http-errors');
const { common } = require('../helper/libs')
const done = common.done

const apiDemo = (req, res, next) => {
    try {
        let msg = "Hello this is a test."
        let data = {msg}
        if(msg){
            throw createError(402, "invalid data")
        }
        res.done(200, msg, data)
    } catch (e) {
        next(e)
    }
}

module.exports = {
    apiDemo,
}