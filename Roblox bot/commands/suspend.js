
const {SlashCommandBuilder, PermissionFlagsBits , EmbedBuilder, Discord} = require('discord.js');
const { truncateSync } = require('fs');
const noblox = require('noblox.js');


module.exports = {

	data: new SlashCommandBuilder()
		.setName('suspend')
		.setDescription('Logs an individual being suspended')
        .addStringOption((option) => option.setName('username').setDescription('Username of the individual?').setRequired(true))
        .addStringOption((option) => option.setName('date1').setDescription('What date are you suspending the individual?').setRequired(true))
        .addStringOption((option) => option.setName('date2').setDescription('What date will the individual be unsuspended?').setRequired(true)),

	async execute(interaction, client ) {
        if (!interaction.member.roles.cache.has('845697243541536799')){
    		let embed1 = new EmbedBuilder()
        .setTitle("You don't have perms to use this command")
		.setColor("Red")
		return await interaction.reply({embeds: [embed1]})
}

const username = interaction.options.getString("username")
const date1 = interaction.options.getString("date1")
const date2 = interaction.options.getString("date2")

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
        .setTitle("Internal Affairs Action")
        .setDescription(`**${username}** has been **suspended** from ${date1} - ${date2} \n Contact IA Command if seen on team.`)
		.setColor("Red")
        .setThumbnail(avatarURL)
		await interaction.reply({
			embeds: [embed1]
		  })




  },
};