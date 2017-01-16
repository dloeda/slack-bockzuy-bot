'use strict'

var api = require('../lib/bokzuy-api')
var user= {
    login: '****',
    pass: '****',
    id: '****'
}

api.init()

api.getUserFriends({
    user:user
}, x => console.log(x))


// do stuff