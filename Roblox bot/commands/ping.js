
const {SlashCommandBuilder, PermissionFlagsBits , EmbedBuilder, Discord} = require('discord.js');
const { truncateSync } = require('fs');


module.exports = {

	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!')
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
	
	async execute(interaction, client ) {
		if (!interaction.member.roles.cache.has('845697243541536799')){
    		let embed1 = new EmbedBuilder()
        .setTitle("You don't have perms to use this command")
		.setColor("Red")
		return await interaction.reply({embeds: [embed1]})
}

		let start = Date.now();

		let embed1 = new EmbedBuilder()
		.setDescription("Looks like the bot is slow.")
		.setColor("Red")
		await interaction.reply({
			embeds: [embed1]
		  })

	      let end = Date.now();

        let embed = new EmbedBuilder()
          .setTitle("Ping!")
		  .addFields({ name: 'API Latency', value: `${Math.round(interaction.client.ws.ping)}ms`, inline: true})
		  .addFields({ name: 'Message Latency', value: `${end - start}ms`, inline: true})
          .setColor("Green");

       interaction.editReply({ embeds: [embed] }).catch((e) => interaction.followUp(e));
  },
};