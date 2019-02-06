const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let botid = args[0]
	let prefix = args[1]
  let basvuru = "kanalid" // başvurunun gideceği kanal
	let kanal = "kanalid" // başvurunun yapılacağı kanal
  let log = "kanalid" // bot eklendi / onaylandı / reddedildi kanalı
	
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).then(msg => msg.delete(10000))
	if (message.channel.id == kanal) {
  if (!botid) return message.channel.send(`:no_entry: Botunun ID'sini yazmalısın.`).then(msg => msg.delete(10000))
  if (!prefix) return message.channel.send(`:no_entry: Botunun prefixini yazmalısın.`).then(msg => msg.delete(10000))
  message.delete()
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  .setTitle("Bot Ekletme")
  .addField("Bot Sahibi", message.author.tag)
  .addField("Bot ID", botid)
  .addField("Bot Prefix", prefix)
  client.channels.get(basvuru).send(embed)
  client.channels.get(log).send(`${message.author} adlı kullanıcı botunu sıraya ekledi. Botu onaylanmayı bekliyor.`)
  message.channel.send(`:white_check_mark: Bot ekleme isteğiniz alındı.`).then(msg => msg.delete(10000))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-ekle'],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};