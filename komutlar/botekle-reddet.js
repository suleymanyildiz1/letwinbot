const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  /*if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let [botisim, sebep] = args.join(" ").split(" - ")
	let channelID = "532525090517286927";
	
	if (!botisim) return message.channel.send(`:no_entry: Botun ismini yazmalısın.`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`:no_entry: Botu neden onaylamadığını yazmalısın.`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(channelID).send(`:no_entry: ${botisim} adlı bot reddedildi. Sebep : ${sebep} Reddeden yetkili : ${message.author}`);
		message.channel.send(`:white_check_mark: Botu reddettiniz.`).then(msg => msg.delete(10000))*/
  
  message.channel.send(`:no_entry: Bu özellik yakında eklenecektir.`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-reddet"],
  permLevel: 0
};

exports.help = {
  name: 'reddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'reddet <bot ismi> - <sebep>'
};