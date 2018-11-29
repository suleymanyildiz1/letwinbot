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

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Uyarı')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator}`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  modlog2.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uyar'],
  permLevel: 3
};

exports.help = {
  name: 'uyarı',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'uyarı [kullanıcı] [sebep]'
};