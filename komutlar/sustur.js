const Discord = require("discord.js");
const ms = require("ms");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

  const user = message.mentions.members.first()
  let guild = message.guild
  let modlog = await db.fetch(`modlogK_${message.guild.id}`);
  let modlog2 = guild.channels.find('name', modlog);
  //!sustur @üye 1s/m/h/d | 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.`);
  
  if(!user) return message.channel.send(`<:BEEhayir:519886397482729473>Muteleyeceğin kişiyi etiketlemelisin.`);
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
  if(!mutetime) return message.channel.send(`<:BEEhayir:519886397482729473>Süreyi yazmalısın.`); 
  await(user.addRole(muterole.id));
  
  modlog2.send(`${message.author} adlı yetkili ${user} adlı kullanıcıyı susturdu. Süre : ${ms(ms(mutetime))}`);
  
  setTimeout(function(){
    user.removeRole(muterole.id);
    modlog2.send(`${user} adlı kullanıcının susturulma süresi dolduğu için susturulması kaldırıldı.`);
    
  }, ms(mutetime));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mute'],
  permLevel: 0
};

exports.help = {
  name: 'sustur',
  description: 'Sureli Susturur.',
  usage: 'sustur [Kullanıcı] [Süre]'
};