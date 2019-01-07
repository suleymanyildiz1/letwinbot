const Discord = require('discord.js');

exports.run = function(client, message) {
  var role = message.guild.roles.find(role => role.name === "Üye");
  var rol = message.guild.roles.find(rol => rol.name === "Kayıtsız Üye");
  message.member.removeRole(rol);
  message.member.addRole(role);
  message.channel.send(`<:BEEevet:519886383456714784>Deneniyor bu başka bişi`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-ol','kaydol','kayıtol'],
  permLevel: 0
};

exports.help = {
  name: '123  ',
  description: 'Discord.js Kanallarını Görürsünüz.',
  usage: 'kayıt'
};