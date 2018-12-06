const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:ayy:519886397482729473>Bu komutu kullanabilmek için "\`Üyeleri Engelle\`" yetkisine sahip olmalısın.`);
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let uyarikanal = "515979065149095956";
  if (reason.length < 1) return message.channel.send(`<:ayy:519886397482729473>Uyarı sebebini yazmalısın.`);
  if (message.mentions.users.size < 1) return message.channel.send(`<:ayy:519886397482729473>Uyaracağın kişiyi etiketlemelisin.`).catch(console.error);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Uyarı')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator}`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  client.channels.get(uyarikanal).send(embed);
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