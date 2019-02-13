const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let botisim = args[1]
  let sebep = args[1]
	let log = "540617786880163902" // bot eklendi / onaylandı / reddedildi kanalı
	
	if (!botisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`:no_entry: Botu neden onaylamadığını yazmalısın.`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(log).send(':no_entry: <@${botisim}> adlı bot reddedildi. Sebep : ``${sebep}`` Reddeden yetkili : ${message.author}');
		message.channel.send(`:white_check_mark: Botu reddettiniz.`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-reddet', 'reddet'],
  permLevel: 0
};

exports.help = {
  name: 'botreddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};