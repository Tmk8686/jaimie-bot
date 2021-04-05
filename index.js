const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const keepAlive = require('./server.js')
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter((f) => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
  }

  jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  if (props.help && props.help.name) {
    bot.commands.set(props.help.name, props);
  } else {
    console.error(`file ${f} does not have .help or .help.name property!`);
  };
});
});

bot.on("ready", async (message) => {
  console.log(
    `${bot.user.username} is online on ${bot.guilds.cache.size} servers!`
  );
  bot.user.setStatus("online");
  bot.user.setActivity('www.pornhub.com',{type: 'WATCHING'})
  bot.on("message", async (message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    if (bot.commands.has(cmd)) {
      commandfile = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)) {
      commandfile = bot.commands.get(bot.aliases.get(cmd));
    }

    if (!message.content.startsWith(prefix)) return;

    try {
      commandfile.run(bot, message, args);
    } catch (e) {}
  });
});

keepAlive()
bot.login("ODE0MzQ3Nzk1MDA3NjY4MjU1.YDcifA.-ry4jT10kEYLszypEi-5pmYdmu8");