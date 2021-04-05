const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  if(!message.content.startsWith('m!'))return;


    var embed5 = new Discord.MessageEmbed()
    .setTitle('version Jaimie 1.0.0.9')
    .setAuthor('JaimieEcoNomy | Official bot')
    .setColor("#FFFFFF")
    .setDescription("What's new in version 1.0.1.0? - Added Emoji,If all god says this emoji::white_check_mark:, if all bad says this emoji::negative_squared_cross_mark: .Added meme,anime commands.All in version 1.0.1.0 ")
  message.channel.send(embed5)

}

module.exports.help = {
  name:"verinfo",
  aliases: [""]
}