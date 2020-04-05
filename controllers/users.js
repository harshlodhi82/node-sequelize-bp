const createError = require('http-errors');
const { common } = require('../helper/libs')
const userService = require("../services/user")


exports.apiDemo = async (req, res, next) => {
    try {
        common.validateReq(req)
        let resData = await userService.test(data)
        res.done(200, "User Added", resData)
    } catch (e) {
        next(e)
    }
}
