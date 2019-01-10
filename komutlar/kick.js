const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Üyeleri At\`" yetkisine sahip olmalısın.`);
  let guild = message.guild
  let user = message.mentions.users.first();
  let modlog = await db.fetch(`modlogK_${message.guild.id}`)
  let modlog2 = guild.channels.find('id', modlog)
  if (message.mentions.users.size < 1) return message.channel.send(`<:BEEhayir:519886397482729473>Atacağın kişiyi etiketlemelisin. \`${prefix}at @Furkan\``).catch(console.error);
  message.guild.member(user).kick();
  if(!modlog) return message.channel.send(`<:BEEhayir:519886397482729473>${user.tag} adlı kullanıcı sunucudan atıldı.`)
  if(!modlog2) return message.channel.send(`<:BEEhayir:519886397482729473>${user.tag} adlı kullanıcı sunucudan atıldı.`)
  modlog2.send(`<:BEEhayir:519886397482729473>${user.tag} adlı kullanıcı sunucudan atıldı.`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick'],
  permLevel: 3
};

exports.help = {
  name: 'at',
  description: 'Belirttiğiniz kullanıcıyı sunucudan atar.',
  usage: 'at <@kullanıcı>'
};