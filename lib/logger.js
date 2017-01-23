'use strict'

let _verbose = false

/* eslint-disable no-console */

module.exports = {
    init: (options) =>  {
        _verbose = options.verbose
        return this
    },
    log: (error, response, url) =>  {
        let commonInfo = new Date().toLocaleString() + '\t' + url + '\t' + response.statusCode
        if (error) console.error('ERROR:\t' + commonInfo + '\t' + JSON.stringify(error))
        if (_verbose) console.log('LOG:\t' + commonInfo + '\t' + JSON.stringify(response.body))
        console.info('INFO:\t' + commonInfo)
    }
}