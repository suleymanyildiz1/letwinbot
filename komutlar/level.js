const Discord = require('discord.js');
const fs = require('fs');
const ayarlar = require('../ayarlar.json');

const prefix = ayarlar.prefix;

exports.run = function(client, message) {

  let points = JSON.parse(fs.readFileSync('./xp.json', 'utf8'));
  var f = [];
  function factorial (n) {
    if (n == 0 || n == 1)
      return 1;
    if (f[n] > 0)
      return f[n];
    return f[n] = factorial(n-1) * n;
  };
  
  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
      return text;
  }

  client.on("message", async message => {
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
    if (!points[user.id]) points[user.id] = {
      points: 0,
      level: 0,
    };
    
    let userData = points[user.id];
    userData.points++;
    let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
    if (curLevel > userData.level) {
      userData.level = curLevel;
      var user = message.mentions.users.first() || message.author;
      message.channel.send(`🆙 **| ${user.username}   Level Atladı!*`)
    }

    fs.writeFile('./xp.json', JSON.stringify(points), (err) => {
      if (err) console.error(err)
    })
    
    if (message.content.toLowerCase() === prefix + 'profil' || message.content.toLowerCase() === prefix + 'profile') {
    const level = new Discord.RichEmbed()
    .setTitle(`${user.username}`)
    .setDescription(`**Seviye:** ${userData.level}\n**Xp:** ${userData.points}`)
    .setColor("#ffff00")
    .setFooter(``)
    .setThumbnail(user.avatarURL)
    
    message.channel.send(`📝 **| ${user.username} adlı kullanıcının profil kartı**`)
    message.channel.send(level)
    }});
};

exports.conf = {
  enabled: true, //komutu açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['profil'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'level', //adını belirledik (kullanmak için gereken komut)
  description: 'Botun pingini gösterir.', //açıklaması
  usage: 'ping' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz