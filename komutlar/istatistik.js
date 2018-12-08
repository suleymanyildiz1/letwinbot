const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message) => {
  
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
  const iembed = new Discord.RichEmbed()
  .setAuthor(`Bee | İstatistik`, client.user.avatarURL || client.user.defaultAvatarURL)
  .setColor("BLUE")
  .addField(`Geliştirici`,`<@362692630062301195>`, true)
  .addField(`Çalışma Süresi`,`\`${duration}\``)
  .addField(`Bellek Kullanımı`,`\`${(process.memoryUsage().heapUsed /1024 / 1024).toFixed(2)}\` MB`, true)
  .addField(`Discord.js Sürümü`,`\`v${Discord.version}\``, true)
  .addField(`Ping`,`\`${client.ping}\``, true)
  .addField(`Sunucular`,`\`${client.guilds.size.toLocaleString()}\``, true)
  .addField(`Kanallar`,`\`${client.channels.size.toLocaleString()}\``, true)
  .addField(`Kullanıcılar`,`\`${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\``, true)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  message.channel.send(iembed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};