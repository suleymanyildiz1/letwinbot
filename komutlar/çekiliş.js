const Discord = require('discord.js')


exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
    if (mesaj.length < 1) return message.channel.send(`<:BEEhayir:519886397482729473>Ödülü yazmalısın.`);
    message.delete();
  
    return message.channel.send(`**Çekilişi Yapan Yetkili :** ${message.author}\n**Çekilişi Kazanan :** ${message.guild.members.random()}\n**Ödül** : ${mesaj}`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
  };
  
  exports.help = {
    name: 'çekiliş',
    description: 'Çekiliş yapar.',
    usage: 'çekiliş <ödül>'
  };