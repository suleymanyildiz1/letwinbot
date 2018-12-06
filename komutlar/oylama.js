const Discord = require('discord.js');


exports.run = function(client, message, args) {

  let mesaj = args.slice(0).join("  ")
  if (mesaj.length < 1) return message.channel.send(`<:ayy:519886397482729473>Bir oylama yazısı yazmalısın.`);
  
  message.channel.send(`${mesaj}`).then(function(message) {
    
    message.react('519886383456714784');
    message.react('519886397482729473');
       });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oy'],
  permLevel: 0
};

exports.help = {
  name: 'oylama',
  description: 'Botun pingini gösterir.',
  usage: 'oylama'
};