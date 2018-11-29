const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!sustur @üye 1s/m/h/d | 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Bu Komutu Kullanmak İçin : rb!mute <Kullanıcı> <Süre> Olarak Yazmalısınız.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Hata: Susturmaya çalıştığınız kişi yetkili veya bot'un yetkisi belirttiğiniz kişiyi geçici susturmaya yetmiyor!");
let muterole = message.guild.roles.find(r => r.name === "Susturuldu");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Susturuldu",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Bu Komutu : !mute <Kullanıcı> <Süre> Şeklinde Kullanabilirsiniz.");
  const muteli = args.slice(0).join('  ');
  await(tomute.addRole(muterole.id));
  const mute = new Discord.RichEmbed()
  .addField('Susturma', message.author.tag + ' adlı yetkili ' + muteli + ' adlı kullanıcıyı susturdu. ')
  .addField('Süre', `${ms(ms(mutetime))}`)
  message.channel.send(mute);
  
  setTimeout(function(){
    tomute.removeRole(muterole.id);
    const bitti = new Discord.RichEmbed()
    .addFile('Süre Bitti', muteli + ' adlı kullanıcının susturulma süresi doldu.Bu yüzden susturulması kaldırıldı.')
    message.channel.send(bitti);
    
  }, ms(mutetime));



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sustur'],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Sureli Susturur.',
  usage: 'mute [Kullanıcı] [Süre]'
};