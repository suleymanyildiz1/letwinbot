const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let botisim = args.join(" ")
	let channelID = "532890489062555678";
	
	if (!botisim) return message.channel.send(`<:BEEhayir:519886397482729473>Botunun ID'sini yazmalısın.`)
  
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField("Eylem", "Bot Ekletme")
    .addField("Bot Sahibi", message.author.tag)
    .addField("Bot ID", botisim)
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