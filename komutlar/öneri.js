const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let öneri = args.slice(0).join(' ');
	let channelID = "537740243978289172";
	
	if (!öneri) return message.channel.send(`:no_entry: Bir öneri belirtmelisin.`);
		
		const embed = new Discord.RichEmbed()
			.setColor("BLUE")
			.addField("Eylem", "Öneri")
			.addField("Kullanıcı", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)
    
		client.channels.get(channelID).send(embed)
		message.channel.send(`:white_check_mark: Öneriniz alınmıştır. Teşekkür ederiz.`)
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