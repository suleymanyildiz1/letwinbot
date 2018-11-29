const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = await db.fetch(`modlogK_${message.guild.id}`);
  let modlog2 = guild.channels.find('name', modlog);
  if (reason.length < 1) return message.reply('Uyarı sebebini yazınız.');
  if (message.mentions.users.size < 1) return message.reply('Uyaracağınız kişiyi etiketleyiniz.').catch(console.error);
  if (!message.guild.member(user).kickable) return message.reply('Yetkilileri sunucudan atamam.');
  message.guild.member(user).kick();
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Kick')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator}`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  modlog2.send(embed);
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