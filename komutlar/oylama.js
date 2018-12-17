const Discord = require('discord.js');


exports.run = function(client, message, args) {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let mesaj = args.slice(0).join("  ")
  if (mesaj.length < 1) return message.channel.send(`<:BEEhayir:519886397482729473>Bir oylama yazısı yazmalısın.`);
  message.delete()
  
  message.channel.send(`${mesaj}\n\nOylamayı Yapan Yetkili : ${message.author}`).then(function(message) {
    
    message.react('519886383456714784');
    message.react('519886397482729473');
       });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oy'],
  permLevel: 3
};

exports.help = {
  name: 'oylama',
  description: 'Botun pingini gösterir.',
  usage: 'oylama'
};