const Discord = require('discord.js')


exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:ayy:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
    if (mesaj.length < 1) return message.channel.send(`<:ayy:519886397482729473>Ödülü yazmalısın.`);
    message.delete();
    const embed = new Discord.RichEmbed()
    .addField('Sunucu İsmi:', message.guild.name , true)
    .setColor("BLUE")
    .addField('Ödül', mesaj)
    .addField("Çekilişi Başlatan:", `<@${message.author.id}>`, true)
    .addField("Çekilişin Yapıldığı Kanal:", message.channel)
    .addField("Çekilişin Yapıldığı Zaman:", message.createdAt)
    .addField('Çekilişi Kazanan', `<@${message.guild.members.random().id}>`)
    .setThumbnail(message.guild.iconURL)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
  };
  
  exports.help = {
    name: 'çekiliş',
    description: 'embedyaz',
    usage: 'embedyaz'
  };