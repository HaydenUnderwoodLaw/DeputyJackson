
const {SlashCommandBuilder, PermissionFlagsBits , EmbedBuilder, Discord} = require('discord.js');
const { truncateSync } = require('fs');
const noblox = require('noblox.js');


module.exports = {

	data: new SlashCommandBuilder()
		.setName('probation')
		.setDescription('Logs probation')
        .addStringOption((option) => option.setName('username').setDescription('Username of the individual?').setRequired(true))
        .addStringOption(option => option.setName('rank').setDescription(`What is the rank you're setting their probation for?`).setRequired(true))
        .addStringOption(option => option.setName('day').setDescription(`How many days is the user being placed on probation?`).setRequired(true)),

	async execute(interaction, client ) {
        if (!interaction.member.roles.cache.has('845697243541536799')){
    		let embed1 = new EmbedBuilder()
        .setTitle("You don't have perms to use this command")
		.setColor("Red")
		return await interaction.reply({embeds: [embed1]})
}

const username = interaction.options.getString("username")
const rank = interaction.options.getString("rank")
const day = interaction.options.getString("day")

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
        .setDescription(`**${username}** is now a probationary ${rank} for the next ${day} days`)
  
		.setColor("Red")
		await interaction.reply({
			embeds: [embed1]
		  })




  },
};