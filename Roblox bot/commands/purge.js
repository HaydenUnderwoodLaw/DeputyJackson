const { SlashCommandBuilder,PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('purge')
    .setDescription('Purges the last X number of messages. Cannot delete any messages older than 14 days.')
    .addNumberOption(opt => opt.setName('nummessages').setDescription('Number of messages to delete').setRequired(true))
    	.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
	async execute(interaction, client ) {
        if (!interaction.member.roles.cache.has('845697243541536799')){
    		let embed1 = new EmbedBuilder()
        .setTitle("You don't have perms to use this command")
		.setColor("Red")
		return await interaction.reply({embeds: [embed1]})
}

        const numMessages = interaction.options.get('nummessages').value;

        if(numMessages > 100) {
            return await interaction.reply('You cannot delete more than 100 messages at once due to Discord limitations');
        }

        await interaction.channel.bulkDelete(numMessages);
        await interaction.reply('Messages deleted');
    }
}