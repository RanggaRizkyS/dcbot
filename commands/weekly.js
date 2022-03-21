exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1500) + 600;
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`You have already claim daily claim, come back in ${addMoney.time.days} D, ${addMoney.time.hours} H, ${addMoney.time.minutes} M, ${addMoney.time.seconds} S.`);
    else return message.reply(`You have claimed **${addMoney.amount}** 🪙, now you have **${addMoney.after}** 🪙`);
};

exports.help = {
    name: "weekly",
    aliases: [],
    usage: "weekly"
}
