//Begin Connect
const { Client, GatewayIntentBits, CommandInteraction} = require("discord.js");//Import Discord
global.config = require('./config/config.json');//Import Config

const client = new Client({
    fetchAllMembers: true,
    partials: ["CHANNEL", "MESSAGE"],
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});  //Create Client and announce intents

client.login(config.token)
    .then(r => client.on("ready", () =>{
        console.log("I am ready!")
    })); // login using the provided discord token and report ready
//End Connect
