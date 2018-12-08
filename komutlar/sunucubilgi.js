const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, params) => {  
 
  let gcKanal = await db.fetch(`gcK_${message.guild.id}`);
  let gcKanalyazi;
  if (gcKanal == null) gcKanalyazi = 'Ayarlanmamış'
  else gcKanalyazi = `#${gcKanal}`
  
  let sayacKanal = await db.fetch(`sayacK_${message.guild.id}`);
  let sayacKanalyazi;
  if (sayacKanal == null) sayacKanalyazi = 'Ayarlanmamış.'
  else sayacKanalyazi = `#${sayacKanal}`
  
  let logKanal = await db.fetch(`modlogK_${message.guild.id}`);
  let logKanalyazi;
  if (logKanal == null) logKanalyazi = 'Ayarlanmamış.'
  else logKanalyazi = `#${logKanal}`
  
  let otorol1 = await db.fetch(`otorol_${message.guild.id}`);
  let otorol2;
  if (otorol1 == null) otorol2 = 'Ayarlanmamış.'
  else otorol2 = `${otorol1}`
  
  const sunucubilgi = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor(`${message.guild.name} Adlı Sunucunun İstatistikleri`, message.guild.iconURL)
  .addField('Sunucu Adı', message.guild.name, true)
  .addField('Sunucu Sahibi', message.guild.owner, true)
  .addField('Üye Sayısı', message.guild.memberCount, true)
  .addField('Kanal Sayısı', message.guild.channels.size, true)
  .addField('Roller', message.guild.roles.map(role => role.name).join(', '), true)
  .addField('Doğrulama Seviyesi', message.guild.verificationLevel, true)
  .addField('Giriş-Çıkış Kanalı', gcKanalyazi, true)
  .addField('Sayaç Kanalı', sayacKanalyazi, true)
  .addField('Log Kanalı', logKanalyazi, true)
  .addField('Otorol', `\`${otorol2}\``, true)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(sunucubilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu-bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};