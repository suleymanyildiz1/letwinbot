const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
    let mesaj = args.slice(0).join(' ');
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.`);
    if (mesaj.length < 1) return message.channel.send(`:no_entry: Ödülü yazmalısın.`);
    message.delete();
  
    return message.channel.send(`**Çekilişi Yapan Yetkili :** ${message.author}\n**Çekilişi Kazanan :** ${message.guild.members.random()}\n**Ödül** : ${mesaj}`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
  };
  
  exports.help = {
    name: 'çekiliş',
    description: 'Çekiliş yapar.',
    usage: 'çekiliş <ödül>'
  };