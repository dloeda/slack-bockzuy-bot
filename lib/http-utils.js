'use strict'

let _log;
let _request;

let __data__ = {
  endpoint: ''
}

const init = (options = {}) => {
  if (options.endpoint) __data__.endpoint = options.endpoint
  if (options.logger) _log = options.logger
  if (options.request) _request = options.request
}

const get = (options = {}, callback) => {
  let url = __data__.endpoint + options.service
  let headers = { 'Authorization': 'Basic ' + new Buffer(options.user.login + ':' + options.user.pass).toString('base64') }

  _request.get({
    url,
    headers
  }, (error, response) => {
    _log(error, response, url)
    callback(error, response)
  })
}

const post = (options = {}, callback) => {
  let url = __data__.endpoint + options.service
  let headers = { 'Authorization': 'Basic ' + new Buffer(options.user.login + ':' + options.user.pass).toString('base64') }

  _request.post({
    url,
    headers,
    form: options.body
  }, (error, response) => {
    _log(error, response, url)
    callback(error, response)
  })
}

module.exports = {
  init,
  get,
  post
}