const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setTitle("Acroga || HELP")
        .addFields(
	    { name: "Economy 🪙", value: "**daily, weekly, work**" },
	    { name: "Pet 🦬", value: "**zoo, zooshop, zoobuy, hunting**" },
	    { name: "System 🛠", value: "**ping, help**" },
	    { name: "Admin 🧰", value: "**addmoney, setmoney**" },
	)
        .setColor("#8F00FF")
	.setURL("https://acroga.xyz/pages/help/help.html")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
    message.channel.send(embed);
}

exports.help = {
    name: "help",
    aliases: [],
    usage: `help`
}
