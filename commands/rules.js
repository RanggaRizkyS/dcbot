const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
	    let embed = new MessageEmbed()
            .setTitle("Frownmc Cheap Hosting")
            .setDescription("`Paket 1 | 10.000 / Bulan\nRam: 1GB\nDisk: 5GB\nCpu: 100 Intel Xeon 8vCPU\nRegion: Singapure 🇸🇬\n\nPaket 2 | 20.000 / Bulan\nRam: 2GB\nDisk: 15GB\nCpu: 120 Intel Xeon 8vCPU\nRegion: Singapure 🇸🇬\n\nPaket 3 | 40.000 / Bulan\nRam: 4GB\nDisk: 30GB\nCpu: 200 Intel Xeon 8vCPU\nRegion: Singapure 🇸🇬 \n\nPaket 4 | 50.000 / Bulan\nRam: 6GB\nDisk: 40GB\nCpu: 200 Intel Xeon 8vCPU\nRegion: Singapure 🇸🇬\n\nNotes: Disk bisa di tambah 5.000 / GB, Max Disk 60GB`")
            .setColor("#8F00FF")
            .setTimestamp();
        message.channel.send(embed);
}

exports.help = {
    name: "rul",
    aliases: [],
    usage: `rul`
}