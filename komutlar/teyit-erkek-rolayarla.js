const Discord = require('discord.js')
const db = require('quick.db')
//sykocoder
exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  let erkekrol = message.mentions.roles.first();

 if (!erkekrol) {
    return message.channel.send(`Lütfen Bir Rol Etiketle!`)
    }

db.set(`erkekrol_${message.guild.id}`, erkekrol.name)

const embed = new Discord.RichEmbed()
.setDescription(`Teyit Sistemi İçin Başarıyla Erkek Rol Ayarlandı. \nAyarlanan Rol: <@${erkekrol}>`)
message.channel.send(embed)
};//sykocoder
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'teyit-erkek-rol',
    description: 'Kayıt Sistemi.',
    usage: 'teyit-erkek-rolayarla <@rol>'
}