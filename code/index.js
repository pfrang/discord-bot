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
  if(message.content === 'ping') {
    await message.channel.send("pong")
  }
  if(message.content.includes('nei')) {
    await message.channel.send("nnneiiiii ikke yk i odet")
  }
  if(message.content === 'aesj' || message.content === 'æsj') {
    await message.channel.send("eeer du som er æsj")
  }

});


client.login(process.env.DISCORD_TOKEN);
