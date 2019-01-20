const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  const mesaj2 = await db.fetch(`girism_${message.guild.id}`);
  
  let mesaj = args.slice(0).join(' ')
  
      if (!mesaj) {
        return message.channel.send(`:no_entry: Giriş mesajını yazmalısın. \`${prefix}girişmesaj -kullanıcı- adlı kullanıcı -sunucu- adlı sunucuya katıldı.\``)
    }
  
    db.set(`girism_${message.guild.id}`, mesaj)
    message.channel.send(`:white_check_mark: Giriş mesajı \`${mesaj}\` olarak ayarlandı. Kapatmak için \`${prefix}kapat girişmesaj\` yazmalısın.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['girişm','giriş-mesaj'],
    permLevel: 3
}

exports.help = {
    name: 'girişmesaj',
    description: 'Giriş mesajını ayarlar. (Kullanıcı isminin geleceği yere "-kullanıcı-", sunucu isminin geleceği yere "-sunucu-" yazınız.)',
    usage: 'girişmesaj <yazı>'
}