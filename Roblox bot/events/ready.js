
const Discord = require("discord.js")

module.exports = {
	name: 'ready', 
	once: true, 
	run(client) { 
		console.log("Successfully logged in as " + client.user.tag)

		client.user.setPresence({ activities: [{ name: 'The President Of The United States' }], status: 'idle' });


	}
}