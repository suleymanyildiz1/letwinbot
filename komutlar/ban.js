const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.`);
  let guild = message.guild
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.send(`:no_entry: Yasaklayacağın kişiyi etiketlemelisin. \`${prefix}yasakla @Furkan\``)
  let modlog = await db.fetch(`modlogK_${message.guild.id}`)
  let modlog2 = guild.channels.find('id', modlog) 
  message.guild.member(user).ban();
  if(!modlog) return message.channel.send(`:no_entry: ${user.tag} adlı kullanıcı sunucudan yasaklandı.`)
  if(!modlog2) return message.channel.send(`:no_entry: ${user.tag} adlı kullanıcı sunucudan yasaklandı.`)
  modlog2.send(`:no_entry: ${user.tag} adlı kullanıcı sunucudan yasaklandı.`);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 3
};

exports.help = {
  name: 'yasakla',
  description: 'Belirttiğiniz kullanıcıyı sunucudan yasaklar.',
  usage: 'yasakla <@kullanıcı>'
};