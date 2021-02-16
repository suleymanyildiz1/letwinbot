const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:x: | Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

let teyitkanal = message.mentions.channels.first();

if (!teyitkanal) {
    return message.channel.send(`:x: | Bir Kanal Etiketlemelisin!`)
}
//sykocoder
db.set(`teyitkanal_${message.guild.id}`, teyitkanal.name)

const embed = new Discord.RichEmbed()
.setDescription(`:white_check_mark: | teyit Olma Kanalı Başarıyla ${teyitkanal} Olarak Ayarlandı`)
message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'teyit-kanal-ayarla',
    description: '',
    usage: 'teyit-kanal <@kayitolmakanal>'
}
//sykocoder