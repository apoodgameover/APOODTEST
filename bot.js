const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("605892767587237942")
setInterval(function() {
channel.send(`im the best in world`);
}, 30)
})

client.login(process.env.BOT_TOKEN);