const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const db = require('quick.db');
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

client.on("guildMemberAdd", async member => {
  let gckanal9 = await db.fetch(`gcK_${member.guild.id}`);
  if (!gckanal9) return;
  const gckanal31 = member.guild.channels.find('name', gckanal9)
  const embed = new Discord.RichEmbed()
  .setColor('GREEN')
  .setAuthor(member.user.tag, member.user.avatarURL || member.user.defaultAvatarURL)
  .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
  .setTitle(member.user.tag)
  .setDescription(`:inbox_tray: Sunucuya katıldı. \`${member.guild.memberCount}\` üye olduk !`)
  .setTimestamp()
  gckanal31.send(embed)
});

client.on("guildMemberRemove", async member => {
  let gckanal9 = await db.fetch(`gcK_${member.guild.id}`);
  if (!gckanal9) return;
  const gckanal31 = member.guild.channels.find('name', gckanal9)
  const embed = new Discord.RichEmbed()
  .setColor('RED')
  .setAuthor(member.user.tag, member.user.avatarURL || member.user.defaultAvatarURL)
  .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
  .setTitle(member.user.tag)
  .setDescription(`:outbox_tray: Sunucudan ayrıldı. \`${member.guild.memberCount}\` üye kaldık !`)
  .setTimestamp()
  gckanal31.send(embed)
});

////////////////////////
 
client.on("guildMemberAdd", async member => {
    let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find('name', skanal9)
  const embed = new Discord.RichEmbed()
  .setDescription(`:inbox_tray: \`${member.user.tag}\` sunucuya katıldı. \`${sayac}\` üye olmamıza son \`${sayac - member.guild.members.size}\` üye kaldı.`)
  .setColor("GREEN")
  skanal31.send(embed)
});

client.on("guildMemberRemove", async member => {
    let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find('name', skanal9)
  const embed = new Discord.RichEmbed()
  .setDescription(`:outbox_tray: \`${member.user.tag}\` sunucudan ayrıldı. \`${sayac}\` üye olmamıza son \`${sayac - member.guild.members.size}\` üye kaldı.`)
  .setColor("RED")
  skanal31.send(embed)
});

////////////////////////



////////////////////////

client.on('guildMemberAdd', async member => {
  let rol = await db.fetch(`otorol_${member.guild.id}`);
  let rol2 = member.guild.roles.find('name', rol);
    let gckanal9 = await db.fetch(`gcK_${member.guild.id}`);
  if (!gckanal9) return;
  const gckanal31 = member.guild.channels.find('name', gckanal9)
  member.addRole(rol2);
  const otoembed = new Discord.RichEmbed()
  .setDescription(`:white_check_mark: \`${member.user.tag}\` adlı kullanıcıya ${rol2} rolü verildi.`)
  .setColor("GREEN")
  gckanal31.send(otoembed)
});

////////////////////////



////////////////////////

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
      message.channel.send(`🆙 **| ${user.username}   Level Atladı!**`)
    }

    fs.writeFile('./xp.json', JSON.stringify(points), (err) => {
      if (err) console.error(err)
    })
    
    if (message.content.toLowerCase() === prefix + 'profil' || message.content.toLowerCase() === prefix + 'level') {
    const level = new Discord.RichEmbed()
    .setTitle(`${user.username}`)
    .setDescription(`**Seviye:** ${userData.level}\n**Xp:** ${userData.points}`)
    .setColor("#ffff00")
    .setFooter(``)
    .setThumbnail(user.avatarURL)
    
    message.channel.send(level)
    }});

////////////////////////



////////////////////////

const serverStats = {
  guildID: '507311180583534635',
  totalUsersID: '515997648042459156',
  memberCountID: '515997663448137730',
  botCountID: '515997681819058216'
};

client.on('guildMemberAdd', member => {
  
  if (member.guild.id !== serverStats.guildID) return;
  
  client.channels.get(serverStats.totalUsersID).setName(`Toplam Kullanıcı Sayısı : ${member.guild.memberCount}`);
  client.channels.get(serverStats.memberCountID).setName(`Üye Sayısı : ${member.guild.members.filter(m => !m.user.bot).size}`);
  client.channels.get(serverStats.botCountID).setName(`Bot Sayısı : ${member.guild.members.filter(m => m.user.bot).size}`);
 
});


client.on('guildMemberRemove', member => {
  
  if (member.guild.id !== serverStats.guildID) return;
  
  client.channels.get(serverStats.totalUsersID).setName(`Toplam Kullanıcı Sayısı : ${member.guild.memberCount}`);
  client.channels.get(serverStats.memberCountID).setName(`Üye Sayısı : ${member.guild.members.filter(m => !m.user.bot).size}`);
  client.channels.get(serverStats.botCountID).setName(`Bot Sayısı : ${member.guild.members.filter(m => m.user.bot).size}`);
  
});

////////////////////////

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);