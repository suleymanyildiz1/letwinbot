const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let lrowsid = args[0] 


  let basvuru = "764077112700174366"// başvurunun gideceği kanal
	let kanal = "764077145344442389" // başvurunun yapılacağı kanal
  let log = "764077112700174366" // bot eklendi / onaylandı / reddedildi kanalı 
	
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).then(msg => msg.delete(10000))
	if (message.channel.id == kanal) {
  if (!lrowsid) return message.channel.send(`:no_entry: Botunun ID'sini yazmalısın.`).then(msg => msg.delete(10000))

    let embed2 = new Discord.RichEmbed()
    .setColor('#ffff00')
    
    .setDescription(`>  <a:load:758389302861889566>` + `<@${message.author.id}> adlı kullanıcı <@${lrowsid}> adlı bota sertifika başvurusu yaptı.`)
  client.channels.get(log).send(embed2)
   
  message.channel.send(`<a:tik4:756946179530424541>__**Sertifika isteğiniz alındı.**__`).then(msg => msg.delete(3000  ))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-ekle'],
  permLevel: 0
};

exports.help = {
  name: 'sertifika', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
}; 