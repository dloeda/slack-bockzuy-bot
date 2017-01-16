'use strict'

var http = require('../lib/http-utils')

let init = () =>
    http.init({
        endpoint: 'https://api.bokzuy.com',
        verbose: true
    })

let _createGetCall = (service) =>
    (data, callback) => {
        let serviceCall = service.reduce((a, b) =>
            a + (b.match(/(user)\./) ? data[b.split('.')[0]][b.split('.')[1]] : b)
        )
        http.get({
            user: data.user,
            service: serviceCall
        },(error, res) => callback(error, { statusCode: res.statusCode, body: res.body}))
    }

let _createPostCall = (service) =>
    (data, callback) => {
        let serviceCall = service.reduce((a, b) =>
            a + (b.match(/(user)\./) ? data[b.split('.')[0]][b.split('.')[1]] : b)
        )
        http.post({
            user: data.user,
            body: data.body,
            service: serviceCall
        }, (error, res) => callback(error, { statusCode: res.statusCode, body: res.body}))
    }


module.exports = {
    init: init,
    getBadges: _createGetCall(['/badges']),
    getUserBookies: _createGetCall(['/', 'user.id', '/bokies']),
    getUserInfo: _createGetCall(['/', 'user.id']),
    getUserFriends: _createGetCall(['/', 'user.id', '/friends']),
    getUserGroups: _createGetCall(['/', 'user.id', '/groups']),
    setBookieComment: _createPostCall(['/bokies/', 'bookie.id', '/comment']),
    setBookieDeserve: _createPostCall(['/bokies/', 'bookie.id', '/deserve']),
    setBookieNoDeserve: _createPostCall(['/bokies/', 'bookie.id', '/no-deserve']),
    setUserBookie: _createPostCall(['/', 'bookie.id', '/bokies'])
}