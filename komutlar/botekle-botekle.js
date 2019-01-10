const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let botid = args[0]
	let prefix = args[1]
  let yetkili = "532890489062555678"
	let basvuru = "532524953774456864"
  let log = "532525090517286927"
	
  if (message.channel.id !== basvuru) return message.channel.send(`Bu komutu sadece <#${basvuru}> kanalında kullanabilirsin.`) 
	if (message.channel.id == basvuru) {
  if (!botid) return message.channel.send(`<:BEEhayir:519886397482729473>Botunun ID'sini yazmalısın.`)
  if (!prefix) return message.channel.send(`<:BEEhayir:519886397482729473>Botunun prefixini yazmalısın.`)
  
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  .setTitle("Bot Ekletme")
  .addField("Bot Sahibi", message.author.tag)
  .addField("Bot ID", botid)
  .addField("Bot Prefix", prefix)
  client.channels.get(yetkili).send(embed)
  client.channels.get(log).send(`${message.author} adlı kullanıcı botunu sıraya ekledi. Botu onaylanmayı bekliyor.`)
  message.channel.send(`<:BEEevet:519886383456714784>Bot ekleme isteğiniz alındı.`)
  }
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