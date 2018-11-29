const Discord = require('discord.js');

exports.run = function(client, message) {
  var role = message.guild.roles.find(role => role.name === "Commando");
  message.member.addRole(role);
  message.channel.send(':white_check_mark: **Commando rolü başarıyla verildi.**');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'commando',
  description: 'Commando Kanallarını Görürsünüz.',
  usage: 'commando'
};