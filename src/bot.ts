import { config } from "dotenv"
config();

import { Client, Message } from "discord.js";
import { prefix } from "./config.json";

const client: Client = new Client();

client.once("ready", () => {
	console.log("Bot is ready!");
});

client.on("message", async (message: Message) => { 
	console.log(message.content);
		if (message.content.startsWith(`${prefix}ping`)) {
			message.channel.send(":rocket: pong");
			// message.reply('pong!');
		}

		if (message.content.startsWith(`https`)) {
			// message.channel.send("");
			message.reply('Gracias por compartir! Te mereces un :avocado:');
		}

		if (message.content.endsWith(`atacar`)) {
			message.channel.send("10 :avocado: si hace 3 estrellas");
		}

		if (message.content.endsWith(`Atacare`)) {
			message.channel.send("Éxito! :sunglasses: :thumbsup:");
		}

		if (message.content.endsWith(`Atacaré`)) {
			message.channel.send("Éxito! :sunglasses: :thumbsup:");
		}

		if (message.content.endsWith(`vieja`)) {
			message.reply("Eso fue grosero");
		}

		if (message.content.endsWith(`hija`)) {
			message.channel.send("Mi retoño");
		}

		if (message.content.endsWith(`joven`)) {
			message.reply("Gracias");
		}

		if (message.content.endsWith(`le sienta bien`)) {
			message.reply("Gracias");
		}

		if (message.content.endsWith(`se ve mejor`)) {
			message.reply("Gracias");
		}
});

client.login(process.env.DISCORD_TOKEN);