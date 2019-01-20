const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  const komut = args.join(" ")
  const evet = (client.emojis.find("name", "white_check_mark").toString())
  const hayir = (client.emojis.find("name", "no_entry").toString())
  let preffix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  let girişm = await db.fetch(`girism_${message.guild.id}`)
  let çıkışm = await db.fetch(`cikism_${message.guild.id}`)
  let gckanal = await db.fetch(`gckanal_${message.guild.id}`)
  let kayitk = await db.fetch(`modlogK_${message.guild.id}`)
  let otorol = await db.fetch(`otorol_${message.guild.id}`)
  let sayac = await db.fetch(`sayac_${message.guild.id}`)

  if (!komut) return message.channel.send(`${hayir}Lütfen kapatmak istediğiniz ayarı yazın. Ayarlar \`çıkışmesaj\`, \`girişmesaj\`, \`giriş-çıkış\`, \`kayıtkanal\`, \`otorol\` veya \`sayaç\` şeklinde olmalıdır.`)
  
  if (komut == 'çıkışmesaj') {
    if (!otorol) message.channel.send(`${hayir}Bu komut zaten kapalı.`)
    if (çıkışm) message.channel.send(`${evet}\`Çıkış mesaj\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${preffix}çıkışmesaj\` komutunu kullanabilirsiniz.`).then(db.delete(`girism_${message.guild.id}`))
  }
  
  if (komut == 'girişmesaj') {
    if (!girişm) message.channel.send(`${hayir}Bu komut zaten kapalı.`)
    if (girişm) message.channel.send(`${evet}\`Giriş mesaj\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${preffix}girişmesaj\` komutunu kullanabilirsiniz.`).then(db.delete(`cikissm_${message.guild.id}`))
  }
  
  if (komut == 'giriş-çıkış') {
    if (!gckanal) message.channel.send(`${hayir}Bu komut zaten kapalı.`)
    if (gckanal) message.channel.send(`${evet}\`Giriş-çıkış kanalı\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${preffix}giriş-çıkış\` komutunu kullanabilirsiniz.`).then(db.delete(`gckanal_${message.guild.id}`))
                          }
  
  if (komut == 'kayıtkanal') {
    if (!kayitk) message.channel.send(`${hayir}Bu komut zaten kapalı.`)
    if (kayitk) message.channel.send(`${evet}\`Kayıt kanalı\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${preffix}kayıtkanal\` komutunu kullanabilirsiniz.`).then(db.delete(`modlogK_${message.guild.id}`))
                             }
  
  if (komut == 'otorol') {
    if (!otorol) message.channel.send(`${hayir}Bu komut zaten kapalı.`)
    if (otorol) message.channel.send(`${evet}\`Otorol\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${preffix}otorol\` komutunu kullanabilirsiniz.`).then(db.delete(`otorol_${message.guild.id}`), db.delete(`rolK_${message.guild.id}`))
  }
  
  if (komut == 'sayaç') {
    if (!sayac) message.channel.send(`${hayir}Bu komut zaten kapalı.`)
    if (sayac) message.channel.send(`${evet}\`Sayaç\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${preffix}sayaç\` komutunu kullanabilirsiniz.`).then(db.delete(`sayac_${message.guild.id}`), db.delete(`sayacK_${message.guild.id}`))
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kapat',
  description: 'Ayarladığınız komutlardan istediğinizi kapatır.',
  usage: 'kapat <komut>'
};