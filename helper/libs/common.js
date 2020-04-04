const { messages, httpStatus } = require("../")

function done(httpCode = httpStatus.SUCCESS, message = messages.SUCCESS, data={})  {
    this.status(httpCode)
    this.statusMessage = message
    this.json(data)
}

module.exports = {
    done
}