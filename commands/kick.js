module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args, cmd, client, Discord){
        const target = message.mentions.users.first();
        if(target){
            if(message.member.roles.cache.has('904996731073224749')){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
            }else{
                message.channel.send("You cannot Kick Members :(")
            }
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
    }
}
