const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let mesaj = args.slice(0).join(" ")
  if (mesaj.length < 1) return message.channel.send(`:no_entry: Bir oylama yazısı yazmalısın.`);
  message.delete()
  
  message.channel.send(`${mesaj}\n\nOylamayı Yapan Yetkili : ${message.author}`).then(function(message) {
    
    message.react('✔');
    message.react('✘');
       });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'oylama',
  description: 'Botun pingini gösterir.',
  usage: 'oylama'
};