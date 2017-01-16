'use strict'

var api = require('../lib/http-utils')
var user = '*****'
var pass = '*****'

api.init({
    endpoint: 'https://api.bokzuy.com'
})


// do stuff

api.get({
    user: user,
    pass: pass,
    service: '/1415/friends'
    },function(res) {
        console.log(res.statusCode, res.body);
});

// api.get({
//     user: user,
//     pass: pass,
//     service: '/1412'
//     }, function(res) {
//         console.log(res.statusCode, res.body);
// });

// api.get({
//     user: user,
//     pass: pass,
//     service: '/1415/groups'
//     }, function(res) {
//         console.log(res.statusCode, res.body);
// });

// api.get({
//     user: user,
//     pass: pass,
//     service: '/1413/bokies'
//     }, function(res) {
//         console.log(res.statusCode, res.body);
// });

// api.post({
//     user: user,
//     pass: pass,
//     service: '/1413/bokies',
//     body: {
//         badgeId:17,
//         comment:'Testing testing....'
//     }
//     }, function(res) {
//         console.log(res.statusCode, res.body);
// });

// api.post({
//     user: user,
//     pass: pass,
//     service: '/bokies/2798/comment',
//     body: {
//         comment:'Testing again....'
//     }
//     }, function(res) {
//         console.log(res.statusCode, res.body);
// });

// api.post({
//     user: user,
//     pass: pass,
//     service: '/bokies/2798/deserve'
//     }, function(res) {
//         console.log(res.statusCode, res.body);
// });

// api.post({
//     user: user,
//     pass: pass,
//     service: '/bokies/2798/no-deserve',
//     }, function(res) {
//         console.log(res.statusCode, res.body);
// });


//anon badge w bot logged @bokzuy


// api.get({
//     user: user,
//     pass: pass,
//     service: '/badges'
//     }, function(res) {
//         console.log(res.statusCode, res.body);
// });