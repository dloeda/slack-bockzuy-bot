'use strict'

const botkit = require('botkit')
const http = require('../lib/http-utils')
const logger = require('../lib/logger').init({verbose: true})
const request = require('request')
const bokzuy = require('../lib/bokzuy-actions')
const api = require('../lib/bokzuy-api')

const endpoint = 'https://api.bokzuy.com'
const token = process.env.slack_bokzuy_token

const controller = botkit.slackbot({
    debug: true
})

bokzuy.init({
    api,
    endpoint,
    http,
    logger,
    request
})

controller.setupWebserver(3000, (err, webserver) => controller.createWebhookEndpoints(webserver))

controller.on('slash_command', (bot, message) => {
    if(message.token === token) {
        if (message.command === '/badge') {
            var parsedMessage = message.replace(/\\badge\ ([\w]+)\ ([\w]+)\ ([\w]+)?\ (\".+\")/, '$1,$2,$3,$4').split(',')
            if (/^\/badge\ register/.test(message.text)) {
                bokzuy.registerUser({
                    user: parsedMessage[1],
                    pass: parsedMessage[2]
                }, (error) => {
                    if (error) bot.replyPublic(message, 'Some kind of magic is breaking our servers, try gain later')
                    else bot.replyPublic(message, 'User registered, send a badge now!')
                })
            } else {
                // process message
                bokzuy.sendBadge({
                    name: parsedMessage[0],
                    badge: parsedMessage[1],
                    group: parsedMessage[2],
                    comment: parsedMessage[3]
                }, (error) => {
                    if (error) bot.replyPublic(message, 'Some kind of magic is breaking our servers, try gain later')
                    else bot.replyPublic(message, 'Badge sent, no regrets')
                })
            }
        } else {
            bot.replyPrivate(message, 'I find this command... <https://media.giphy.com/media/3oAt21Fnr4i54uK8vK/giphy.gif>')
        }
    } else {
        bot.replyPrivate(message, "<https://media.giphy.com/media/RX3vhj311HKLe/giphy.gif>")
    }
})