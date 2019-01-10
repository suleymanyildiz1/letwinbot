const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let botisim = args.join(" ")
	let channelID = "532525090517286927";
	
	if (!botisim) return message.channel.send(`<:BEEhayir:519886397482729473>Botun ismini yazmalısın.`)
  
		client.channels.get(channelID).send(`${botisim} adlı bot onaylandı.\Onaylayan yetkili : ${message.author.tag}`);
		message.channel.send(`<:BEEevet:519886383456714784>Botu onayladınız.`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-onayla"],
  permLevel: 0
};

exports.help = {
  name: 'onayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'onayla <bot ismi>'
};