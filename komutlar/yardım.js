const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setTitle("**KOMUTLAR**")
  .setColor(0x2bff00)
  .addField("》rb!kaydol","Sunucuya kaydolmanızı sağlar.")
  .addField("》rb!js","JS kanallarına erişim sağlar.")
  .addField("》rb!canlıdestek","Yetkili kişilerle canlı desteğe geçmenizi sağlar.")
  .addField("》rb!hatalı-komut <#kanal>","Belirttiğiniz kanaldaki komutun hatalı olduğunu yetkili kişilere bildirir.")
  .addField("》rb!istatistik","Botun istatistiklerini görmenizi sağlar.")
  .addField("》rb!istek-kod","İstediğiniz kodu Paylaşımcılara bildirir.")
  .addField("》rb!kullanıcıbilgim","Kullanıcı bilgilerinizi görmenizi sağlar.")
  .addField("》rb!öneri <öneriniz> ","Bot sahiplerine öneride bulunmanızı sağlar.")
  .addField("》rb!ping","Botun pingini görmenizi sağlar.")
  .addField("Diğer","[**Davet**](https://discordapp.com/oauth2/authorize?client_id=513097500748546049&scope=bot&permissions=8) | [**Sunucu**](https://discord.gg/dDYsvyy)")
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  
  if ([0]) {
    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};