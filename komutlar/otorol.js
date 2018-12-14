const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let rol = message.mentions.roles.first()
  
    if (!rol) {
        return message.channel.send(`<:BEEhayir:519886397482729473>Otorol olarak ayarlamak istediğin rolü etiketlemelisin.`)
    }

    db.set(`otorol_${message.guild.id}`, rol.name)

    message.channel.send(`<:BEEevet:519886383456714784>Otorol başarıyla \`${rol.name}\` olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['otorol-ayarla', 'oto-rol','otorol','otorolayarla'],
    permLevel: 0
}

exports.help = {
    name: 'oto-rol-ayarla',
    kategori: 'ayarlar',
    description: 'Sayaç kanalını ayarlar.',
    usage: 'giriş-kanal-ayarla <#kanal>'
}