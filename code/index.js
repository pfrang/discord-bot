import dotenv from 'dotenv'
dotenv.config();

import { Client, GatewayIntentBits, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages
  ]
})

//when bot starts up
client.on("ready", () => {
  console.log(`Halla shtøgge jævler fra ${client.user.tag}`);
})
//when someone types
client.on("message", msg => {
  if (msg.content === "æsj" || msg.content === "aesj") {
    msg.reply("du som er æsj")
  }

  if (msg.content.includes("nei")) {
    msg.reply("neiiiii ikkkkke yk i odet")
  }
})


client.login(process.env.DISCORD_TOKEN);
