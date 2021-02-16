 
   
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
const { Client, Util } = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader.js")(client);
const path = require("path");
const request = require("request");

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır DarkCode");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
//DarkCode

//Eklendi Atıldı
client.on("guildCreate", guild => {
  let add = client.channels.get("");
  const eklendim = new Discord.RichEmbed()

    //DarkCode
.setTitle(`<a:elmaa:664451976440053760> | Yükselmeye devam !`)
    .setTimestamp()
    .setColor("#bf2e41")
    .setThumbnail(guild.iconURL)
    .addField(`<a:elmaa:664451976440053760>Sunucu İsmi`, guild.name)
    .addField(`<a:elmaa:664451976440053760>Sunucu ID`, guild.id)
    .addField(
      `<a:elmaa:664451976440053760>Sunucunun Kurucusu`,
      guild.owner.user.tag
    )
    .addField(`<a:elmaa:664451976440053760>Kurucu ID`, guild.owner.user.id)
    .addField(
      `<a:elmaa:664451976440053760>Sunucunun Üye Sayısı`,
      guild.memberCount
    );

  add.send(eklendim);
});

client.on("guildDelete", guild => {
  let remove = client.channels.get("");
  const atildim = new Discord.RichEmbed()

    .setTitle(`<a:elmaa:664451976440053760> | Düşüşteyiz..`)
    .setTimestamp()
    .setColor("#bf2e41")
    .setThumbnail(guild.iconURL)
    .addField(`<a:elmaa:664451976440053760>Sunucu İsmi`, guild.name)
    .addField(`<a:elmaa:664451976440053760>Sunucu ID`, guild.id)
    .addField(
      `<a:elmaa:664451976440053760>Sunucunun Kurucusu`,
      guild.owner.user.tag
    )
    .addField(`<a:elmaa:664451976440053760>Kurucu ID`, guild.owner.user.id)
    .addField(
      `<a:elmaa:664451976440053760>Sunucunun Üye Sayısı`,
      guild.memberCount
    );

  remove.send(atildim);
});

client.login(ayarlar.token);