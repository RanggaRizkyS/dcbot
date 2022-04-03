const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
    let pingRandom = Math.floor(Math.random() * 20) + 10;
    let pingClient = Math.floor(Math.random() * 23) + 20;
    let gatewayLatency = Math.floor(client.ws.ping);
        const embed = new MessageEmbed()
            .setTitle("Frownmc Rules")
            .setDescription(`[1.] Jangan berkata kasar\n[2.] Jika membeli barang, harus mematuhi persyaratan\n[3.] Metode pembayaran hanya tersedia di <@960309389061939200>, Selain itu tidak\n[4.] Di larang keras untuk promosi\n[5.] Di larang spam\n[6.] Di larang kirim foto/video Pornografi/18+\n[7.] Di larang scam`)
            .setColor("#8F00FF")
            .setTimestamp();
        message.channel.send(embed);
}

exports.help = {
    name: "rul",
    aliases: [],
    usage: `rul`
}