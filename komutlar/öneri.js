const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let öneri = args.slice(0).join(' ');
	let guildID = "507311180583534635";
	let channelID = "511934212618584094";
	
	if (!öneri) return message.channel.send(`<:BEEhayir:519886397482729473>Bir öneri belirtmelisin.`);
		
		const embed = new Discord.RichEmbed()
			.setColor("BLUE")
			.addField("Eylem", "Öneri")
			.addField("Kullanıcı", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)
    
		client.guilds.channels.get(channelID).send(embed)
		message.channel.send(`<:BEEevet:519886383456714784>Öneriniz alınmıştır. Teşekkür ederiz.`)
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