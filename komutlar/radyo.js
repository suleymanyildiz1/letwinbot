const Discord = require("discord.js");

exports.run = async (client, msg) => {

const radio = {
    "number1": "http://20723.live.streamtheworld.com/NUMBER1FM_SC?type=.mp3",
    "powerturk": "http://listen.powerapp.com.tr/powerturk/mpeg/icecast.audio?/;stream.nsv",
    "power": "http://listen.powerapp.com.tr/powerfm/mpeg/icecast.audio?/;stream.nsv",
    "metrofm": "http://17703.live.streamtheworld.com/METRO_FM_SC?type=.mp3",
    "fenomen": "http://listen.radyofenomen.com/fenomen/128/icecast.audio?/;stream.nsv",
    "slowturk": "http://radyo.dogannet.tv/slowturk"
}
            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send(':x: | Lütfen Bir Odaya Gir  !')

            }

            let args = msg.content.split(" ").slice(1).join(" ").toLowerCase();

      if (!args) return msg.channel.send(':x: | Lütfen şunlardan birini seçin ; **number1**, **powerturk**, **power**, **metrofm**, **fenomen**, **slowturk**')

        if(!radio[args]) return msg.channel.send(':x: | Lütfen şunlardan birini seçin ; **number1**, **powerturk**, **power**, **metrofm**, **fenomen**, **slowturk**')

    msg.member.voiceChannel.join().then(connection => {

    require('http').get(radio[args], (res) => {

            connection.playStream(res);

     let embed = new Discord.RichEmbed()
        .setAuthor(args)
        .setColor(0xFF0000)
        .addField("Radyo", args)
        .addField("Bağlantı", radio[args])
        .setFooter(msg.author.tag);

     msg.channel.send("**İyi Dinlemeler**", embed);

          });

  });

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["radio"],
    permLevel: 0
  };
exports.help = {
    name : "radyo",
    usage: "radio <nom de radio>",
    description: "Donner l'ordre au bot d'écouter la radio"
}