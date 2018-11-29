const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        return message.reply("Giriş-çıkış kanalı olarak ayarlamak istediğin kanalı etiketlemelisin!")
    }

    db.set(`gcK_${message.guild.id}`, channel.name)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`Giriş-çıkış kanalı başarıyla ${channel} olarak ayarlandı!`)
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