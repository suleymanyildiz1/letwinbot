const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");

exports.run = (client, message) => {
  
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
  const iembed = new Discord.RichEmbed()
  .setAuthor(`Bee | İstatistik`, client.user.avatarURL || client.user.defaultAvatarURL)
  .setColor("BLUE")
  .addField(`Geliştirici`,`<@362692630062301195>`, true)
  .addField(`Çalışma Süresi`,`\`${duration}\``, true)
  .addField(`Bellek Kullanımı`,`\`${(process.memoryUsage().heapUsed /1024 / 1024).toFixed(2)}\` MB`, true)
  .addField(`Sürümler`, `Discord.js Sürümü : \`v${Discord.version}\` \n Node.js Sürümü : \`${process.version}\``, true)
  .addField(`İşletim Sistemi`, `\`${os.platform()}\` | \`${os.arch()}\``, true)
  .addField(`Ping`, `${client.ping}`, true)
  .addField(`Sunucular`,`\`${client.guilds.size.toLocaleString()}\``, true)
  .addField(`Kanallar`,`\`${client.channels.size.toLocaleString()}\``, true)
  .addField(`Kullanıcılar`,`\`${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\``, true)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  message.channel.send(iembed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistiklerini gösterir.',
  usage: 'istatistik'
};