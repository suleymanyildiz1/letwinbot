const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let teyitolmalog = await db.fetch(`teyitlog_${message.guild.id}`);
  let kızrol = await db.fetch(`kızrol_${message.guild.id}`);
    let üyerol = await db.fetch(`üyerol_${message.guild.id}`);
  let teyitkanal = await db.fetch(`teyitkanal_${message.guild.id}`);
 
  ///////////////////////
  var yetkilirol  = await db.fetch(`yetkilirol_${message.guild.id}`, yetkilirol)
    let yetkilirol2 = message.guild.roles.find('name', yetkilirol)
    
     var kayıtsızrol  = await db.fetch(`kayıtsızrol_${message.guild.id}`, kayıtsızrol)
    let kayıtsızrol2 = message.guild.roles.find('name', kayıtsızrol)
    
  if(!message.member.roles.has(yetkilirol2.id)) {
    message.channel.send(`Bu  Komutu Kullanmak İçin ${yetkilirol2} Rolune Sahip Olman Lazım.`)
  } else {
 //////////////////////
  
    let kullanıcı =  message.mentions.members.first();
  if(!kullanıcı) return message.channel.send(`:x: | Bir Kullanıcı İsmi girmelisin.`)
  let kullanıcı2 =  message.mentions.members.first();
  if(!kullanıcı2) return
  
    ////////////////////////////////////
  let member = args[0]
  if (!member) return message.channel.send(`:x: | Bir Kullanıcı İsmi girmelisin.`)
  let isim = args[1]
  let yas = args[2]
    ////////////////////////////////////,
  
  
  
  let kızrol2 = message.guild.roles.find('name', kızrol)
  let üyerol2 = message.guild.roles.find('name', üyerol)
  const teyitolmakanal = message.guild.channels.find('name', teyitkanal)
  const teyitolmalog2  = message.guild.channels.find('name', teyitolmalog)
  ////////////////////////////////////
  
  
  if (!teyitkanal) return
   if (message.channel.name !== teyitkanal) return message.channel.send(`:x: | Bu komutu sadece ${teyitolmakanal} kanalında kullanabilirsin.`).then(msg => msg.delete(10000))
  
    ////////////////////////////////////
  if (!isim) return message.channel.send(`:x: | İsmini girmelisin.`)
  if (!yas) return message.channel.send(`:x: | Yaşını girmelisin.`)

  ////////////////////////////////////
 kullanıcı.setNickname(`${isim} | ${yas}`)
  kullanıcı.addRole(üyerol2)
  kullanıcı.addRole(kızrol2)
  kullanıcı.removeRole(kayıtsızrol2)
   ////////////////////////////////////
  
  //sykocoder
  const embed = new Discord.RichEmbed ()
  .setAuthor("Bir Bayan Kaydı Gerçekleşti")
  .addField(`Kaydı Yapılan Kişi:`, `${kullanıcı.user.tag}`)
  .addField(`Kaydı Yapan Yetkili:`, `${message.author.tag}`)
  .addField(`Belirlenen İsim:`, `${isim} | ${yas}`)
  .addField(`Verilen Roller:`, `${üyerol2} Ve  ${kızrol2}`)
  
  
  message.channel.send(`:white_check_mark: | ${kullanıcı} Teyitin Tamamlandı!`)
  teyitolmalog2.send(embed)
  ////////////////////////////////////
  }
  };

exports.conf = {
  enabled: true, 
  guildOnly: true,
  aliases: ['bayan'],
  permLevel: 0
}

exports.help = {
  name: 'kız',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kız kullanıcı isim yaş'
}