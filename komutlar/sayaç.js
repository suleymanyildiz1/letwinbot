const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
  
  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        
  if(!args[0]) {
    message.channel.send(`<:BEEhayir:519886397482729473>Bir sayı yazmalısın.`)
    return
  }
  
  if(!sayackanal) {
   message.channel.send(`<:BEEhayir:519886397482729473>Sayaç kanalını etiketlemelisin.`)
  }
  
  
  if(args[0] === "sıfırla") {
    if(!sayacsayi) {
      message.channel.send(`<:BEEhayir:519886397482729473>Ayarlanmayan şeyi sıfırlayamazsın.`)
      return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(`<:BEEevet:519886383456714784>Sayaç başarıyla sıfırlandı.`)
    return
  }
  
  if(isNaN(args[0])) {
    message.channel.send(`<:BEEhayir:519886397482729473>Bir sayı yazmalısın.`)
    return
  }
 
        if(args[0] <= message.guild.members.size) {
                message.channel.send(`<:BEEhayir:519886397482729473>Sunucudaki kullanıcı sayısından (${message.guild.members.size}) daha yüksek bir değer girmelisin.`)
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[0])
  db.set(`sayacK_${message.guild.id}`, sayackanal.name)
  
  message.channel.send(`<:BEEevet:519886383456714784>Sayaç \`${args[0]}\`, sayaç kanalı ${sayackanal} olarak ayarlandı.`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayac'],
        permLevel: 3
}
 
exports.help = {
        name: 'sayaç',
        description: 'Sayacı ayarlar.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}