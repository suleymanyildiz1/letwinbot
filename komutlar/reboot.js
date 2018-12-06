const Discord = require('discord.js');

exports.run = (client, message, args) => {
	
    message.channel.send(`Yeniden Başlatılıyorum...`).then(msg => {
    console.log(`[ - ] BOT : Yeniden Başlatılıyorum...`);
    process.exit(0);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};