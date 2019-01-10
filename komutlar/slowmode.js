const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
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
  message.channel.send(`<:BEEevet:519886383456714784>Başarıyla bu kanal için yazma süre limiti \`${limit}\` saniye olarak ayarlandı.`)
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
  aliases: ["slow-mode", "yavaşmod", "yavaş-mod"],
  permLevel: 3,
};

exports.help = {
  name: 'slowmode',
  description: 'Komutu kullandığınız kanalda belirttiğiniz saniyelik yavaş mod uygular.',
  usage: 'slowmode <1/100>',
};