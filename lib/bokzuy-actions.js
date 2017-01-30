'use strict'

let api

const _checkOptions = () => {
  throw 'bokzuy-actions: Missing Options'
}

const init = (options = _checkOptions()) => {
    api = options.api
    api.init(options)
}

const sendBadge = (options =_checkOptions(), callback) => {
    //do so much stuff
    callback()
}

module.exports = {
    init,
    sendBadge
}