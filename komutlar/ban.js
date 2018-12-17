const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Üyeleri Engelle\`" yetkisine sahip olmalısın.`);
  let guild = message.guild
  let user = message.mentions.users.first();
  let modlog = await db.fetch(`modlogK_${message.guild.id}`);
  let modlog2 = guild.channels.find('name', modlog);
  if (message.mentions.users.size < 1) return message.channel.send(`<:BEEhayir:519886397482729473>Banlayacağın kişiyi etiketlemelisin.`).catch(console.error);
  message.guild.member(user).ban();
  modlog2.send(`<:BEEhayir:519886397482729473>${user} adlı kullanıcı sunucudan yasaklandı.`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yasakla'],
  permLevel: 3
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'ban [kullanıcı] [sebep]'
};