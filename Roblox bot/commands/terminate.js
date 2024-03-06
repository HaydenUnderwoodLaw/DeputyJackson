
const {SlashCommandBuilder, PermissionFlagsBits , EmbedBuilder, Discord} = require('discord.js');
const { truncateSync } = require('fs');
const noblox = require('noblox.js');


module.exports = {

	data: new SlashCommandBuilder()
		.setName('terminate')
		.setDescription('Logs an indivudal being terminated')
        .addStringOption((option) => option.setName('username').setDescription('Username of the individual?').setRequired(true))
        .addStringOption((option) => option.setName('department').setDescription('What department are they being terminated from?').setRequired(true))
        .addStringOption((option) => option.setName('reason').setDescription('Why is the individual being terminated?').setRequired(true)),

	async execute(interaction, client ) {
const username = interaction.options.getString("username")
const reason = interaction.options.getString("reason")
const department = interaction.options.getString("department")

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
 .setDescription(`**${username}** has been **terminated** from the ${department} for ${reason}`)
		.setColor("Red")
        .setThumbnail(avatarURL)
		await interaction.reply({
			embeds: [embed1]
		  })




  },
};