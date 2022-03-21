const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("Bruhh");
  let item = args[0];
  if (!item) return message.channel.send("enter animal name after zoobuy. example: zoobuy whale");
  let hasItem = client.anbuy[item];
  if (!hasItem || hasItem == undefined) return message.reply(`Animal with name ${item} not found`);
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.reply("you need  "+hasItem.cost+" to buy this animal.");
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    sti: hasItem.st
  };
  
  return message.channel.send(`The ${item} will be delivered to your zoo soon`).then((m)=> {
  setTimeout(function(){
    m.edit(`Success delivery **${item}** to your zoo. you purchased **${item}** for ${hasItem.cost} 🪙.`);
    client.db.push(`animal_${message.author.id}`, itemStruct);
  }, 5000)
});
};

exports.help = {
  name: "zoobuy",
  aliases: ["zbuy", "zb"],
  usage: `zoobuy <item>`
};
