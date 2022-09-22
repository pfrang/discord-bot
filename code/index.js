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

function getRandomMessage() {
  return ["Neii ikke syk", "eeer ikke jeg fakka mye bedre enn deg da, gear > skill Æ", "Meeh ingen som er glad i sånn", "mye Unød", "uskuffi^5","duel?! 'ok' neiii as nå er det for sent, Æ", "skjanern han er" ]
}


client.on('guildCreate', (g) => {
  g.systemChannel.send("Æ")
})

client.on('messageCreate', async (message) => {
  if (!message.author.bot) {
    if (message.content.includes('oi')) {
      await message.channel.send("Oiiiiiiiiiiiiiiii")
    }

    if (message.content.includes('nei')) {
      await message.channel.send("nnneiiii ikke syk")
    }
    if (message.content === 'aesj' || message.content === 'æsj') {
      await message.channel.send("eeer du som er æsj")
    }
    await message.channel.send(getRandomMessage()[Math.floor((Math.random()*getRandomMessage().length))])
  }

});


client.login(process.env.DISCORD_TOKEN);
