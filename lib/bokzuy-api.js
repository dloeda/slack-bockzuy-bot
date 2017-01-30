'use strict'

let _http

const _checkOptions = () => {
  throw 'bokzuy-api: Missing Options'
}

const init = (options = _checkOptions()) => {
  _http = options.http
  _http.init(options)
}

const _createGetCall = (service) =>
  (data = _checkOptions(), callback) => {
    let serviceCall = service.reduce((a, b) =>
      a + (b.match(/(user)\./) ? data[b.split('.')[0]][b.split('.')[1]] : b)
    )
    _http.get({
      user: data.user,
      service: serviceCall
    }, (error, res) => callback(error, { statusCode: res.statusCode, body: res.body }))
  }

const _createPostCall = (service) =>
  (data = _checkOptions(), callback) => {
    let serviceCall = service.reduce((a, b) =>
      a + (b.match(/(user)\./) ? data[b.split('.')[0]][b.split('.')[1]] : b)
    )
    _http.post({
      user: data.user,
      body: data.body,
      service: serviceCall
    }, (error, res) => callback(error, { statusCode: res.statusCode, body: res.body }))
  }


module.exports = {
  init,
  getBadges: _createGetCall([ '/badges' ]),
  getUserBookies: _createGetCall(['/', 'user.id', '/bokies']),
  getUserInfo: _createGetCall(['/', 'user.id']),
  getUserFriends: _createGetCall(['/', 'user.id', '/friends']),
  getUserGroups: _createGetCall(['/', 'user.id', '/groups']),
  setBookieComment: _createPostCall(['/bokies/', 'bookie.id', '/comment']),
  setBookieDeserve: _createPostCall(['/bokies/', 'bookie.id', '/deserve']),
  setBookieNoDeserve: _createPostCall(['/bokies/', 'bookie.id', '/no-deserve']),
  setUserBookie: _createPostCall(['/', 'bookie.id', '/bokies'])
}