exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  let authordata = client.eco.fetchMoney(message.author.id) 
  if (!member) return message.channel.send('Mention or give thier ID!') 
  let amount = args[1]
  if (!amount || isNaN(amount)) return message.channel.send('Enter valid amount!') 
  if(authordata.amount < amount) return message.channel.send("Bruh, you don'n have that much money") 
  await client.eco.transfer(message.author.id, member.id, amount) 
  return message.channel.send(`Sucess to transfer ${amount} to ${member.user.tag}`)
}
exports.help = {
  name: "transfer",
  aliases: ['give'],
  usage: `transfer <member> <amount>`
};
