const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setImage(message.guild.iconURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['sunucu-resmi','sunucuresmi','sunucu-resim','sunucuresim'],
  permLevel: 0 
};

exports.help = {
  name: 'servericon', 
  description: 'Serverin iconunu gösterir.',
  usage: 'servericon'
};