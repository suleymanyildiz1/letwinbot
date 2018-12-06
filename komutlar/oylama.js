const Discord = require('discord.js');


exports.run = function(client, message, args) {

  let mesaj = args.slice(0).join("  ")
  if (mesaj.length < 1) return message.reply(`<:ayy:519886397482729473>Bir oylama yazısı yazınız.`);
  message.channel.send(`${mesaj}`);
  message.react('🤔')
  message.react('🤔')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};