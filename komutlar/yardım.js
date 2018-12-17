const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setTitle("**KOMUTLAR**")
  .setColor(0x2bff00)
  .addField("》rb!kaydol","Sunucuya kaydolmanızı sağlar.")
  .addField("》rb!js","JS kanallarına erişim sağlar.")
  .addField("》rb!canlıdestek",".")
  .addField("》rb!hatalı-komut <#kanal>","")
  .addField("》rb!istatistik","")
  .addField("》rb!istek-kod","İ")
  .addField("》rb!kullanıcıbilgim","K")
  .addField("》rb!öneri <öneriniz> ","Bot sahiplerine öneride bulunmanızı sağlar.")
  .addField("》rb!ping","Botun pingini görmenizi sağlar.")
  .addField("Diğer","[**Davet**](https://discordapp.com/oauth2/authorize?client_id=513097500748546049&scope=bot&permissions=8) | [**Sunucu**](https://discord.gg/dDYsvyy)")
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  
  if ([0]) {
    message.channel.sendCode("asciidoc", `= Real Bot Komutlar =

rb!kaydol          :: Sunucuya kaydolmanızı sağlar.
rb!js              :: JavaScript kanallarına erişim sağlar.
rb!canlıdestek     :: Yetkili kişilerle canlı desteğe geçmenizi sağlar.
rb!hatalıkomut     :: Belirttiğiniz komutun hatalı olduğunu yetkili kişilere bildirir.
rb!istatistik      :: Botun istatistiklerini görmenizi sağlar.
rb!istek-kod       :: İstediğiniz kodu Paylaşımcılara bildirir.
rb!kullanıcıbilgi  :: 
rb!öneri           :: 
rb!ping            :: 

= Müzik Komutları =

rb!çal             :: Belirttiğiniz URL veya müzik ismini YouTube'da aratır.
rb!çalan           :: Çalan müziği gösterir.
rb!devam           :: Müziği durdurduysanız devam ettirir.
rb!durdur          :: Müziği durdurur.
rb!geç             :: Müziği geçer.
rb!ses             :: Sesi ayarlar.
rb!sıra            :: Sırayı gösterir.`);
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