const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let istek = args.slice(0).join("  ")
if (istek.length < 1) return message.reply(`<:BEEhayir:519886397482729473>İstediğiniz kodu yazınız.`);
  message.delete();
  message.channel.send(`<:BEEevet:519886383456714784>İstek kod talebiniz alındı.Teşekkürler.`).then(msg => msg.delete(5000));
  const istekkanal = "516138731640717312"
  const embed = new Discord.RichEmbed()
  .addField('Kullanıcı',message.author.tag)
  .addField('İstediği Kod',istek)
  client.channels.get(istekkanal).send({
    embed: embed
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istekkod','istek-kod','kod','komut','istek-komut','istekkomut'],
  permLevel: 0
};

exports.help = {
  name: 'istek',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'istek [yazdırmak istediğiniz şey]'
};