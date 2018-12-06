const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:ayy:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        return message.channel.send(`<:ayy:519886397482729473>Giriş-çıkış kanalı olarak ayarlamak istediğin kanalı etiketlemelisin.`)
    }

    db.set(`gcK_${message.guild.id}`, channel.name)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`<:ayy:519886383456714784>Giriş-çıkış kanalı başarıyla ${channel} olarak ayarlandı.`)
    .setColor("RANDOM")
    message.channel.send(embed)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['girişçıkışayarla', 'giriş-çıkış'],
    permLevel: 3
}

exports.help = {
    name: 'giriş-çıkış-ayarla',
    kategori: 'ayarlar',
    description: 'Sayaç kanalını ayarlar.',
    usage: 'giriş-kanal-ayarla <#kanal>'
}