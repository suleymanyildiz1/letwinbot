const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let botisim = args[0]
  let sebep = args[2]
  let sebep1 = args[3]
  let sebep2 = args[4]
  let sebep3 = args[5]
  let sebep5 = args[6]
  let sebep6 = args[7]
  let sebep7 = args[8]
  let sebep8 = args[9]
  let sebep9 = args[10]
  let sebep10 = args[11]

  let sahip = args[1]
	let log = "540617786880163902" // bot eklendi / onaylandı / reddedildi kanalı
	
	if (!botisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`:no_entry: Botu neden onaylamadığını yazmalısın.`).then(msg => msg.delete(10000))
    if (!sahip) return message.channel.send(`:no_entry: Bot Sahibi id yazman lazım.`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(log).send(`:no_entry: <@${sahip}> adlı kişini <@${botisim}> adlı botu reddedildi. Sebep : ${sebep} Reddeden yetkili : ${message.author}`);
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