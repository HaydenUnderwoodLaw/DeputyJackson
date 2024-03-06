

const blacklist = require('../models/blacklist')
const { ActionRowBuilder,SlashCommandBuilder, MessageSelectMenu, ButtonBuilder, EmbedBuilder } = require('discord.js');

var d = new Date();
module.exports = {
	data: new SlashCommandBuilder()
		.setName('blacklist')
		.setDescription(`Owner only command`)
        
        .addUserOption(option =>
            option.setName('name')
			.setDescription('Name of user to blacklist')
			.setRequired(true))
            .addStringOption(option =>
                option.setName('reason')
                .setDescription('Reason for blacklist')
                .setRequired(true))
                .addStringOption(option =>
                    option.setName('robloxusername')
                    .setDescription('Roblox Username')
                    .setRequired(true)),

	async execute(interaction) {

        if(interaction.user.id !== '507730859571281932') return interaction.reply({content: "This is an owner only command",ephemeral: true });

        const user = interaction.options.getUser("name")
        const reason1 = interaction.options.getString("reason")
        const username = interaction.options.getString("robloxusername")






        const userid = await noblox.getIdFromUsername(username);
        const thumbnail = await noblox.getPlayerThumbnail(userid, 50, "png", false, "headshot");
        let avatarURL;
        let i;
        for (i = 0; i < thumbnail.length; i++) {
            if (thumbnail[i].targetId === userid) {
                avatarURL = thumbnail[i].imageUrl 
            }
        }

		let embed1 = n

        if(!user) return interaction.reply({content: "Not a vaild user",ephemeral: true });

    
        blacklist.findOne({ id : user.id }, async(err, data) => {


            if(err) throw err;
            if(data) {

                interaction.reply({content: `**${user.tag}** has already been blacklisted! \nReason: ${data.reason}`,ephemeral: true });
            } else {
                data = new blacklist({ id : user.id, reason : reason1 })
                data.save()
                .catch(err => console.log(err))
                interaction.reply({content: `${user.tag} has been added to blacklist. \nReason: ${reason1}`,ephemeral: true });
                const embed = new EmbedBuilder()
                .setAuthor({ name: 'User Blacklisted'})
                .setThumbnail(user.displayAvatarURL())
                 .addFields(
                    { name: 'User', value: `${user.tag}` },
                    { name: 'id', value: `${user.id}` },
                    { name: 'Reason', value: `${data.reason}` })
                 .setColor("#FF0000");

                 let embed1 = new EmbedBuilder()
                 .setTitle("Department Action")
                 .setDescription(`**${username}** has been blacklisted from the Department Of Homeland Security ** from ${date1} till ${date2}`)
                 .setColor("Red")
                 .setThumbnail(avatarURL)
              
               const loggchannel =  interaction.client.channels.cache.get("890450038927523870")

               loggchannel.send({ embeds: [embed1] });

            }
           
        })
    }
}