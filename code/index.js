require('dotenv').config()

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.DirectMessageTyping,
  GatewayIntentBits.MessageContent]
})

//when bot starts up
client.on("ready", () => {
  console.log(`Halla shtøgge jævler fra ${client.user.tag}`);
})
//when someone types
// client.on("messageCreate", async msg => {

//   const splitMessage = msg.content.split(' ')
//   if (msg.content === 'ping') {
//     await msg.channel.send("yo")
//   }
// })

client.on('messageCreate', async (message) => {
  console.log(message);
});


client.login(process.env.DISCORD_TOKEN);
