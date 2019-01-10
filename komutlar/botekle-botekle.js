const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let botid = args[0]
	let prefix = args[1]
	let channelID = "532890489062555678";
	
  if (!message.channel.id == channelID) return message.channel.send(`Bu komutu sadece <#${channelID}> kanalında kullanabilirsin.`) 
	if (!botid) return message.channel.send(`<:BEEhayir:519886397482729473>Botunun ID'sini yazmalısın.`)
  if (!prefix) return message.channel.send(`<:BEEhayir:519886397482729473>Botunun prefixini yazmalısın.`)
  
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  .setTitle("Bot Ekletme")
  .addField("Bot Sahibi", message.author.tag)
  .addField("Bot ID", botid)
  .addField("Bot Prefix", prefix)
  client.channels.get(channelID).send(embed);
  message.channel.send(`<:BEEevet:519886383456714784>Bot ekleme istediniz alındı.`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-ekle"],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};