const Discord = require('discord.js');

exports.run = function(client, message) {
  var role = message.guild.roles.find(role => role.name === "JavaScript");
  message.member.addRole(role);
  message.channel.send(`:white_check_mark: JavaScript rolü başarıyla verildi.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['discord.js','javascript'],
  permLevel: 0
};

exports.help = {
  name: 'js',
  description: 'Discord.js Kanallarını Görürsünüz.',
  usage: 'js'
};