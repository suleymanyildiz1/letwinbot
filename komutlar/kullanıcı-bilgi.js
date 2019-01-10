  const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require('moment');

exports.run = (client, message, params) => {
  
  var user = message.mentions.users.first() || message.author;
  var Durum = user.presence.status;
  var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
  var durm = (Durum == "online" ? ("<:BEEonline:522416875347640360>Çevrimiçi") : (Durum == "offline" ? ("<:BEEoffline:531018152461467668>Çevrimdışı") : (Durum == "idle" ? ("<:BEEidle:531018139765309444>Boşta") : (Durum == "dnd" ? ("<:BEEdnd:522416860164128788>Rahatsız Etmeyin") : ("Bilinmiyor.")))))
  
    var tarih = ''
        if(moment(user.createdAt).format('MM') === '01') {
            var tarih = `${moment(user.createdAt).format('DD')}/01/${moment(user.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(user.createdAt).format('MM') === '02') {
            var tarih = `${moment(user.createdAt).format('DD')}/02/${moment(user.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(user.createdAt).format('MM') === '03') {
            var tarih = `${moment(user.createdAt).format('DD')}/03/${moment(user.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(user.createdAt).format('MM') === '04') {
            var tarih = `${moment(user.createdAt).format('DD')}/04/${moment(user.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(user.createdAt).format('MM') === '05') {
            var tarih = `${moment(user.createdAt).format('DD')}/05/${moment(user.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(user.createdAt).format('MM') === '06') {
            var tarih = `${moment(user.createdAt).format('DD')}/06/${moment(user.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(user.createdAt).format('MM') === '07') {
            var tarih = `${moment(user.createdAt).format('DD')}/07/${moment(user.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(user.createdAt).format('MM') === '08') {
            var tarih = `${moment(user.createdAt).format('DD')}/08/${moment(user.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(user.createdAt).format('MM') === '09') {
            var tarih = `${moment(user.createdAt).format('DD')}/09/${moment(user.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(user.createdAt).format('MM') === '10') {
            var tarih = `${moment(user.createdAt).format('DD')}/10/${moment(user.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(user.createdAt).format('MM') === '11') {
            var tarih = `${moment(user.createdAt).format('DD')}/11/${moment(user.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(user.createdAt).format('MM') === '12') {
            var tarih = `${moment(user.createdAt).format('DD')}/12/${moment(user.createdAt).format('YYYY HH:mm:ss')} `
        }

  
  const kullanicibilgimk = new Discord.RichEmbed()
  .setColor('BLUE')
  .setAuthor(user.tag, user.avatarURL)
  .setDescription(user.presence.game ? (`**${user.presence.game.name}** oynuyor`) : 'Hiçbir şey oynamıyor.')
  .setThumbnail(user.avatarURL)
  .addField('ID', user.id, true)
  .addField('İsim', user.username, true)
  .addField('Oluşturulma tarihi', tarih, true)
  .addField('Durum', durm, true)
  return message.channel.send(kullanicibilgimk);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı-bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcıbilgi',
  description: 'Kullanıcı bilginizi gönderir.',
  usage: 'kullanıcıbilgi'
};