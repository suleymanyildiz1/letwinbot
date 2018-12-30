const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  const mesaj2 = await db.fetch(`otorolm_${message.guild.id}`);
  
  let mesaj = args.slice(0).join(' ')
  
  if(mesaj === "sıfırla") {
    if(!mesaj2) {
      message.channel.send(`<:BEEhayir:519886397482729473>Ayarlanmayan şeyi sıfırlayamazsın.`)
      return
    }
    
    db.delete(`otorolm_${message.guild.id}`)
    message.channel.send(`<:BEEevet:519886383456714784>Otorol mesajı başarıyla sıfırlandı.`)
    return
  }
  
      if (!mesaj) {
        return message.channel.send(`<:BEEhayir:519886397482729473>Otorol mesajını yazmalısın.`)
    }
  
    db.set(`otorolm_${message.guild.id}`, mesaj)
    message.channel.send(`<:BEEevet:519886383456714784>Otorol mesajı \`${mesaj}\` olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['otorolm','otorol-mesaj'],
    permLevel: 3
}

exports.help = {
    name: 'otorolmesaj',
    description: 'Otorol mesajını ayarlar. (Kullanıcı isminin geleceği yere "-kullanıcı-", rol isminin geleceği yere "-rol-" yazınız.)',
    usage: 'otorolmesaj <yazı>'
}