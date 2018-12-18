const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  
  if ([0]) {
    message.channel.sendCode("asciidoc", `= Real Bot Komutlar =

rb!kaydol           ::     Sunucuya kaydolmanızı sağlar.
rb!js               ::     JavaScript kanallarına erişim sağlar.
rb!canlıdestek      ::     Yetkili kişilerle canlı desteğe geçmenizi sağlar.
rb!hatalıkomut      ::     Belirttiğiniz komutun hatalı olduğunu yetkili kişilere bildirir.
rb!istatistik       ::     Botun istatistiklerini görmenizi sağlar.
rb!istek-kod        ::     İstediğiniz kodu Paylaşımcılara bildirir.
rb!kanalbilgi       ::     Komutu kullandığınız kanalın bilgilerini gösterir.
rb!kullanıcıbilgi   ::     Kullanıcı bilgilerinizi görmenizi sağlar.
rb!öneri            ::     Bot sahiplerine öneride bulunmanızı sağlar.
rb!ping             ::     Botun pingini görmenizi sağlar.
rb!rolbilgi         ::     Etiketlediğiniz rolün bilgilerini gösterir.
rb!sor              ::     Bota soru sorarsınız.
rb!sunucubilgi      ::     Sunucu bilgilerini gösterir.

= Müzik Komutları =

rb!çal              ::     Belirttiğiniz URL veya müzik ismini YouTube'da aratır.
rb!çalan            ::     Çalan müziği gösterir.
rb!devam            ::     Müziği durdurduysanız devam ettirir.
rb!durdur           ::     Müziği durdurur.
rb!geç              ::     Müziği geçer.
rb!ses              ::     Sesi ayarlar.
rb!sıra             ::     Sırayı gösterir.`);
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