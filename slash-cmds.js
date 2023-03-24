const {REST} = require('@discordjs/rest'); // Get discord's REST API
const {Routes} = require('discord-api-types/v9'); // Get Discord API
const config = require('./config.json'); // Get our Configuration file
const { Client, GatewayIntentBits } = require('discord.js'); // Get discord.js

const client = new Client({intents: [
    GatewayIntentBits.Guilds,
  ]}); // Create a new client
client.login(config.token); // Login to that client
const rest = new REST({version: '9'}).setToken(config.token); // Create a new REST endpoint

const commands = [ // Commands list
    {
        name: 'ping', // Name of the command
        description: 'Replies with "Pong!"', // Description of the command
    },
    {
        name: 'hidden-ping', // Name of the command
        description: 'Hidden ping!', // Description of the command
    },
    {
        name: 'copy', // Name of the command
        description: 'Copies what you input!', // Description of the command
        options: [
            {
                name: 'text', // Name of the option
                description: 'What do you want repeated?', // Description of the option
                type: 3, // Type of option (Read: https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type)
                required: true, // Is the option required?
              },
        ]
    }
]

// Register the commands globally for your application
client.on('ready', () => { // When we sign into the bot
    (async () => {
        try {
          console.log('Started refreshing application (/) commands.'); // Refresh commands
      
          await rest.put( // Actually refresh them
              Routes.applicationCommands(client.user.id), // Send the commands
              {body: commands}, // The commands
          ); 
      
          console.log('Successfully reloaded application (/) commands.'); // Completed refreshing commands
        } catch (error) {
          console.error(error); // Log errors
        }
      })();
  });