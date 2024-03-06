
const {SlashCommandBuilder, PermissionFlagsBits , EmbedBuilder, Discord} = require('discord.js');
const { truncateSync } = require('fs');
const noblox = require('noblox.js');


module.exports = {

	data: new SlashCommandBuilder()
		.setName('directive')
		.setDescription('Posts an Notify Departments of New Directives created by the Secretary.')
        .addStringOption(option => option.setName('description').setDescription(`What is the Description?`).setRequired(true)),
	
	async execute(interaction, client ) {
		if (!interaction.member.roles.cache.has('845697243541536799')){
    		let embed1 = new EmbedBuilder()
        .setTitle("You don't have perms to use this command")
		.setColor("Red")
		return await interaction.reply({embeds: [embed1]})
}

const description = interaction.options.getString("description")

 
		let embed1 = new EmbedBuilder()
        .setTitle("**Mayflower National Guard Announcement**")
        .setAuthor({ name: `${interaction.user.username}`, iconURL: `${interaction.user.displayAvatarURL({ format: "png", dynamic: true })}` })
        .setDescription(description)
        .setFooter({ text: 'State of Mayflower', iconURL: 'https://cdn.discordapp.com/icons/800898562786590771/992d0fe8b8ef622128a7750259f1b863.jpg' })
        .setColor("Red")
		await interaction.reply({
			embeds: [embed1]
		  })




  },
};