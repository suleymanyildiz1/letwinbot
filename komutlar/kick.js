const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Üyeleri At\`" yetkisine sahip olmalısın.`);
  let guild = message.guild
  let user = message.mentions.users.first();
  let modlog = await db.fetch(`modlogK_${message.guild.id}`);
  let modlog2 = guild.channels.find('name', modlog);
  if (message.mentions.users.size < 1) return message.channel.send(`<:BEEhayir:519886397482729473>Atacağın kişiyi etiketlemelisin.`).catch(console.error);
  message.guild.member(user).kick();
  if(!modlog2) return;
  modlog2.send(`<:BEEhayir:519886397482729473>${user} adlı kullanıcı sunucudan atıldı.`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 3
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};