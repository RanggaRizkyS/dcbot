const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
	    let embed = new MessageEmbed()
            .setTitle("Frownmc Payment")
            .setDescription("> **[1.] Gopay**\n+62 88214812908\n> **[2.] Dana**\n+62 88214812908\n> **[3.] Pulsa Smartfren +5k**\n+62 88214812908\n================\n**Note: Pembayaran Selain Itu Tidak Di Terima!**")
            .setColor("#8F00FF")
            .setTimestamp();
        message.channel.send(embed);
}

exports.help = {
    name: "rul",
    aliases: [],
    usage: `rul`
}