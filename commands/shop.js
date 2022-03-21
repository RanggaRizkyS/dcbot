const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    content += `**${items[i]} - ${client.shop[items[i]].cost} 🪙**\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("ACROGA || ZOOSHOP")
  .setDescription(content)
  .setColor("#8F00FF")
  .setFooter("zoobuy (items), if you want to buy")
  return message.channel.send(embed);
};

exports.help = {
  name: "zooshop",
  aliases: [],
  usage: `zooshop`
};
