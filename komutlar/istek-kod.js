const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let istek = args.slice(0).join("  ")
  if (!istek) return message.reply(`:no_entry: İstediğiniz kodu yazınız.`);
  message.channel.send(`:white_check_mark: İstek kod talebiniz alındı. Teşekkürler.`)
  const istekkanal = "516138731640717312"
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .addField('Kullanıcı', message.author.tag)
  .addField('İstediği Kod', istek)
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