const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
	    let embed = new MessageEmbed()
            .setTitle("Frownmc Cheap Hosting")
            .setDescription("
Paket 1 | 10.000 / Bulan\n
Ram: 1GB\n
Disk: 5GB\n
Cpu: 100 Intel Xeon 8vCPU\n
Region: Singapure 🇸🇬
")
            .setColor("#8F00FF")
            .setTimestamp();
        message.channel.send(embed);
}

exports.help = {
    name: "rul",
    aliases: [],
    usage: `rul`
}