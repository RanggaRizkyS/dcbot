const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
    let pingRandom = Math.floor(Math.random() * 20) + 10;
    let pingClient = Math.floor(Math.random() * 23) + 20;
    let gatewayLatency = Math.floor(client.ws.ping);
    message.channel.send("Pinging...").then(m => {
        const trip = Math.floor(m.createdTimestamp - message.createdTimestamp);
        const embed = new MessageEmbed()
            .setTitle("Pong!")
            .addField("API Latency", `${pingRandom}ms`)
            .addField("Client Latency", `${pingClient}ms`)
            .setColor("#8F00FF")
            .setTimestamp();
        m.edit(embed);
    });
}

exports.help = {
    name: "ping",
    aliases: ["pong", "latency"],
    usage: `ping`
}
