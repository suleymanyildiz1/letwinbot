const Discord = require('discord.js');

exports.run = function(client, message) {
  var role = message.guild.roles.find(role => role.name === "Üye");
  var rol = message.guild.roles.find(rol => rol.name === "Kayıtsız Üye");
  message.member.removeRole(rol);
  message.member.addRole(role);
  message.channel.send(':white_check_mark: **Başarıyla üye rolü verildi.(Kaydoldunuz)**');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-ol','kaydol','kayıtol'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt',
  description: 'Discord.js Kanallarını Görürsünüz.',
  usage: 'kayıt'
};