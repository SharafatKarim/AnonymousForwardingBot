# Telegram Anonymous Forwarding Bot

This is a simple Telegram bot built with Node.js that forwards all its messages to a specific group, ensuring the privacy of your users. The bot is hosted on Netlify and is free to use forever. To set up the bot, you only need to configure two environment variables: `BOT_TOKEN` and `GROUP_ID`.

## Prerequisites

Before setting up the Telegram Anonymous Forwarding Bot, make sure you have the following:

- Node.js installed on your local machine.
- A Telegram bot created and its API token (BOT_TOKEN).
- A Telegram group or channel where you want the messages to be forwarded (GROUP_ID).

## Local Machine Setup

1. Clone this repository to your local machine.

```bash
git clone https://github.com/SharafatKarim/AnonymousForwardingBot
```

2. Change your working directory to the project folder.

```bash
cd AnonymousForwardingBot
```

3. Install the required dependencies.

```bash
npm i
```

4. Create a `.env` file in the project root directory and set the following environment variables:

```env
BOT_TOKEN=XXXXXXXXXXXX:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
GROUP_ID=-XXXXXXXXX
```

Replace `BOT_TOKEN` and `GROUP_ID` with the actual values you obtained from your Telegram bot and group.

5. And finally, deploy the bot in your local machine using the following command.

```bash
node index.js
```

## Netlify Setup

Deploy to Netlify by linking to this repository. And don't forget to fill in the environment variables on netlify.

```env
BOT_TOKEN=XXXXXXXXXXXX:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
GROUP_ID=-XXXXXXXXX
```
Thereafter, you need to specify and tell telegram where your bot should direct the messages it received to. Do so by simply visiting this url (without the {, })

```
https://api.telegram.org/bot{your_bot_token}/setWebhook?url={your_netlify_domain_url}/api/bot
```

If it is set up correctly, it should respond back with,

```json
{
  "ok": true,
  "result": true,
  "description": "Webhook was set"
}
```

And that's it!

> Try typing /start to your bot!

## Telegram Bot Setup

1. Go to the [BotFather](https://core.telegram.org/bots#botfather) on Telegram and create a new bot.

2. Copy the API token (BOT_TOKEN) provided by the BotFather.

3. Set the bot's profile and add a username if required.

4. Start a conversation with your bot, so you have a chat ID for the bot.

## Usage

Now that your bot is deployed and ready, follow these steps to start forwarding messages:

1. Add your bot to the Telegram group where you want the messages to be forwarded.

2. Make your bot an administrator of the group to ensure it has the necessary permissions to forward messages.

3. Start a chat with your bot, and you can start sending messages to the bot. The bot will automatically forward these messages to the group without revealing the sender's identity.

## Important Notes

- The Telegram Anonymous Forwarding Bot is designed to maintain the privacy of your users. It forwards messages without disclosing the original sender's identity.

- Remember to keep your `BOT_TOKEN` and `GROUP_ID` environment variables secret. Do not expose them in public repositories or share them with unauthorized users.

- Netlify offers free hosting, but be mindful of any usage limitations or terms of service changes that may apply.

## Contributing

If you would like to contribute to this project, feel free to open issues or submit pull requests on the GitHub repository.

## Acknowledgements
- [OpenAI Telegram Bot](https://github.com/sr-tamim/openai-telegram-bot/)
- [netlify-fauna-telegram-bot](https://github.com/jokarz/netlify-fauna-telegram-bot)

## License

This project is licensed under the MIT License. Please review the [LICENSE](LICENSE) file for more details.
