const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let rol = message.mentions.roles.first()
  
    if (!rol) {
        return message.reply("Otorol olarak ayarlamak istediğin rolü etiketlemelisin!")
    }

    db.set(`otorol_${message.guild.id}`, rol.name)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`Otorol ${rol} olarak ayarlandı!`)
    .setColor("RANDOM")
    message.channel.send(embed)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['otorol-ayarla', 'otorol-belirle', "otorol"],
    permLevel: 3
}

exports.help = {
    name: 'oto-rol-ayarla',
    kategori: 'ayarlar',
    description: 'Sayaç kanalını ayarlar.',
    usage: 'sayaç-kanal-ayarla <#kanal>'
}