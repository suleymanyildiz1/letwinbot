const chalk = require('chalk');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[-] BOT: ${client.user.username} ismi ile giriş yaptım!`);
  console.log(`[-] BOT: Oyun ismimi ayarladım!`);
  console.log(`[-] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriyorum!`);
  console.log(`[-] BOT: Aktifim !`);
  
    var Games = [
    
      "Canlı Destek İçin ; rb!canlıdestek",

      "Yardım Menüsü İçin ; rb!yardım",
      
      "Real Code TR Sunucusunun Botudur.",
      
      "Yapımcı : Furkan",
      
      "Sunucum : https://discord.gg/5mTZAfG"

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://twitch.tv/troyunculuk");
        }, 2 * 2500);

};