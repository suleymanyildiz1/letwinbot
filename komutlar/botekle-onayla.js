const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let botisim = args.join(" ")
	let channelID = "532525090517286927";
	
	if (!botisim) return message.channel.send(`:no_entry: Botun ismini yazmalısın.`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(channelID).send(`:tada:${botisim} adlı bot onaylandı. Onaylayan yetkili : ${message.author}`);
		message.channel.send(`:white_check_mark: Botu onayladınız.`).then(msg => msg.delete(10000))
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