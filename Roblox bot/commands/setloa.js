
const {SlashCommandBuilder, PermissionFlagsBits , EmbedBuilder, Discord} = require('discord.js');
const { truncateSync } = require('fs');
const noblox = require('noblox.js');


module.exports = {

	data: new SlashCommandBuilder()
		.setName('setloa')
		.setDescription('Logs an individual being placed on LOA')
        .addStringOption((option) => option.setName('username').setDescription('Username of the individual?').setRequired(true))
        .addStringOption((option) => option.setName('date1').setDescription('What date is the individual going on LOA').setRequired(true))
.addStringOption((option) => option.setName('date2').setDescription('What date will the individual be off of LOA').setRequired(true)),
	
	async execute(interaction, client ) {
        if (!interaction.member.roles.cache.has('845697243541536799')){
    		let embed1 = new EmbedBuilder()
        .setTitle("You don't have perms to use this command")
		.setColor("Red")
		return await interaction.reply({embeds: [embed1]})
}

const date1 = interaction.options.getString("date1")
const date2 = interaction.options.getString("date2")
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
        .setTitle("Department Action")
        .setDescription(`**${username}** has been placed on **Leave of Absence** from ${date1} till ${date2}`)
		.setColor("Red")
        .setThumbnail(avatarURL)
		await interaction.reply({
			embeds: [embed1]
		  })




  },
};