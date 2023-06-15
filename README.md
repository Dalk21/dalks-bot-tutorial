# Discord Bot Template README

[![Dalk's Bot Tutorial](https://img.shields.io/badge/Discord%20Bot%20Tutorial-Dalk\'s%20Bot%20Tutorial-yellow.svg)](https://github.com/dalk21/dalks-bot-tutorial) 
[![ISC License](https://img.shields.io/badge/License-ISC-green.svg)](https://www.isc.org/licenses/)
[![Made for Discord.js v14.11.0](https://img.shields.io/badge/discord\.js-v14.11.0-blue.svg)](https://github.com/discordjs/discord.js/tree/b61e4fb0dcb9e5d43a7626c5a4760f5801e06fae)
[![Made on 24/03/2023](https://img.shields.io/badge/release%20date-March%2024th,%202023%20\(24/03/2023\)-red.svg)](https://github.com/dalk21/dalks-bot-tutorial) 
[![Updated on 15/06/2023](https://img.shields.io/badge/last%20updated%20date-June%2015th,%202023%20\(15/06/2023\)-orange.svg)](https://github.com/dalk21/dalks-bot-tutorial) 

This is a basic template for creating a Discord bot using Node.js and
the discord.js library. This README will provide an overview of the
project, explain how to edit and customize the bot, and describe the
purpose of each file.

## Project Overview

The template consists of three files:

1.  `bot.js`: This is the main file that contains the code for the bot's
    functionality.
2.  `slash-cmds.js`: This file contains code for registering slash
    commands globally for the bot.
3.  `config.json`: This file contains the configuration settings for the
    bot, such as the bot token and the activity it displays.

## Editing the Bot

To customize the bot, follow these steps:

1.  Clone the repository to your local machine.
2.  Open the cloned directory in your favorite code editor.
3.  Install the necessary dependencies by running `npm i` in your
    terminal.
4.  Edit the `config.json` file to include your bot's token and desired
    activity. The activity will be displayed on the bot's status.
5.  Edit the `bot.js` file to include your desired functionality. You
    can use the existing code as a starting point.
6.  Edit the `slash-cmds.js` file to include your desired slash
    commands. You can use the existing code as a starting point.
7.  Run the bot with `npm run bot`.
8.  Register the slash commands with `npm run commands`.

## Understanding the Code

### `bot.js`

This file contains the main functionality for the bot. It does the
following:

1.  Imports the necessary dependencies from the discord.js library and
    the `config.json` file.
2.  Creates a new client and sets the required intents.
3.  Logs in to the bot with the provided token.
4.  Sets the bot's activity when it is online.
5.  Handles slash commands with a few example commands included.

### `slash-cmds.js`

This file registers slash commands globally for the bot. It does the
following:

1.  Imports the necessary dependencies from the discord.js library and
    the `config.json` file.
2.  Creates a new client and logs in to the bot with the provided token.
3.  Defines an array of commands with their names, descriptions, and
    options.
4.  Registers the commands globally for the bot.

### `config.json`

This file contains the configuration settings for the bot. It does the
following:

1.  Provides the bot token for logging in.
2.  Sets the activity that will be displayed on the bot's status.

## Conclusion

This README provides an overview of the Discord Bot Template and how to
customize it. It also describes the purpose of each file in the project.
Happy coding!
