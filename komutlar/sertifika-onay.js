const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`); 
  let yetkili = message.author
  let sahip = message.guild.members.get(args[0])
	let botisim = message.guild.members.get(args[1])
  
	let log = "764077112700174366" // bot eklendi / onaylandı / reddedildi kanalı
	let rol = '734904076567052299'
  let b = '764076182055550997'

	if (!botisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete(10000))
  if(!sahip) return message.reply("Bir sahip id girmen gerekiyor")
  message.delete()
    sahip.addRole(rol)
  botisim.addRole(b)
  let embedd = new Discord.RichEmbed()
  .setDescription(` <a:tik4:756946179530424541> | **Tebrikler!** ${botisim} **adlı botun sertifika aldı.Sertifika rolleri verildi** \n\n  🔏 | **Onaylayan yetkili =** ${yetkili} `)
  sahip.send(embedd)
   let embed2 = new Discord.RichEmbed()
   .setColor('#5fbf00')
   .setDescription(` <a:tik4:756946179530424541> | ${sahip} **adlı kişinin** ${botisim} **adlı botu sertifika aldı.** \n\n  🔏 | **Onaylayan yetkili =** ${yetkili} `)
		client.channels.get(log).send(embed2)
		
    
  
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-onayla', 'onayla'],
  permLevel: 0
};

exports.help = {
  name: 's-onayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};6