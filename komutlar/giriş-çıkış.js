const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let channel = message.mentions.channels.first()
    if (!channel) {
        return message.channel.send(`<:BEEhayir:519886397482729473>Giriş-çıkış kanalı olarak ayarlamak istediğin kanalı etiketlemelisin.`)
    }
    db.set(`gckanal_${message.guild.id}`, channel.name)
    message.channel.send(`<:BEEevet:519886383456714784>Giriş-çıkış kanalı başarıyla ${channel} olarak ayarlandı.`)
  
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['girişçıkış'],
    permLevel: 3
}

exports.help = {
    name: 'giriş-çıkış',
    description: 'Giriş-çıkış kanalını ayarlar.',
    usage: 'giriş-çıkış <#kanal>'
}