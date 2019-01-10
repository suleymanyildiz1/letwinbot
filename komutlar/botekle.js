const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let botid = args[0]
	let prefix = args[1]
	let channelID = "511934212618584094";
	
	if (!botid) return message.channel.send(`<:BEEhayir:519886397482729473>Botunun ID'sini yazmalısın.`)
  if (!prefix) return message.channel.send(`<:BEEhayir:519886397482729473>Botunun prefixini yazmalısın.`)  
		const embed = new Discord.RichEmbed()
			.setColor("BLUE")
			.addField("Eylem", "Bot Ekletme")
			.addField("Bot Sahibi", message.author.tag)
			.addField("Bot ID", botid)
			.addField("Bot Prefix", prefix)
    .addField("Botu Ekle", `[Link](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`)
		
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
  description: "Bot hakkındaki önerilerinizi bot sahibine ulaştırır.",
  usage: 'botekle <botid> <prefix>'
};