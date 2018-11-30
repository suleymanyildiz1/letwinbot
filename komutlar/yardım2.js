const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  message.channel.sendCode("asciidoc", `
》rb!kaydol = Sunucuya Kaydolursun.

》rb!js = JS Kanallarını görürsün.

》rb!commando = Commando kanallarını görürsün.

》rb!dbm = DBM kanallarını görürsün.
》rb!canlıdestek = Yetkili kişilerle canlı desteğe geçersin.
》rb!hatalı-komut <komut ismi> = Belirttiğiniz komutun hatalı olduğunu yetkililere bildirir.
》rb!istatistik = Botun istatistiklerini gösterir.
》rb!istek-kod = İstediğiniz kodu yetkili kişilere bildirir.
》rb!kullanıcıbilgim = Kullanıcı bilgilerinizi görürsünüz.
》rb!öneri <öneri> = Bot sahiplerine öneri gönderirsin.
》rb!ping = Botun pingini görürsün.`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help2'],
  permLevel: 0
};

exports.help = {
  name: 'yardım2',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};