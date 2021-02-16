const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  let kızrol = message.mentions.roles.first();

 if (!kızrol) {
    return message.channel.send(`Lütfen Bir Rol Etiketle!`)
    }
//sykocoder
db.set(`kızrol_${message.guild.id}`, kızrol.name)

const embed = new Discord.RichEmbed()
.setDescription(`Teyit Sistemi İçin Başarıyla Kız Rol Ayarlandı. \nAyarlanan Rol: <@${kızrol}>`)
message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'teyit-kız-rol',
    description: 'teyit Sistemi.',
    usage: 'teyit-kız-rolayarla <@rol>'
}
//sykocoder