const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Üyeleri At\`" yetkisine sahip olmalısın.`);
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = await db.fetch(`modlogK_${message.guild.id}`);
  let modlog2 = guild.channels.find('name', modlog);
  if (reason.length < 1) return message.channel.send(`<:BEEhayir:519886397482729473>Kick sebebini yazmalısın.`);
  if (message.mentions.users.size < 1) return message.channel.send(`<:BEEhayir:519886397482729473>Kickleyeceğin kişiyi etiketlemelisin.`).catch(console.error);
  if (!message.guild.member(user).kickable) return message.channel.send(`<:BEEhayir:519886397482729473>Yetkilileri sunucudan atamam.`);
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