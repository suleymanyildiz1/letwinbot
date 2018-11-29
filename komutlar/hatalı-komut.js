const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "507311180583534635";
	var channelID = "515254290613534730";
	
	if (!öneri){
		return message.reply("Bir hata bildirin ! Doğru kullanım: **rb!hatalıkomut <komutun kanalı>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Hatalı Komut","<@362692630062301195>, Hatalı komut var !")
			.addField("Bildiren :", message.author.tag)
			.addField("Bildirenin ID'si :", message.author.id)
			.addField("Hatalı Komut :", öneri)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Bildiriniz için teşekkürler.Komutu en yakın zamanda kaldıracağız.");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hatalı-komut","hatalıkomut","çalışmayan-komut","çalışmayankomut","hatalı","çalışmıyor"], 
  permLevel: 0 
};

exports.help = {
  name: 'çalışmayan', 
  description: "Bot hakkındaki önerilerinizi bot sahibine ulaştırır.", 
  usage: 'çalışmıyor <mesaj>' 
};