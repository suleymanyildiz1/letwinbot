const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const Cleverbot = require('cleverbot.io');
let bot = new Cleverbot('oLmW97rzhDPyVO9A','EDfTd6ENv6cQjt4zHjblB4raWQEwPhsJ');

exports.run = (client, message, params) => {
  const emoji = (client.emojis.find("name", "BEEyukleniyor").toString())
  bot.setNick('Bee');
  
  let yazi = params.slice(0).join(' ');
  if (yazi.length < 1) return message.channel.send(`<:BEEhayir:519886397482729473>Bir soru sormalısın.`);
  
  message.channel.send(`${emoji} | Cevap yükleniyor...`).then (message => {
  bot.create(function (err, session) {
    bot.ask(yazi, function (err, response) {
     message.edit(response);
 });
 
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'sor',
  usage: 'sor'
};