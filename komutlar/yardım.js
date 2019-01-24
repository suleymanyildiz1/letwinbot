const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  
  message.channel.send(`Eklenecek.`)
  
  if (params[0]) {
    message.channel.sendCode("js", `KOMUTLAR:

${prefix}js               ::     JavaScript kanallarına erişim sağlar.
${prefix}istatistik       ::     Botun istatistiklerini görmenizi sağlar.
${prefix}istek-kod        ::     İstediğiniz kodu Paylaşımcılara bildirir.
${prefix}kanalbilgi       ::     Komutu kullandığınız kanalın bilgilerini gösterir.
${prefix}kullanıcıbilgi   ::     Kullanıcı bilgilerinizi görmenizi sağlar.
${prefix}öneri            ::     Bot sahiplerine öneride bulunmanızı sağlar.
${prefix}ping             ::     Botun pingini görmenizi sağlar.
${prefix}rolbilgi         ::     Etiketlediğiniz rolün bilgilerini gösterir.
${prefix}sor              ::     Bota soru sorarsınız.
${prefix}sunucubilgi      ::     Sunucu bilgilerini gösterir.`);
  } else {
 
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      let komut = command.help.name
      let kullanim = `!${command.help.usage}`
      let aciklama = command.help.description
      let alternatifler = command.conf.aliases
      let ss;
      if (alternatifler == '') ss = 'Bulunmamakta.'
      else ss = alternatifler
      
      let embedyardim = new Discord.RichEmbed()
      .setColor("BLUE")
      .setAuthor(`${komut} komutu`, client.user.avatarURL)
      .addField(`Kullanım`, `${kullanim}`)
      .addField(`Açıklama`, `${aciklama}`)
      .addField(`Alternatifler`, `${ss}`)
      message.channel.send(embedyardim)
  }}
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