const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let prefix = ayarlar.prefix;


module.exports = client => {
  console.log(`${client.user.username} İle Giriş Yapıldı!!`);
  client.user.setStatus("idle");                                                                                                                     

  console.log(` \n ${client.user.username}: Kanal : ` + client.channels.size + ` Sunucu :` + client.guilds.size + ` Kullanıcı : ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` !`);
};
