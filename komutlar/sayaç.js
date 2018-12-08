const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        if(!args[0]) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`<:BEEhayir:519886397482729473>Bir sayı yazmalısın.`)
                        .setColor(ayarlar.renk)
                        .setTimestamp()
                message.channel.send(embed)
                return
        }
 
        let profil = await db.fetch(`sayac_${message.guild.id}`);
 
        if(args[0] === "sıfırla") {
                if(!profil) {
                        const embed5 = new Discord.RichEmbed()
                                .setDescription(`<:BEEhayir:519886397482729473>Ayarlanmayan şeyi sıfırlayamazsın.`)
                                .setColor(ayarlar.renk)
                                .setTimestamp()
                        message.channel.send(embed5)
                        return
                }
                db.delete(`sayac_${message.guild.id}`)
                const embed2 = new Discord.RichEmbed()
                        .setDescription(`<:BEEevet:519886397482729473>Sayaç başarıyla sıfırlandı.`)
                        .setColor(ayarlar.renk)
                        .setTimestamp()
                message.channel.send(embed2)
                return
        }
 
        if(isNaN(args[0])) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`<:BEEhayir:519886397482729473>Bir sayı yazmalısın.`)
                        .setColor(ayarlar.renk)
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(args[0] <= message.guild.members.size) {
                const embed32 = new Discord.RichEmbed()
                        .setDescription(`<:BEEhayir:519886397482729473>Sunucu sayısından (${message.guild.members.size}) daha yüksek bir değer girmelisin.`)
                        .setColor(ayarlar.renk)
                        .setTimestamp()
                message.channel.send(embed32)
                return
        }
 
        db.set(`sayac_${message.guild.id}`, args[0])
        const embe99 = new Discord.RichEmbed()
                .setDescription(`<:BEEevet:519886383456714784>Sayaç başarıyla ${args[0]} olarak ayarlandı.`)
                .setColor(ayarlar.renk)
                .setTimestamp()
        message.channel.send(embe99)
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