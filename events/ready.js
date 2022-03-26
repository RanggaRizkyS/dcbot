module.exports = (client) => {
    console.log(`${client.user.tag} is online!`);
    client.user.setActivity("!help - web https://acroga.xyz", {
      type: "STREAMING",
      url: "https://acroga.xyz"
    });
};
