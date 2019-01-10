const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let [botisim, sebep] = args.join(" ").split(" - ")
	let channelID = "532525090517286927";
	
	if (!botisim) return message.channel.send(`<:BEEhayir:519886397482729473>Botun ismini yazmalısın.`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`<:BEEhayir:519886397482729473>Botu neden onaylamadığını yazmalısın.`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(channelID).send(`<:BEEhayir:519886397482729473>${botisim} adlı bot reddedildi. Sebep : ${sebep} Reddeden yetkili : ${message.author}`);
		message.channel.send(`<:BEEevet:519886383456714784>Botu reddettiniz.`).then(msg => msg.delete(10000))
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