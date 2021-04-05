const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('m!'))return;  


    let embed = new Discord.MessageEmbed()
    .setTitle("Money Man Help Centre [Prefix m!]")
    .addField("Economy Commands", "`work` `beg` `rob` `pay` `balance` `profile` `withdraw` `deposit` `daily` `weekly` `store` `buy` `sell`")
    .addField("Gambling Commands", "`roulette` `slots`")
    .addField("Economy Extra Commands", "`storeinfo [item]`")
    .addField("Other", "`verinfo`")
    .addField("fun",  "`meme`", "`anime`")
    .setColor("#FFFFFF")
    message.channel.send(embed)

}

module.exports.help = {
  name:"help",
  aliases: [""]
}