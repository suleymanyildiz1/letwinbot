const Discord = require('discord.js')
const moment = require('moment')
const ayarlar = require('../ayarlar.json')
require('moment-duration-format')
exports.run = async(client, message, args) => {
const Aktiflik = moment.duration(client.uptime).format(' D [Gün], H [Saat], m [Dakika], s [Saniye]')
const Letwin = new Discord.MessageEmbed()
.setAuthor(client.user.username+' - İstatistik',client.user.avatarURL())
.addField('**Genel Veriler**',`
Sunucu » \`${client.guilds.cache.size}\`
Kullanıcı » \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`
Gecikme » \`${client.ws.ping}\`
Bellek » \`${(process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2)}\`
Aktiflik » \`${Aktiflik}\``)
.addField('**Genel Bilgiler**',`
BOT Sahibi » \`${client.users.cache.get(ayarlar.sahip).tag}\``)
.addField('**Sürümler**',`
Discord.JS » \`${Discord.version}\`
Node.JS » \`${process.version}\``)
.setThumbnail(client.user.avatarURL())
.setFooter(`© ${client.user.username}`,client.user.avatarURL())
message.channel.send(Letwin)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['i','istatistik'],
    permLevel: 0
  }

  exports.help = {
    name: 'istatistik',
    description: 'Istatistiği Yollar',
    usage: 'istatistik'
  }
