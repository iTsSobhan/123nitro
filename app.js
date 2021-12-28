const { Client, RichEmbed, discord } = require("discord.js");
const Discord = require('discord.js');



const client = new Client();
const sezar = require (procsess.evn)
const prefix = sezar.PREFIX
client.login(procsess.evn.TOKEN)

function nitroCodeGen() {
   var length = 18;
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

client.on("ready", () => {
  client.user.setStatus("dnd")
 console.log("ready!")

});
client.on("ready", () => {

   client.user.setActivity(`${prefix}gen`, { type: "WATCHING"})
});

client.on('message', msg => {
  if (msg.content === `${prefix}gen`) {
    msg.DMchannel.send("https://discord.gift/" + nitroCodeGen());  
             
    msg.reply('nitro overloaded pls use the cmd again!')
    

  }
});
