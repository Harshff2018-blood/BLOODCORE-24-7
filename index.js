const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`✅ ${client.user.tag} is online!`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply(`🏓 Pong! ${client.ws.ping}ms`);
    }

    if (message.content === '!hello') {
        message.reply(`👋 Hello ${message.author}!`);
    }
});

client.login(process.env.TOKEN);