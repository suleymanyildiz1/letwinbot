const Discord = require('discord.js');

exports.run = function(client, message) {
  var role = message.guild.roles.find(role => role.name === "Html , İndex");
  message.member.addRole(role);
  message.channel.send(`<:BEEevet:519886383456714784>Html , index rolün verildi`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['discord.js','javascript'],
  permLevel: 0
};

exports.help = {
  name: 'html',
  description: 'Discord.js Kanallarını Görürsünüz.',
  usage: 'html'
};