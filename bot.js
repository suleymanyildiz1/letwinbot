const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const db = require('quick.db');
const Jimp = require('jimp');
require('./util/eventLoader')(client);

const prefix = ayarlar.prefix;

const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

const log = message => {
  console.log(`[-] BOT: ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
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
    } catch (e){
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
    } catch (e){
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
    } catch (e){
      reject(e);
    }
  });
};

////////////////////////

client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.emoji.name == "👍🏻"){
      reaction.message.guild.members.get(user.id).removeRole("507315788235931648")
      reaction.message.guild.members.get(user.id).addRole("511884979383566370")
    }
});

client.on('message', async message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  let emoji = "👍🏻"
  if (command === "kayıt") {
    message.delete();
message.channel.send(`Kayıt olmak için aşağıdaki emojiye tıkla!`).then(function(message) {
         message.react(emoji);
       });
  }
})

////////////////////////

client.on("guildMemberAdd", async member => {
  const kanal30 = await db.fetch(`gckanal_${member.guild.id}`)
  const kanal31 = member.guild.channels.find('id', kanal30)
  const girismesaj = await db.fetch(`girism_${member.guild.id}`)
  if (!kanal30) return;
  if (!kanal31) return;
  if (!girismesaj) return kanal31.send(`:inbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucuya katıldı.`)
  if (member.user.bot) return kanal31.send(girismesaj ? girismesaj.replace('-kullanıcı-', `\`${member.user.tag}\``) .replace('-sunucu-', `${member.guild.name}`) : `:inbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucuya katıldı.`) + kanal31.send(`:robot: ${member.user.tag} bir bot !`);
  if (!member.user.bot) return kanal31.send(girismesaj ? girismesaj.replace('-kullanıcı-', `\`${member.user.tag}\``) .replace('-sunucu-', `${member.guild.name}`) : `:inbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucuya katıldı.`);
});


client.on("guildMemberRemove", async member => {
  const kanal30 = await db.fetch(`gckanal_${member.guild.id}`)
  const kanal31 = member.guild.channels.find('id', kanal30)
  const cikismesaj = await db.fetch(`cikism_${member.guild.id}`)
  if (!kanal30) return;
  if (!kanal31) return;
  if (!cikismesaj) return kanal31.send(`:outbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucudan ayrıldı.`)
  kanal31.send(cikismesaj ? cikismesaj.replace('-kullanıcı-', `\`${member.user.tag}\``) .replace('-sunucu-', `${member.guild.name}`) : `:outbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucudan ayrıldı.`);
});

////////////////////////



////////////////////////
 
client.on("guildMemberAdd", async member => {
  
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  let skanal31 = member.guild.channels.find('id', skanal9)
  if (!sayac) return;
  if (!skanal9) return;
  if (!skanal31) return;
  skanal31.send(`:inbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucuya katıldı. \`${sayac}\` kullanıcı olmaya \`${sayac - member.guild.members.size}\` kullanıcı kaldı.`)
});

client.on("guildMemberRemove", async member => {
  
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  let skanal31 = member.guild.channels.find('id', skanal9)
  if (!sayac) return;
  if (!skanal9) return;
  if (!skanal31) return;
  skanal31.send(`:outbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucudan ayrıldı. \`${sayac}\` kullanıcı olmaya \`${sayac - member.guild.members.size}\` kullanıcı kaldı.`)
});

////////////////////////



////////////////////////

client.on('guildMemberAdd', async member => {
  
  let rol = await db.fetch(`otorol_${member.guild.id}`);
  let rol2 = member.guild.roles.find('id', rol);
  let rolk = await db.fetch(`rolK_${member.guild.id}`);
  let rolk2 = member.guild.channels.find('id', rolk)
  if(!rolk2) return;
  member.addRole(rol2);
  rolk2.send(`<:BEEevet:519886383456714784> \`${member.user.tag}\` adlı kullanıcıya \`${rol2.name}\` rolü verildi.`)
});

////////////////////////



////////////////////////

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);client.login(ayarlar.token);