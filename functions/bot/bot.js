const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const dotenv = require('dotenv')

dotenv.config()
const bot = new Telegraf(process.env.BOT_TOKEN)

// bot.start((ctx) => ctx.reply('Welcome'))

bot.start(async ctx => {
    return ctx.reply("Hi, this is *Cosmic Flare*, which will anonymously forward your text to Rising Flare. \nSimply start typing...", {
        parse_mode: "Markdown",
        reply_to_message_id: ctx.message?.message_id,
        allow_sending_without_reply: true,
        reply_markup: { force_reply: true, selective: true }
    })

})

bot.help((ctx) => ctx.reply('Send me any messages to forward 🙃.'))
bot.on(message('sticker'), (ctx) => ctx.reply('Please use emoji 🙃'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

bot.on(message('text'), async (ctx) => {
    // return ctx.reply(ctx.message.text)
    // reply to a group chat message (GROUP_ID)
    return ctx.telegram.sendMessage(process.env.GROUP_ID, ctx.message.text)
})

console.log('Bot is running')

exports.bot = bot;

// AWS event handler syntax (https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)
exports.handler = async event => {
    try {
        await bot.handleUpdate(JSON.parse(event.body))
        return { statusCode: 200, body: "" }
    } catch (e) {
        console.error("error in handler:", e)
        return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
    }
}
