const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = await db.fetch(`modlogK_${message.guild.id}`);
  let modlog2 = guild.channels.find('name', modlog);
  if (reason.length < 1) return message.reply('Ban sebebini yazınız.');
  if (message.mentions.users.size < 1) return message.reply('Banlayacağınız kişiyi etiketleyiniz.').catch(console.error);
  if (!message.guild.member(user).kickable) return message.reply('Yetkilileri sunucudan banlayamam.');
  message.guild.member(user).ban();
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Ban')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator}`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  modlog2.send(embed);
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