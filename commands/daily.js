module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 600) + 50;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`You have already claim daily claim, come back in ${addMoney.time.hours} H, ${addMoney.time.minutes} M, ${addMoney.time.seconds} S.`);
    else return message.reply(`You have claimed **${addMoney.amount}** 🪙, now you have **${addMoney.after}** 🪙`);
};

module.exports.help = {
    name: "daily",
    aliases: [],
    usage: "daily"
}
