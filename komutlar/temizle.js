const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.`);
 
  if(!args[0]) return message.channel.send(`:no_entry: Silinecek mesaj miktarını yazmalısın. ${prefix}temizle 50`);
  message.delete().then(message => message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`:white_check_mark: Başarıyla \`${(args[0])}\` adet mesaj silindi.`).then(msg => msg.delete(5000));
  }))
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Belirttiğiniz miktarda mesaj siler.',
  usage: 'temizle <1/99>'
};