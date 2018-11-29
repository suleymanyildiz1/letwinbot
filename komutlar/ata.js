const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let [sahip, bot] = args.join(" ").split(" - ");
  if (sahip.length < 1) return message.reply('Kim olacak ?');
  if (bot.length < 1) return message.reply('Ne olacak ?');
  message.delete();
  message.channel.send(sahip + " adlı kullanıcı " + bot + " olarak atanmıştır.Hayırlı olsun !");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'ata',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'ata <mesaj>'
};