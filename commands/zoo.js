const { MessageEmbed } = require("discord.js")
exports.execute = async (client, message, args) => {

  const embed = new MessageEmbed()
    .setAuthor(`🌴🌳🌿 ${message.author.tag} Zoo 🌿🌳🌴`, message.guild.iconURL)
    .setColor("#8F00FF")
    .setThumbnail()
    .setTimestamp();
  const x = client.db.get(`animal_${message.author.id}`);
if(!x) { return message.channel.send(`You don't have animals in your zoo`); }
const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
}, {});
const result = Object.keys(arrayToObject).map(k => embed.addField(`Animal: ${k}`,`Total: **${arrayToObject[k]}**`, false));
  
 
  return message.channel.send(embed);
}
exports.help = {
  name: "zoo",
  aliases: ["z"],
  usage: `zoo`
}
