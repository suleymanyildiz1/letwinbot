const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:x: | Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

let teyithgkanal = message.mentions.channels.first();

if (!teyithgkanal) {
    return message.channel.send(`:x: | Bir Kanal Etiketlemelisin!`)
}
//sykocoder
db.set(`teyithgkanal_${message.guild.id}`, teyithgkanal.name)

const embed = new Discord.RichEmbed()
.setDescription(`:white_check_mark: | Teyit Hoşgeldin Kanalı Başarıyla ${teyithgkanal} Olarak Ayarlandı`)
message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'teyit-hg-kanal',
    description: '',
    usage: 'teyit-kanal <@teyithgkanal>'
}