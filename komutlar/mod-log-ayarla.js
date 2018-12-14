const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        return message.channel.send(`<:BEEhayir:519886397482729473>Log kanalı olarak ayarlamak istediğin kanalı etiketlemelisin.`)
    }
  
    db.set(`modlogK_${message.guild.id}`, channel.name)
  
    message.channel.send(`<:BEEevet:519886383456714784>Log kanalı başarıyla ${channel} olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['mod-log', 'mod-log','modlogayarla', 'modlog','log','logayarla','log-ayarla', 'logkanal', 'log-kanal'],
    permLevel: 3
}

exports.help = {
    name: 'mod-log-ayarla',
    kategori: 'ayarlar',
    description: 'Sayaç kanalını ayarlar.',
    usage: 'giriş-kanal-ayarla <#kanal>'
}