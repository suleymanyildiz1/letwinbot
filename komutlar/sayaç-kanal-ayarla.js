const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:ayy:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        return message.channel.send(`<:ayy:519886397482729473>Sayaç kanalı olarak ayarlamak istediğin kanalı etiketlemelisin.`)
    }

    db.set(`sayacK_${message.guild.id}`, channel.name)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`<:ayy:519886383456714784>Sayaç kanalı başarıyla ${channel} olarak ayarlandı.`)
    .setColor("RANDOM")
    message.channel.send(embed)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['skanal-ayarla', 'skanal-belirle', "s-kanal-ayarla", "s-kanal-belirle","sayaç-kanal"],
    permLevel: 3
}

exports.help = {
    name: 'sayaç-kanal-ayarla',
    kategori: 'ayarlar',
    description: 'Sayaç kanalını ayarlar.',
    usage: 'sayaç-kanal-ayarla <#kanal>'
}