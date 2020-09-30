const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let yetkili = message.author
let botisim = message.guild.members.get(args[1])
  let sahip = message.guild.members.get(args[0])
  let sebep = args[2]
  	let log = "758379780751491143" // bot eklendi / onaylandı / reddedildi kanalı
    
    
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let embed2 = new Discord.RichEmbed()
  .setColor('#7f0000')
   .setDescription(`> <a:no1:740278046921195612> |**Maalesef!** ${botisim} **adlı botun reddedildi.** \n\n > 📕 | **Sebep =** ${sebep} \n\n > 🔏 | **Reddeden yetkili =** ${yetkili} `)
		
  let embed = new Discord.RichEmbed()
  .setColor('#7f0000')
   .setDescription(` > <a:no1:740278046921195612> | ${sahip} **adlı kişinin** ${botisim} **adlı botu reddedildi.** \n\n > 📕 | **Sebep =** ${sebep} \n\n > 🔏 | **Reddeden yetkili =** ${yetkili} `)
		
	if (!botisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`:no_entry: Botu neden onaylamadığını yazmalısın.`).then(msg => msg.delete(10000))
    if (!sahip) return message.channel.send(`:no_entry: Bot Sahibi id yazman lazım.`).then(msg => msg.delete(10000))
  message.delete()
  client.channels.get(log).send(embed);
  client.channels.get(log).send(`> <a:no1:740278046921195612> | **${sahip}**`);
    sahip.send(embed2)
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