const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "507311180583534635";
	var channelID = "511934212618584094";
	
	if (!öneri){
		return message.channel.send(`<:ayy:519886397482729473>Bir öneri belirtmelisin.`);
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Öneri")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send(`<:ayy:519886383456714784>Öneriniz alınmıştır. Teşekkür ederiz.`);
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"], 
  permLevel: 0 
};

exports.help = {
  name: 'öneri', 
  description: "Bot hakkındaki önerilerinizi bot sahibine ulaştırır.", 
  usage: 'öneri <mesaj>' 
};