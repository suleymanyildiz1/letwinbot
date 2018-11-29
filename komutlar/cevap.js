const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let cevap = args.slice(0).join("  ")
if (cevap.length < 1) return message.reply('Bir cevap girin.');
  message.delete();
  message.reply('Cevabınız alındı.Cevaplar bir süre sonra test edilecek.').then(msg => msg.delete(5000));
  const cevapkanal = "516224918661234688"
  const embed = new Discord.RichEmbed()
  .addField('Kullanıcı : ',message.author.tag)
  .addField('Cevabı ',cevap)
  client.channels.get(cevapkanal).send({
    embed: embed
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cevapla'],
  permLevel: 0
};

exports.help = {
  name: 'cevap',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'istek [yazdırmak istediğiniz şey]'
};