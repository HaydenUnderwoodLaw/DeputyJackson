

const {Discord, Client,GatewayIntentBits,Collection} = require("discord.js") 
const fs = require("fs") 
const { token} = require('./config.json');
const load = require("./deployCommands.js")
const path = require('node:path');
const client = new Client({intents: [GatewayIntentBits.Guilds]});
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const http = require("http");
const express = require("express");
const app = express();
const blacklist = require('./models/blacklist')
var server = require("http").createServer(app);
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
const listener = server.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
setInterval(() => {
  http.get(`StateFLOW`);
}, 280000);




const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://broken_bones:bEugpCeNfj8kSvXA@cluster0.p8j9b.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
console.log("Logged into mangodb")











for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

for (const file of eventFiles) { 
	const event = require(`./events/${file}`); 
	if (event.once) {
		client.once(event.name, (...args) => event.run(...args, client));
	} else {
		client.on(event.name, (...args) => event.run(...args, client)); 
	}
}


client.login(token)


