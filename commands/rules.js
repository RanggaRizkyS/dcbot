const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
	    let embed = new MessageEmbed()
            .setTitle("Frownmc Rules")
            .setDescription("`[1.] Jangan berkata kasar\n[2.] Jika membeli barang, harus mematuhi persyaratan\n[3.] Metode pembayaran hanya tersedia di Payment, Selain itu tidak tersedia!\n[4.] Di larang keras untuk promosi\n[5.] Di larang spam\n[6.] Di larang kirim foto/video Pornografi/18+\n[7.] Di larang scam`")
            .setColor("#8F00FF")
            .setTimestamp();
        message.channel.send(embed);
}

exports.help = {
    name: "rul",
    aliases: [],
    usage: `rul`
}