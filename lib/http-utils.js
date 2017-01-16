'use strict'

let request = require('request')

let __data__ = {
    endpoint: '',
    verbose: false
}

let _log = (error, response, url) => {
    let commonInfo = new Date().toLocaleString() + '\t' + url + '\t' + response.statusCode
    if (error) console.error('ERROR:\t' + commonInfo + '\t' + JSON.stringify(error))
    if (__data__.verbose) console.log('LOG:\t' + commonInfo + '\t' + JSON.stringify(response.body))
    console.info('INFO:\t' + commonInfo )
}

module.exports = {
    init: (options) => {
        if (options.endpoint) __data__.endpoint = options.endpoint
        if (options.verbose) __data__.verbose = options.verbose
    },

    get: (options, callback) => {
        let url = __data__.endpoint + options.service
        let headers = { "Authorization": "Basic " + new Buffer(options.user.login + ":" + options.user.pass).toString("base64") }
        
        request({
            url,
            headers
        }, (error, response, body) => {
            _log(error, response, url)
            callback(error, response)
        })
    },

    post: (options, callback) => {
        let url = __data__.endpoint + options.service
        let headers = { "Authorization": "Basic " + new Buffer(options.user.login + ":" + options.user.pass).toString("base64") }
        
        request.post({
            url,
            headers,
            form: options.body
        }, (error, response, body) => {
            _log(error, response, url)
            callback(error, response)
        })
    }
}