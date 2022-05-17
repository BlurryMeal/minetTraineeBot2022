const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const Welcome = require("discord-welcome");
const ReactionRole = require("reaction-role");
const system = new ReactionRole("OTc1Nzc2NjY3NDA4NjYyNTc4.GcfAwF.kVs2_7hn1o_2io5-Vle534Gw784EL6vxa5nNtw"); 


client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler' , 'event_handler'].forEach(handler =>{
	require(`./handlers/${handler}`)(client, Discord);
})

//reaction roles

let design_emoji = system.createOption("1️⃣", "904996731006124075");
let programming_emoji = system.createOption("2️⃣", "904996731006124074");
let webdev_emoji = system.createOption("3️⃣", "904996731006124073");
let robotics_emoji = system.createOption("4️⃣", "904996730972545094");
let gd_emoji = system.createOption("5️⃣", "904996731006124072");
let quiz_emoji = system.createOption("6️⃣", "904996730972545091");
let av_emoji = system.createOption("7️⃣", "904996730972545092");

system.createMessage("976154744437489714", "904996731387789326", 7, null, design_emoji, programming_emoji, webdev_emoji, robotics_emoji, gd_emoji, quiz_emoji, av_emoji);

system.init();


client.once('ready', () => {
	client.user.setActivity("MINET Trainee");
	Welcome(client, {
		publicmsg : "@MEMBER Welcome to MINET Trainee 2022.",
		publicchannel : "975780171200229456"
		})

});




client.on('guildMemberAdd', member => {
	console.log('User ' + member.user.username + ' has joined the server!')
  });






client.login("OTc1Nzc2NjY3NDA4NjYyNTc4.GcfAwF.kVs2_7hn1o_2io5-Vle534Gw784EL6vxa5nNtw");