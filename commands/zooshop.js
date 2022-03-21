const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.anbuy);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - ${client.anbuy[items[i]].cost} 🪙\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("Acroga || ZOOSHOP")
  .setDescription("animals will be automatically sent to your zoo")
  .addField("**=======================**", content, true)
  .setColor("#8F00FF")
  .setFooter("zoobuy <animal>, if you want to buy")
  return message.channel.send(embed);
};

exports.help = {
  name: "zooshop",
  aliases: ["zshop", "zs"],
  usage: `zooshop`
};
