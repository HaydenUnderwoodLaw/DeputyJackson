
const {SlashCommandBuilder, PermissionFlagsBits , EmbedBuilder, Discord} = require('discord.js');
const { truncateSync } = require('fs');
const noblox = require('noblox.js');


module.exports = {

	data: new SlashCommandBuilder()
		.setName('loarequest')
		.setDescription('Logs an individual being removed from LOA')
        .addStringOption((option) => option.setName('username').setDescription(`what's your Username?`).setRequired(true))
        .addStringOption((option) => option.setName('date1').setDescription('What date will your LOA start?').setRequired(true))
        .addStringOption((option) => option.setName('date2').setDescription(`What date will your LOA end?`).setRequired(true)),	
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
        .setThumbnail(avatarURL)
        .setTitle("LOA Request")
        .setDescription(`**${username}** has requested a **Leave of Absence** from ${date1} till ${date2}`)
        .setThumbnail(avatarURL)
		.setColor("Red")
		await interaction.reply({
			embeds: [embed1]
		  })




  },
};