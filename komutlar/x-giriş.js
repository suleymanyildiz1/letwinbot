const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  const mesaj2 = await db.fetch(`cikism_${message.guild.id}`);
  
  let mesaj = args.slice(0).join(' ')
  
      if (!mesaj) {
        return message.channel.send(`<:BEEhayir:519886397482729473>Çıkış mesajını yazmalısın.`)
    }
  
    db.set(`cikism_${message.guild.id}`, mesaj)
    message.channel.send(`<:BEEevet:519886383456714784>Çıkış mesajı \`${mesaj}\` olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['çıkışm','çıkış-mesaj'],
    permLevel: 3
}

exports.help = {
    name: 'çıkışmesaj',
    description: 'Çıkış mesajını ayarlar. (Kullanıcı isminin geleceği yere "-kullanıcı-", sunucu isminin geleceği yere "-sunucu-" yazınız.)',
    usage: 'çıkışmesaj <yazı>'
}