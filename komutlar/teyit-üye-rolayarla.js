const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  let üyerol = message.mentions.roles.first();

 if (!üyerol) {
    return message.channel.send(`Lütfen Bir Rol Etiketle!`)
    }

db.set(`üyerol_${message.guild.id}`, üyerol.name)
//sykocoder
const embed = new Discord.RichEmbed()
.setDescription(`Kayıt Sistemi İçin Başarıyla Verilecek Rol Ayarlandı. \nAyarlanan Rol: <@${üyerol}>`)
.setFooter('message.user.avatarURL')
message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}
//sykocoder
exports.help = {
    name: 'teyit-üye-rol',
    description: 'Kayıt Sistemi.',
    usage: 'teyit-üye-rolayarla <@rol>'
}