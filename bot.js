const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("538460605523165204")
setInterval(function() {
channel.send(`proslar`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
