const Discord = require('discord.js');

exports.run = function(client, message) {
  var role = message.guild.roles.find(role => role.name === "Discord Bot Maker");
  message.member.addRole(role);
  message.channel.send(':white_check_mark: **DBM rolü başarıyla verildi.**');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['discordbotmaker'],
  permLevel: 0
};

exports.help = {
  name: 'dbm',
  description: 'DBM Kanallarını Görürsünüz.',
  usage: 'dbm'
};