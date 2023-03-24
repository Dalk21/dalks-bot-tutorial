// Run "npm i"

// Introduce the main components for our bot
const { Client, GatewayIntentBits, ActivityType, EmbedBuilder, Message, Events, AttachmentBuilder } = require('discord.js') // Gets the latest version of discord.js (for this tutorial, it is v14.8.0)
const config = require('./config.json'); // Get the configuration file
const client = new Client({ // Create the client
intents: [ // List our intents for the discord bot. Read this: https://discord.com/developers/docs/topics/gateway#list-of-intents
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
]
})

// What do we do when the bot is online?
client.on('ready', () => {
    console.log('[bot] ready'); // Notifys the user of the bot being online
    client.user.setActivity(config.activity, { type: ActivityType.Competing }); // Sets the activity of the bot 
  });

// Slash command handler
client.on(Events.InteractionCreate, async (interaction) => { // When a interaction is made
    if (!interaction.isChatInputCommand()) return; // Cancel all interactions that aren't slash commands
    if (interaction.commandName === 'ping') { // If the command is "ping"
        interaction.reply({ content: `Pong!` }) // Reply to the command with "Pong!"
    } else if (interaction.commandName === 'hidden-ping') {// If the command is "hidden-ping"
        interaction.reply({ content: `(Hidden) Pong!`, ephemeral: true }) // Make a hidden reply to the comamnd with "(Hidden) Pong!"
    } else if (interaction.commandName === 'copy') {// If the command is "copy"
        const reply = new EmbedBuilder() // Create a new embed
        .setTitle('Embed Builder Test') // Set the title to "Embed Builder Test"
        .setDescription(interaction.options.get('text').value) // Set the description to the text in the command
        .setFooter({ text: 'Tutorial Bot' }) // Set the footer text to "Tutorial Bot"
        interaction.reply({ embeds: [reply] }) // Reply to the interaction with this embed
    }
})

// Log in to the bot
client.login(config.token);