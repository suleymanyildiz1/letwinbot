const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (client, message, args) => {
  const evet = (client.emojis.find("name", "BEEevet").toString())
  const hayir = (client.emojis.find("name", "BEEhayir").toString())
  
           var embed = new Discord.RichEmbed()
           .setColor("BLUE")
           .setThumbnail(message.guild.iconURL)
           .addField("ID", `\`${message.channel.id}\``)
           if (message.channel.nsfw) {
             embed.addField("NSFW Kanalı", `${evet}`, true)
           } else {
             embed.addField("NSFW Kanalı", `${hayir}`, true)
           }
  embed.addField('Oluşturulduğu Tarih', moment(message.channel.createdAt).format('DD/MM/YYYY'), true)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kanal-bilgi'],
  kategori: "ekstra",
  permLevel: 0
};

exports.help = {
  name: 'kanalbilgi',
  description: 'Komutu kullandığınız kanalın bilgilerini gösterir.',
  usage: 'kanalbilgi'
}