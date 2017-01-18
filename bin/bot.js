'use strict'

let botkit = require('botkit')
let bokzuy = require('../lib/bokzuy-actions')

let token = process.env.slack_bokzuy_token;
let controller = botkit.slackbot({
    debug: true
})

bokzuy.init()

controller.setupWebserver(3000, (err, webserver) => controller.createWebhookEndpoints(webserver))

controller.on('slash_command', (bot, message) => {
    if(message.token === token) {
        if (message.command === '/badge') {
            // process message
            bokzuy.sendBadge({}, (error, response) => {
                if (error) Bok.replyPublic(message, 'Some kind of magic is breaking our servers, try gain later')
                else bot.replyPublic(message, 'Badge sent, no regrets')
            })
        } else {
            bot.replyPrivate(message, 'I find this command... <https://media.giphy.com/media/3oAt21Fnr4i54uK8vK/giphy.gif>')
        }
    } else {
        bot.replyPrivate(message, "<https://media.giphy.com/media/RX3vhj311HKLe/giphy.gif>")
    }
})