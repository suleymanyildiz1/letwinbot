const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let rol = message.mentions.roles.first()
  let rolk = message.mentions.channels.first() || message.channel
  
  if (!rol) {
    return message.channel.send(`<:BEEhayir:519886397482729473>Otorol olarak ayarlamak istediğin rolü etiketlemelisin. \`${prefix}otorol @Üye\``)
    }
  
  if (!rolk) {
    return message.channel.send(`<:BEEhayir:519886397482729473>Otorol kanalını etiketlemelisin.`)
  }
  
  
  db.set(`otorol_${message.guild.id}`, rol.name)
  db.set(`rolK_${message.guild.id}` ,rolk.id)
  
    message.channel.send(`<:BEEevet:519886383456714784>Otorol \`${rol.name}\`, otorol kanalı ${rolk} olarak ayarlandı. Kapatmak için \`${prefix}kapat otorol\` yazmalısın.`)
  
  };
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['oto-rol'],
    permLevel: 0
}

exports.help = {
    name: 'otorol',
    description: 'Otorolü ayarlar.',
    usage: 'otorol <@rol>'
}