exports.execute = async (client, message, args) => {
if (!client.config.admins.includes(message.author.id)) return message.reply("Its command for premium user, if you want to be a premium user, you need to donate 2$ and its the pay link https://acroga.xyz/donate.html");
let userBalance = client.eco.fetchMoney(message.author.id);
if (userBalance.amount < 120) return message.channel.send("You need 120 🪙 to hunting, because you need net, gun, food");
let buy = client.eco.removeMoney(message.author.id, 120);
let monster = [
	    "alien :alien:",
	    "unicorn :unicorn:",
            "dragon :dragon:",
            "shark :shark:",
            "wolf :wolf:",
            "leopard :leopard:",
            "tiger :tiger2:",
            "buffalo :water_buffalo:",
            "giraffe :giraffe:",
            "penguin :penguin:",
            "whale :whale:",
            "spider :spider:",
            "cow :cow2:",
            "chick :baby_chick:",
            "fox :fox:",
            "rabbit :rabbit2:",
            "cat :black_cat:",
            "dog :dog2:",
            "ant :ant:",
            "monkey :monkey:",
            "cat :black_cat:",
            "dog :dog2:",
            "ant :ant:",
            "snake :snake:",
            "crocodile :crocodile:"
];
var monsterS = monster[Math.floor(Math.random() * monster.length)]
if(monsterS === "alien :alien:") {
    let amount = Math.floor(Math.random() * 420) + 360;
    let data = client.eco.addMoney(message.author.id, parseInt(amount));
    message.reply(`you get **${monsterS}**, and Acroga turns it to **${amount} 🪙**`);
}
if(monsterS === "unicorn :unicorn:") {
    let amount = Math.floor(Math.random() * 280) + 200;
    let data = client.eco.addMoney(message.author.id, parseInt(amount));
    message.reply(`you get **${monsterS}**, and Acroga turns it to **${amount} 🪙**`);
}
if(monsterS === "dragon :dragon:") {
    let amount = Math.floor(Math.random() * 400) + 340;
    let data = client.eco.addMoney(message.author.id, parseInt(amount));
    message.reply(`you get **${monsterS}**, and Acroga turns it to **${amount} 🪙**`);
}
if(monsterS === "shark") {
    let amount = Math.floor(Math.random() * 190) + 150;
    let data = client.eco.addMoney(message.author.id, parseInt(amount));
    message.reply(`you get **${monsterS}**, and Acroga turns it to **${amount} 🪙**`);
} else {
    let amount = Math.floor(Math.random() * 140) + 100;
    let data = client.eco.addMoney(message.author.id, parseInt(amount));
    message.reply(`you get **${monsterS}**, and Acroga turns it to **${amount} 🪙**`);
}
}
exports.help = {
    name: "hunting",
    aliases: ["hunt"],
    usage: "hunting"
}
