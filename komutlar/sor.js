const Discord = require('discord.js');
const cleverbot = require('cleverbot.io');
const bot = new cleverbot('oLmW97rzhDPyVO9A','EDfTd6ENv6cQjt4zHjblB4raWQEwPhsJ');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  const emoji = (client.emojis.find("name", "BEEyukleniyor").toString())
  bot.setNick('Bee');
  
  let yazi = args.join(' ');
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