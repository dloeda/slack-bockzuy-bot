'use strict'

let api

const init = (options) => {
    api = options.api
    api.init(options)
}

const sendBadge = (options, callback) => {
    //do so much stuff
    callback()
}

module.exports = {
    init,
    sendBadge
}