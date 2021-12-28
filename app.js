const { Client, DMchannel, RichEmbed, discord } = require("discord.js");
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
    const link = "https://discord.gift/";
    const channelIds = ['Channel-id-1', 'Channel-id-2', 'Channel-id-3'];

client.on("ready", () => {
   client.user.setActivity(`${prefix}gen`, { type: "WATCHING"})
   client.user.setStatus("dnd")
   console.log("bote kharkosat run shod seyed")
});

// const   chars = ['a', 'b', 'c', 'd',  'e','f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];

client.on('message', msg => {

  if (channelIds.includes(message.channel.id)) {

  if (msg.content === `${prefix}gen`) return msg.DMchannel.send(link + nitroCodeGen()).then msg.reply('nitro overloaded pls use the cmd again!')
    
              else return message.channel.send('shotor morgh farangi az in command faghat to channel makhsosesh mishe estefade kard');
        

  }
});
