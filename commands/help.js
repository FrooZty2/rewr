const Discord = require('discord.js')
module.exports.run = async (bot, message, args, gen) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Help')
    .setColor(bot.color)
    .setDescription('-help \n-stock \n-restock <account name> <text file> \n-addnewfile <File name>\n-addalts <account name> <account(s)> \n-gen <account name> \n-timeleft \n-nuke \n-unstock <account name> \n\n **Note its an open source bot you can get it on my cracked.to, [Click Here](https://cracked.to/C00LVANSH)**.')
    .setFooter('Bot Made By Vansh')
    .setTimestamp()
       message.channel.send(embed) 
    }
    
module.exports.help = {
    name: 'help',
    aliases: []
}
 