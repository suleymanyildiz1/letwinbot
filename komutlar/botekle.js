const Discord = require('discord.js');


exports.run = function(client, message) {
  
  message.channel.send(`<:ayy:519886397482729473>Bot ekletme özelliğimiz kapatılmıştır.`).then(msg => msg.delete(5000));
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot','bot-ekle'], 
  permLevel: 0 
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya bot eklersiniz.", 
  usage: 'botekle <mesaj>' 
};