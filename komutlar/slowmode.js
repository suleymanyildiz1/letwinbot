const Discord = require('discord.js');

exports.run = async(client, message, args) => {
 
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.`);
  if (message.channel.type !== "text") return;
  const limit = args[0] ? args[0] : 0;
  if(!limit) {
    message.channel.send(`<:BEEhayir:519886397482729473>Bir sayı yazmalısın.`)
    return
  }
  if (limit > 100) {
    return message.channel.send(`<:BEEhayir:519886397482729473>Süre limiti maksimum \`100\` saniye olabilir.`)
  }
  message.channel.sendEmbed(`<:BEEevet:519886383456714784>Bu kanal için yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`)
  var request = require('request');
  request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
      rate_limit_per_user: limit
    },
    headers: {
      "Authorization": `Bot ${client.token}`
    },
  })};

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 3,
};

exports.help = {
  name: 'slowmode',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'slowmode [1/10]',
};