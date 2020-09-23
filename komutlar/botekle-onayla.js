const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let lrowsisim = args[0]
  let sahip = args[1]
	let log = "758379780751491143" // bot eklendi / onaylandı / reddedildi kanalı
	
	if (!lrowsisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete(10000))
  message.delete() 
		client.channels.get(log).send(`<a:tik4:756946179530424541>   <@${sahip}> adlı kişinin <@${lrowsisim}> adlı botu onaylandı.`);
		message.channel.send(`<a:tik4:756946179530424541> Botu onayladınız.`).then(msg => msg.delete(2000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-onayla', 'onayla'],
  permLevel: 0
};

exports.help = {
  name: 'botonayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};6