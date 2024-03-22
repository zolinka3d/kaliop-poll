const { WebClient } = require("@slack/web-api");

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

const welcomeMessage = require("../config/welcomeMessage.json");

module.exports.findChannelByUserId = async (userId) => {
	try {
		const result = await web.conversations.list({
			types: "im",
			limit: 100,
		});

		console.log("result", JSON.stringify(result));
		if (result.ok) {
			console.log("result.channels", JSON.stringify(result.channels));
			const userChannel = result.channels.filter((channel) =>
				channel.user.includes(userId),
			);

			return userChannel[0];
		} else {
			console.error("Error fetching channels:", result.error);
			return null;
		}
	} catch (error) {
		console.error("Error fetching channels:", error);
		return null;
	}
};

module.exports.history = async (channelId, client) => {
	const history = await client.conversations.history({
		token: process.env.SLACK_BOT_TOKEN,
		channel: channelId,
		limit: 20,
	});
	if (history.ok) {
		let lastMessage = history.messages[0];
		let i = 0;
		while (!lastMessage.text.includes(welcomeMessage.text)) {
			i++;
			lastMessage = history.messages[i];
		}

		console.log("last message", lastMessage);

		return lastMessage.ts;
	} else {
		console.error("Error fetching history:", history.error);
		return null;
	}
};

module.exports.findMembers = async (client, channelId) => {
	const members = await client.conversations.members({
		token: process.env.SLACK_BOT_TOKEN,
		channel: channelId,
	});

	console.log("members", JSON.stringify(members));

	return members.members;
};
