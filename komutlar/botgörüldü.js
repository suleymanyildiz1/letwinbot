const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let botisim = args[0]
  let sahip = args[1]
	let log = "742449138561581265" // bot eklendi / onaylandı / reddedildi kanalı
	
	if (!botisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(log).send(`<a:bot:555512267907530753> <@${sahip}> adlı kişinin <@${botisim}> adlı bot görüldü. Yakında Onaylanıp/Reddedilecek.`);
		message.channel.send(`:white_check_mark: Botu Görüldü Ye Aldınız.`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-görüldü', 'görüldü'],
  permLevel: 0
};

exports.help = {
  name: 'bot-görüldü', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};