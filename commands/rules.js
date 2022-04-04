const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
	    let embed = new MessageEmbed()
            .setTitle("Frownmc Expensive Hosting")
            .setDescription("`Paket 1 | 25.000 / Bulan\nRam: 2GB\nDisk: 25GB\nCpu: 150 Intel Xeon 8vCPU\nRegion: Singapure 🇸🇬\n\nPaket 2 | 40.000 / Bulan\nRam: 4GB\nDisk: 50GB\nCpu: 200 Intel Xeon 8vCPU\nRegion: Singapure 🇸🇬\n\nPaket 3 | 70.000 / Bulan\nRam: 6GB\nDisk: 70GB\nCpu: 200 Intel Xeon 8vCPU\nRegion: Singapure 🇸🇬 \n\nPaket 4 | 100.000 / Bulan\nRam: 8GB\nDisk: 90GB\nCpu: 250 Intel Xeon 8vCPU\nRegion: Singapure 🇸🇬\n\nNotes: Disk bisa di tambah 5.000 / GB, Max Disk 60GB`")
            .setColor("#8F00FF")
            .setTimestamp();
        message.channel.send(embed);
}

exports.help = {
    name: "rul",
    aliases: [],
    usage: `rul`
}