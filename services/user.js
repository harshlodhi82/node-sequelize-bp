const userModel = require("../database/models/User")

exports.test = (data) => {
    return userModel.create(data)
}