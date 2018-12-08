const Discord = require('discord.js');
exports.run = function(client, message, args) {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.`);
if(!args[0]) return message.channel.send(`<:BEEhayir:519886397482729473>Silinecek mesaj miktarını yazmalısın.`);
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<:BEEevet:519886383456714784>\`${args[0]}\` adet mesaj silindi.`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};