
const {SlashCommandBuilder, PermissionFlagsBits , EmbedBuilder, Discord} = require('discord.js');
const { truncateSync } = require('fs');
const noblox = require('noblox.js');


module.exports = {

	data: new SlashCommandBuilder()
		.setName('reignationnotice')
		.setDescription('Logs an individual requesting to be Resignation.')
        .addStringOption((option) => option.setName('username').setDescription('Username of the individual?').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription(`Why do you want to resign?`).setRequired(true))
        .addStringOption(option => option.setName('postion').setDescription(`Do you hold a command or suprvisor postion?`).setRequired(true)),

	
	async execute(interaction, client ) {
        if (!interaction.member.roles.cache.has('845697243541536799')){
    		let embed1 = new EmbedBuilder()
        .setTitle("You don't have perms to use this command")
		.setColor("Red")
		return await interaction.reply({embeds: [embed1]})
}

const username = interaction.options.getString("username")
const reason = interaction.options.getString("reason")
const postion = interaction.options.getString("postion")


        const userid = await noblox.getIdFromUsername(username);
        const thumbnail = await noblox.getPlayerThumbnail(userid, 50, "png", false, "headshot");
        let avatarURL;
        let i;
        for (i = 0; i < thumbnail.length; i++) {
            if (thumbnail[i].targetId === userid) {
                avatarURL = thumbnail[i].imageUrl 
            }
        }

		let embed1 = new EmbedBuilder()
        .setThumbnail(avatarURL)
        .setTitle("Resignation Notice")
        .setDescription(`**${username}** has requested to be Discharged from the Mano County Sheriff Office. \n Reason: ***${reason}*** \n Are You a Command Member? ***${postion}***`)
        
		.setColor("Red")
		await interaction.reply({
			embeds: [embed1]
		  })




  },
};