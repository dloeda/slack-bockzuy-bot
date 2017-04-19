'use strict'

let api
let __data__ = {
  badges: null
}

const _checkOptions = () => {
  throw 'bokzuy-actions: Missing Options'
}

const init = (options = _checkOptions()) => {
    api = options.api
    api.init(options)
    getBadges( badges => __data__.badges = badges)
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
