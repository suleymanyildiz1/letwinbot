const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('Teyit Hoşgeldin Mesajı İçin Örnek k!teyit-hgmesaj -uye- Sunucumuza Hoşgeldin Yetkililer Seninle  İlgilenicektir Not: Sadece -uye- Ve -server- Değişkenlerini Kullanınız Başka Bir Değişken Bulunmamaktadır.')
  
 message.channel.send('Teyit hg mesajı `'+mesaj+'` Olarak ayarlandı.') 
 db.set(`teyithgmesaj_${message.guild.id}`, mesaj)  
};//sykocoder
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'teyit-hgmesaj',
  description: 'teyit-hgmesaj', 
  usage: 'teyit-hgmesaj'
};