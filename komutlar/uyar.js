const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = await db.fetch(`modlogK_${message.guild.id}`);
  let modlog2 = guild.channels.find('id', modlog);
  if (!user) return message.channel.send(`:no_entry: Uyaracağın kişiyi etiketlemelisin. Etiketledikten sonra uyarı sebebini yazmalısın.`)
  if (!reason) return message.channel.send(`:no_entry: Uyarı sebebini yazmalısın.`);

  if (modlog2 == null) return message.channel.send(`${user} adlı kullanıcı ${message.author} adlı yetkili tarafından uyarıldı. Sebep : ${reason}`);
  modlog2.send(`${user} adlı kullanıcı ${message.author} adlı yetkili tarafından uyarıldı. Sebep : ${reason}`);
  user.send(`${guild.name} sunucusundan ${reason} sebebi ile uyarıldın! Lütfen daha dikkatli ol.`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uyarı'],
  permLevel: 0
};

exports.help = {
  name: 'uyar',
  description: 'Belirttiğiniz kullanıcıyı uyarır.',
  usage: 'uyar <@kullanıcı> <sebep>'
};