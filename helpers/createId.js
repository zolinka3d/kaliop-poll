const { findChannelName } = require("./message");

module.exports.createId = async (client, selectedConversation) => {
	const channelName = await findChannelName(client, selectedConversation);
	const poll_id = channelName + "-" + dateFormat();

	return poll_id;
};

const dateFormat = () => {
	const date = new Date();
	const hours = ("0" + date.getHours()).slice(-2);
	const minutes = ("0" + date.getMinutes()).slice(-2);
	const day = ("0" + date.getDate()).slice(-2);
	const month = ("0" + (date.getMonth() + 1)).slice(-2);
	const year = date.getFullYear();

	const formattedDateTime =
		hours + ":" + minutes + "-" + day + "-" + month + "-" + year;

	return formattedDateTime;
};
