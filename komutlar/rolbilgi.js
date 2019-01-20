const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
    var tarih = ''
        if(moment(message.guild.createdAt).format('MM') === '01') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/01/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '02') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/02/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '03') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/03/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '04') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/04/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '05') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/05/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '06') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/06/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '07') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/07/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '08') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/08/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '09') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/09/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '10') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/10/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '11') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/11/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '12') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/12/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
  
  //const role = message.mentions.roles.first()
  var rol = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find("name", rol)
  
  if(!role) return message.channel.send(`:no_entry: Bir rol ismi yazmalısın. \`${prefix}rolbilgi Üye\``);
  var temps = moment(message.createdTimestamp).format("LLLL");
  var roleinfoEmbed = new Discord.RichEmbed()
  .setColor('BLUE')
  .addField('Rol İsmi', role.name, true)
  .addField('ID', role.id, true)
  .addField('Role Sahip Kullanıcılar', role.members.size, true)
  .addField('Renk', role.hexColor, true)
  .addField('Etiketlenme İzni', role.mentionable ? '\n:white_check_mark: ' : ':no_entry:', true)
  .addField('Oluşturulma Tarihi', tarih, true)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  message.channel.send(roleinfoEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rol-bilgi'],
  kategori: "ekstra",
  permLevel: 0
};

exports.help = {
  name: 'rolbilgi',
  description: 'Etiketlediğiniz rolün bilgilerini gönderir.',
  usage: 'rolbilgi <@rol>'
};