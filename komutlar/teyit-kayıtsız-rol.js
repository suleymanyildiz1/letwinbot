const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  let kayıtsızrol = message.mentions.roles.first();

 if (!kayıtsızrol) {
    return message.channel.send(`Lütfen Bir Rol Etiketle!`)
    }
//sykocoder
db.set(`kayıtsızrol_${message.guild.id}`, kayıtsızrol.name)

const embed = new Discord.RichEmbed()
.setDescription(`Teyit Sistemi İçin Başarıyla Kayıtsız Rol Ayarlandı. \nAyarlanan Rol: <@${kayıtsızrol}>`)
message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'teyit-kayıtsız-rol',
    description: 'Kayıt Sistemi.',
    usage: 'kayıt-kayıtsız-rolayarla <@rol>'
}