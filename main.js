const Discord = require ('discord.js')

var bot = new Discord.Client();
var prefix = '!'

bot.on('ready', ()=> {

bot.user.setPresence({game: {name: 'made by fruitdukarma'}})
console.log('Yellow Egales bot started')

})

bot.login('process.env.TOKEN')

bot.on('message', message => {
if (message.content === prefix + "challenge"){
message.channel.sendMessage("https://marne.xyz/ \n ", {files: ["./challenge/challenge.png"]});

}    

if (message.content === prefix + "shop"){
    message.channel.sendMessage("https://marne.xyz/ \n ", {files: ["./images/shop.png"]});
}



})
