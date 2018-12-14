const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        if(!args[0]) {
                message.channel.send(`<:BEEhayir:519886397482729473>Bir sayı yazmalısın.`)
                return
        }
 
        let profil = await db.fetch(`sayac_${message.guild.id}`);
 
        if(args[0] === "sıfırla") {
                if(!profil) {
                        message.channel.send(`<:BEEhayir:519886397482729473>Ayarlanmayan şeyi sıfırlayamazsın.`)
                        return
                }
                db.delete(`sayac_${message.guild.id}`)
                message.channel.send(`<:BEEevet:519886397482729473>Sayaç başarıyla sıfırlandı.`)
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
        message.channel.send(`<:BEEevet:519886383456714784>Sayaç başarıyla ${args[0]} olarak ayarlandı.`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayacayarla', 'sayac', 'sayaç', 'sayaçayarla'],
        permLevel: 3
}
 
exports.help = {
        name: 'sayaç-ayarla',
        kategori: "ayarlar",
        description: 'Sayacı ayarlar.',
        usage: 'sayaç-ayarla [sayı/sıfırla]'
}