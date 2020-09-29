const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let lrowsid = args[0] 
	let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = "758383918570274849"// başvurunun gideceği kanal
	let kanal = "758379292009955389" // başvurunun yapılacağı kanal
  let log = "758379780751491143" // bot eklendi / onaylandı / reddedildi kanalı 
	
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).then(msg => msg.delete(10000))
	if (message.channel.id == kanal) {
  if (!lrowsid) return message.channel.send(`:no_entry: Botunun ID'sini yazmalısın.`).then(msg => msg.delete(10000))
  if (!prefix) return message.channel.send(`:no_entry: Botunun prefixini yazmalısın.`).then(msg => msg.delete(10000))
  if (!onaylımı) return message.channel.send(`:no_entry: Botunun Dbl onaylımı onu yazmalısın`).then(msg => msg.delete(10000))
  message.delete()
  const embed = new Discord.RichEmbed()
  .setColor("PURPLE")
  .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${lrowsid}&scope=bot&permissions=0)`, true)
  .setTitle("<a:jke:754772326704218112> Bot Başvurusu ")
  .addField("<a:jke:754772326704218112> Bot Sahibi", `<@${message.author.id}>` )
  .addField("<a:jke:754772326704218112> Bot ID", lrowsid )
  .addField("<a:jke:754772326704218112> Bot Prefix", prefix ,)
  .addField("<a:jke:754772326704218112> Bot Onaylımı?", onaylımı ) 
  client.channels.get(basvuru).send(embed)
    let embed2 = new Discord.RichEmbed()
    .setColor('#ffff00')
    .setDescription(`>  <a:load:758389302861889566>` + `<@${message.author.id}> adlı kullanıcı <@${lrowsid}> adlı botu sıraya ekledi.En yakın zamanda test edilecektir.`)
  client.channels.get(log).send(embed2)
  message.channel.send(`<a:tik4:756946179530424541>__**Bot ekleme isteğiniz alındı.**__`).then(msg => msg.delete(3000  ))
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