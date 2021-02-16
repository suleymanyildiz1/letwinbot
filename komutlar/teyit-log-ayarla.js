const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:x: | Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

let teyitlog = message.mentions.channels.first();

if (!teyitlog) {
    return message.channel.send(`:x: | Bir Kanal Etiketlemelisin!`)
}
//sykocoder
db.set(`teyitlog_${message.guild.id}`, teyitlog.name)

const embed = new Discord.RichEmbed()
.setDescription(`:white_check_mark: | Teyit Olma Log Kanalı Başarıyla ${teyitlog} Olarak Ayarlandı`)
message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'teyit-log-ayarla',
    description: '',
    usage: 'teyit-kanal-log <@kayitolmakanal>'
}