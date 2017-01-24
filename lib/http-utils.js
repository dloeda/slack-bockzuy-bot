'use strict'

let _logger;
let _request;

let __data__ = {
  endpoint: ''
}

const _checkOptions = () => {
  throw 'http-utils: Missing Options'
}

const init = (options = _checkOptions()) => {
  __data__.endpoint = options.endpoint
  _logger = options.logger
  _request = options.request
}

const _getHeaders = (user) => ({ Authorization: 'Basic ' + new Buffer(user.login + ':' + user.pass).toString('base64') })

const get = (options = _checkOptions(), callback) => {
  
  let url = __data__.endpoint + options.service
  let headers = _getHeaders(options.user)

  _request.get({
    headers,
    url
  }, (error, response) => {
    _logger.log(error, response, url)
    callback(error, response)
  })
}

const post = (options = _checkOptions(), callback) => {
  let url = __data__.endpoint + options.service
  let headers = _getHeaders(options.user)

  _request.post({
    form: options.body,
    headers,
    url
  }, (error, response) => {
    _logger.log(error, response, url)
    callback(error, response)
  })
}

module.exports = {
  init,
  get,
  post
}