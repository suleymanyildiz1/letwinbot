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

client.on("message", msg => {
  
  
  db.fetch(`saas_${msg.guild.id}`).then(i => {
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 'sea' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'selam') {
                  return msg.channel.send('Aleyküm selam.')
      }
    }
    else if (i == 'kapali') {
      
    }
    if (!i) return;
  })
    });

////////////////////////

client.on("guildMemberAdd", async member => {
  let gck = await db.fetch(`gckanal_${member.guild.id}`);
  if (!gck) return;
  const gck31 = member.guild.channels.find('name', gck)
  gck31.send(`:inbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucuya katıldı.`)
});

client.on("guildMemberRemove", async member => {
  let gck = await db.fetch(`gckanal_${member.guild.id}`);
  if (!gck) return;
  const gck31 = member.guild.channels.find('name', gck)
  gck31.send(`:outbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucudan ayrıldı.`)
});

////////////////////////



////////////////////////

client.on("guildMemberAdd", async member => {
  let gckanal10 = await db.fetch(`gcK2_${member.guild.id}`);
  if (!gckanal10) return;
  const gckanal32 = member.guild.channels.find('name', gckanal10)
  let username = member.user.username;
  const bg = await Jimp.read("https://cdn.discordapp.com/attachments/522760787396395052/523149432707874817/BEE-giris.png");
  const userimg = await Jimp.read(member.user.avatarURL);
  var font;
  if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
  else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
  await bg.print(font, 430, 170, member.user.tag);
  await userimg.resize(362, 362);
  await bg.composite(userimg, 43, 26).write("./giris-cikis/giris.png");
  setTimeout(function () {
    gckanal32.send(new Discord.Attachment("./giris-cikis/giris.png"));
  }, 1000);
  setTimeout(function () {
    fs.unlink("./giris-cikis/giris.png");
  }, 10000);
})

client.on("guildMemberRemove", async member => {
 
  let gckanal10 = await db.fetch(`gcK2_${member.guild.id}`);
  if (!gckanal10) return;
  const gckanal32 = member.guild.channels.find('name', gckanal10)
  let username = member.user.username;          
  const bg = await Jimp.read("https://cdn.discordapp.com/attachments/522760787396395052/523149477784322058/BEE-cikis.png");
  const userimg = await Jimp.read(member.user.avatarURL);
  var font;
  if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
  else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
  await bg.print(font, 430, 170, member.user.tag);
  await userimg.resize(362, 362);
  await bg.composite(userimg, 43, 26).write("./giris-cikis/cikis.png");
  setTimeout(function () {
    gckanal32.send(new Discord.Attachment("./giris-cikis/cikis.png"));
  }, 1000);
  setTimeout(function () {
    fs.unlink("./giris-cikis/cikis.png");
  }, 10000);
})

////////////////////////



////////////////////////
 
client.on("guildMemberAdd", async member => {
    let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find('name', skanal9)
  skanal31.send(`:inbox_tray: Sunucuya bir kullanıcı katıldı. Sunucunun \`${sayac}\` kullanıcı olmasına \`${sayac - member.guild.members.size}\` kullanıcı kaldı.`)
});

client.on("guildMemberRemove", async member => {
    let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find('name', skanal9)
  skanal31.send(`:outbox_tray: Sunucudan bir kullanıcı ayrıldı. Sunucunun \`${sayac}\` kullanıcı olmasına \`${sayac - member.guild.members.size}\` kullanıcı kaldı.`)
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
  gckanal31.send(`<:BEEevet:519886383456714784>\`${member.user.tag}\` adlı kullanıcıya \`${rol2.name}\` rolü verildi.`)
});

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