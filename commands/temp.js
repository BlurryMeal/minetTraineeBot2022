const Discord = require('discord.js');
module.exports = {
	name: 'temp',
	description: "this is a shortcut command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Reaction Roles')
			.setDescription('Please choose your roles according to your departments. No channel will be locked, this is only being done so that we can ping specific people easily.\n')
			.setThumbnail('https://i.imgur.com/Q76VTuF.jpg')
			.addFields(
				{ name: ':one:', value: 'Design' ,inline: true},
                { name: ':two:', value: 'Programming' ,inline: true},
                { name: ':three:', value: 'Web Development' ,inline: true},
                { name: ':four:', value: 'Robotics' ,inline: true},
                { name: ':five:', value: 'Group Discussion' ,inline: true},
                { name: ':six:', value: 'Quiz' ,inline: true},
                { name: ':seven:', value: 'Audio Visual' ,inline: true}
			)

		message.channel.send(exampleEmbed);
	}
}