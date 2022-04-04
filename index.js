const Discord = require("discord.js");
 const client = new Discord.Client({ disableMentions: 'everyone' });
const http = require("http");
const Eco = require("quick.eco");
client.eco = new Eco.Manager();
client.db = Eco.db; 
client.config = require("./botConfig");
const jsArr = require("./guilds.json");
client.on("guildCreate", (guild) => {   
    const EmbedJoin = new Discord.MessageEmbed()
    .setColor('#8F00FF')
    .setTitle(`Joined Guild: ${guild.name}!`)
    .setTimestamp()
    console.log(`Joined New Guild: ${guild.name}`);
    fs.writeFile("./guilds.json", JSON.stringify(jsArr), function(err){
        if(err) console.log(err)
    })
    client.channels.cache.get(`956374074362322954`).send(EmbedJoin)
});

client.on('messageReactionAdd', async (reaction, user) => {
    if (user.partial) await user.fetch();
    if (reaction.partial) await reaction.fetch();
    if (reaction.message.partial) await reaction.message.fetch();
    if (user.bot) return; {
        let ticketid = await db.get(`tickets_${reaction.message.guild.id}`);
        if (!ticketid) return;
        if (reaction.message.id == ticketid && reaction.emoji.name == ':tickets:') {
            db.add(`ticketnumber_${reaction.message.guild.id}`, 1)
            let ticketnumber = await db.get(`ticketnumber_${reaction.message.guild.id}`)
            if (ticketnumber === null) ticketnumber = "1"
            reaction.users.remove(user);
            let CH = message.guild.channels.find(r => r.id == '960537704322449438');
            if (!CH) return;
            reaction.message.guild.channels.create(`ticket-${ticketnumber}`, {
                type: 'text', parent: CH, reason: 'Reaction Tickets System',
                permissionOverwrites: [
                    {
                        id: user.id,
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    },
                    {
                        id: reaction.message.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ],
                type: 'text'
            }).then(async channel => {
                let data = {
                    channelid: channel.id
                }
                db.push(`tickets`, data).then(console.log)
                channel.send(`<@${user.id}>`).then(log => { db.set(`mention_${channel.id}`, log.id) })
                db.set(`ticketauthor_${channel.id}`, user.id)
                let icon = reaction.message.guild.iconURL()
                let ticketmsg = await channel.send(new Discord.MessageEmbed()
                    .setTitle(`${user.username} Ticket`)
                    .setDescription("We are going to contact you as soon\n Click the reaction to close the ticket:closed_lock_with_key:")
                    .setFooter(reaction.message.guild.name, icon)
                    .setTimestamp()
                );
                ticketmsg.react(':closed_lock_with_key:')
                console.log(`${ticketmsg.id}`)
                db.set(`closeticket_${channel.id}`, ticketmsg.id)
            })
        }
    }
});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.shop = {
  "Laptop" : {
    cost: 2000
  },
  "Mobile" : {
    cost: 1000
  },
  "PC" : {
    cost: 3000
  }
};
client.anbuy = {
  "Leopard": {
    cost: 230,
    st: ":leopard:"
  },
  "Crocodile" : {
    cost: 190,
    st: ":crocodile:"
  },
  "Tiger" : {
    cost: 210,
    st: ":tiger2:"
  },
  "Unicorn" : {
    cost: 350,
    st: ":unicorn:"
  },
  "Fox" : {
    cost: 170,
    st: ":fox:"
  },
  "Monkey" : {
    cost: 60,
    st: ":monkey:"
  },
  "Penguin" : {
    cost: 130,
    st: ":penguin:"
  },
  "Snake" : {
    cost: 100,
    st: ":snake:"
  },
  "Whale" : {
    cost: 490,
    st: ":whale:"
  },
  "Shark" : {
    cost: 340,
    st: ":shark:"
  },
  "Buffalo" : {
    cost: 140,
    st: ":buffalo:"
  },
  "leopard": {
    cost: 230,
    st: ":leopard:"
  },
  "crocodile" : {
    cost: 190,
    st: ":crocodile:"
  },
  "tiger" : {
    cost: 210,
    st: ":tiger2:"
  },
  "unicorn" : {
    cost: 350,
    st: ":unicorn:"
  },
  "fox" : {
    cost: 170,
    st: ":fox:"
  },
  "monkey" : {
    cost: 60,
    st: ":monkey:"
  },
  "penguin" : {
    cost: 130,
    st: ":penguin:"
  },
  "snake" : {
    cost: 100,
    st: ":snake:"
  },
  "whale" : {
    cost: 490,
    st: ":whale:"
  },
  "shark" : {
    cost: 340,
    st: ":shark:"
  },
  "buffalo" : {
    cost: 140,
    st: ":buffalo:"
  }
};
const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./commands/${f}`);
        client.commands.set(command.help.name, command);
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias, command.help.name);
        });
    });
});

client.login(process.env.TOKEN);