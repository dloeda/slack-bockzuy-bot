'use strict'

let api = require('../lib/bokzuy-api')

let init = () => api.init()

let sendBadge = (options, callback) => {
    //do so much stuff
    callback();
}

module.exports = {
    init: init,
    sendBadge: sendBadge
}