const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setTitle("Acroga || HELP")
        .addFields(
	    { name: "Economy 🪙", value: "**daily, weekly, work, coinflip, buy, roll**" },
	    { name: "Pet 🦬", value: "**zoo, zooshop, zoobuy, hunting**" },
	    { name: "System 🛠", value: "**memory, ping, help**" },
	    { name: "Admin 🧰", value: "**addmoney, setmoney, ban**" },
	)
        .setColor("#8F00FF")
	.setAuthor("Help")
	.setURL("https://acroga.xyz/help.html")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter("acroga.xyz/how-to-get-money.html");
    message.channel.send(embed);
}

exports.help = {
    name: "help",
    aliases: [],
    usage: `help`
}
