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
    // Get user information
    // Get target user information
    // Send badge
    callback()
}

module.exports = {
    init,
    sendBadge
}
