const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let botisim = args[0]
	let sebep = args[1]
	let channelID = "532890489062555678";
	
	if (!botisim) return message.channel.send(`<:BEEhayir:519886397482729473>Botunun ismini yazmalısın.`)
  if (!sebep) return message.channel.send(`<:BEEhayir:519886397482729473>Botu neden onaylamadığını yazmalısın.`)  
  
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField("Bot İsmi", botisim)
    .addField("Bot Prefix", sebep)
		client.channels.get(channelID).send(`${botisim} adlı bot reddedildi. Sebep : ${sebep}\nReddeden yetkili : `);
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