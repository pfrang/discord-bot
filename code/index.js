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
    if (message.content.toLowerCase().includes('oi')) {
      await message.channel.send("Oiiiiiiiiiiiiiiii")
      return
    }
    if(message.content.toLowerCase().includes('herlig')) {
      await message.channel.send("heeeerlig sa kjerringa")
      return
    }
    if (message.content.toLowerCase().includes('aram')) {
      await message.channel.send('aram trash?')
      return
    }
    if (message.content.toLowerCase().includes('nei')) {
      await message.channel.send("nnneiiii ikke syk")
      return
    }
    if (message.content.toLowerCase() === 'aesj' || message.content.toLowerCase() === 'æsj') {
      await message.channel.send("eeer du som er æsj")
      return
    }
    await message.channel.send(getRandomMessage()[Math.floor((Math.random()*getRandomMessage().length))])
  }

});


client.login(process.env.DISCORD_TOKEN);
