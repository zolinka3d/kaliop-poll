const { createPollView } = require("../../templates/custom/views/poll/poll");

module.exports.commands = (app) => {
	app.command("/kaliopoll", async ({ command, body, client, ack, respond }) => {
		// client?

		// TODO
		// if client.roles.includes("poll_creator")
		// else respond("You don't have the rights to create a poll");

		await ack();
		console.log("command", JSON.stringify(command));
		console.log("body", JSON.stringify(body));
		console.log("client", JSON.stringify(client));

		const newView = createPollView(body.trigger_id);
		console.log("new createPollView", JSON.stringify(newView));
		await client.views.open(newView);
	});
};
