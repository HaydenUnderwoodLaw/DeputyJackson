
const {SlashCommandBuilder, PermissionFlagsBits , EmbedBuilder, Discord} = require('discord.js');
const { truncateSync } = require('fs');
const noblox = require('noblox.js');


module.exports = {

	data: new SlashCommandBuilder()
		.setName('removeloa')
		.setDescription('Logs an individual being removed from LOA')
        .addStringOption((option) => option.setName('username').setDescription('Username of the individual?').setRequired(true))

		.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
	
	async execute(interaction, client ) {
        if (!interaction.member.roles.cache.has('845697243541536799')){
    		let embed1 = new EmbedBuilder()
        .setTitle("You don't have perms to use this command")
		.setColor("Red")
		return await interaction.reply({embeds: [embed1]})
}

const username = interaction.options.getString("username")

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
    .setTitle("Department Action")
      .setDescription(`**${username}** is no longer on **Leave of Absence**`)
		.setColor("Red")
        .setThumbnail(avatarURL)
		await interaction.reply({
			embeds: [embed1]
		  })




  },
};