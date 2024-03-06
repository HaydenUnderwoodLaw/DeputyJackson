
const { MessageEmbed ,SlashCommandBuilder ,PermissionFlagsBits } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Allows the admin or owner to kick the member.")
    .addUserOption((option) => option.setName('user').setDescription('The person who you want to kick').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('Reason to kick member').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

	async execute(interaction, client ) {
        if (!interaction.member.roles.cache.has('845697243541536799')){
    		let embed1 = new EmbedBuilder()
        .setTitle("You don't have perms to use this command")
		.setColor("Red")
		return await interaction.reply({embeds: [embed1]})
}

        const user = interaction.options.getUser('user')
        const member = interaction.guild.members.cache.get(user.id) || await interaction.guild.members.fetch(user.id).catch(err => {})

        if(!member) return interaction.followUp("😅 | Unable to get details related to given member.");
        const reason = interaction.options.getString('reason')

        if(!member.kickable || member.user.id === client.user.id) 
        return interaction.followUp("😅 | I am unable to kick this member");
        
        if(interaction.member.roles.highest.position <= member.roles.highest.position) 
        return interaction.followUp('Given member have higher or equal rank as you so i can not kick them.')
        
        const embed = new MessageEmbed()
        .setDescription(`**${member.user.tag}** is kicked out from the server for \`${reason}\``)
        .setColor("GREEN")
        .setFooter("Kick Member")
        .setFooter({ text: 'Some footer text here', iconURL: 'https://cdn.discordapp.com/icons/800898562786590771/992d0fe8b8ef622128a7750259f1b863.jpg' })

        .setTimestamp()

        await member.user.send(`You are kicked from **\`${interaction.guild.name}\`** for \`${reason}\``).catch(err => {})
        member.kick({ reason })

        return interaction.followUp({ embeds: [ embed ]})

    },
    
};