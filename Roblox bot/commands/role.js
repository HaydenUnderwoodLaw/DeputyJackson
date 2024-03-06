
const {SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle  ,MessageSelectMenu, MessageAttachment, EmbedBuilder, Discord} = require('discord.js');
const { truncateSync } = require('fs');


module.exports = {

	data: new SlashCommandBuilder()
		.setName('role')
		.setDescription('role a user!')
        .addUserOption((option) => option.setName('user').setDescription('The person who you want to give the role too').setRequired(true))
        .addRoleOption(opt => opt.setName('role').setDescription('Role to give to a user').setRequired(true)),
	async execute(interaction, client ) {

    if (!interaction.member.roles.cache.has('845697243541536799')){
      let embed1 = new EmbedBuilder()
      .setTitle("You don't have perms to use this command")
  .setColor("Red")
  return await interaction.reply({embeds: [embed1]})
}

        const user = interaction.options.getUser('user')
        const role = interaction.options.getRole(`role`)

        const member = interaction.guild.members.cache.get(user.id) 


        let embed = new EmbedBuilder()
          .setTitle("User roled!")
		  .addFields({ name: `${user.username}`, value: `${role}`, inline: true})
          .setColor("Green");

       interaction.reply({ embeds: [embed] })
  },
};