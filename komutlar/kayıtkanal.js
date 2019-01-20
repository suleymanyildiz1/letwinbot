const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let channel = message.mentions.channels.first() || message.channel
    if (!channel) {
        return message.channel.send(`:no_entry: Kayıt kanalı olarak ayarlamak istediğin kanalı etiketlemelisin. \`${prefix}kayıt #kayıt-kanal\``)
    }
    db.set(`modlogK_${message.guild.id}`, channel.id)
    message.channel.send(`:white_check_mark: Kayıt kanalı başarıyla ${channel} olarak ayarlandı. Kapatmak için \`${prefix}kapat kayıtkanal\` yazmalısın.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['logkanal','modlogkanal'],
    permLevel: 3
}

exports.help = {
    name: 'kayıtkanal',
    description: 'Kayıt mesajlarını belirttiğiniz kanala iletir.',
    usage: 'kayıtkanal <#kanal>'
}