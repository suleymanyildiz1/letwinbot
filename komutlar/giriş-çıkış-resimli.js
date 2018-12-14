const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        return message.channel.send(`<:BEEhayir:519886397482729473>Resimli giriş-çıkış kanalı olarak ayarlamak istediğin kanalı etiketlemelisin.`)
    }

    db.set(`gcK2_${message.guild.id}`, channel.name)
  
    message.channel.send(`<:BEEevet:519886383456714784>Resimli giriş-çıkış kanalı başarıyla ${channel} olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['resimligirişçıkışayarla', 'resimli-giriş-çıkış'],
    permLevel: 3
}

exports.help = {
    name: 'resimli-giriş-çıkış-ayarla',
    kategori: 'ayarlar',
    description: 'Sayaç kanalını ayarlar.',
    usage: 'giriş-kanal-ayarla <#kanal>'
}