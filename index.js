const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}')
});

client.on('message', msg => {
    //split messages
    let split = msg.content.split(" ");

    //if the message is a bot command, do this
    if (split[0] === '!osl') {
        if (split.length === 1) {
            msg.reply("Yes?");
        } else if (split.length === 2) {
            
        }
    }
})

client.login('NjgyMDE5MDU1NDgxMTI2OTcx.XlW6Eg.kHyR8vvTKjwsFBdLqxv5mMVK-5g');