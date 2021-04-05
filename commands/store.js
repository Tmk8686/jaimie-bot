const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('m!'))return;  


    let embed = new Discord.MessageEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 3500 Coins [m!buy bronze]\n\n**Lifestyle Items**\n\nFresh Nikes: 600 [m!buy nikes]\nCar: 800 [m!buy car]\nMansion: 1200 [m!buy mansion]")
    .setColor("#FFFFFF")
    message.channel.send(embed)

    if (args[0] == 'bronze') {
    
      let embed1 = new Discord.MessageEmbed()
      .setDescription("**Bronze Rank**\n\nBenefits: Chance to get more coins from robbing someone")
      .setColor("#FFFFFF")
      message.channel.send(embed1)
    } else if(args[0] == 'nikes') {
      let embed2 = new Discord.MessageEmbed()
      .setDescription("**Fresh Nikes**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
      .setColor("#FFFFFF")
      message.channel.send(embed2)
    } else if(args[0] == 'car') {
      let embed3 = new Discord.MessageEmbed()
      .setDescription("**Car**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
      .setColor("#FFFFFF")
      message.channel.send(embed3)
  } else if(args[0] == 'mansion') {
    let embed4 = new Discord.MessageEmbed()
    .setDescription("**Mansion**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
    .setColor("#FFFFFF")
    message.channel.send(embed4)
  }  


}


module.exports.help = {
  name:"store",
  aliases: ["st"]
}