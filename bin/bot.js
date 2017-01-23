'use strict'

const botkit = require('botkit')
const http = require('../lib/http-utils')
const logger = require('../lib/logger').init()
const request = require('request')
const bokzuy = require('../lib/bokzuy-actions')

const endpoint = 'https://api.bokzuy.com'
const token = process.env.slack_bokzuy_token

const controller = botkit.slackbot({
    debug: true
})

bokzuy.init({
    endpoint,
    http,
    logger,
    request
})

controller.setupWebserver(3000, (err, webserver) => controller.createWebhookEndpoints(webserver))

controller.on('slash_command', (bot, message) => {
    if(message.token === token) {
        if (message.command === '/badge') {
            // process message
            bokzuy.sendBadge({}, (error) => {
                if (error) bot.replyPublic(message, 'Some kind of magic is breaking our servers, try gain later')
                else bot.replyPublic(message, 'Badge sent, no regrets')
            })
        } else {
            bot.replyPrivate(message, 'I find this command... <https://media.giphy.com/media/3oAt21Fnr4i54uK8vK/giphy.gif>')
        }
    } else {
        bot.replyPrivate(message, "<https://media.giphy.com/media/RX3vhj311HKLe/giphy.gif>")
    }
})