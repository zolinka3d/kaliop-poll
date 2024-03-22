const { firstView } = require("../../templates/custom/views/test");
const { noInputView } = require("../../templates/custom/views/poll/poll");
const thanksMessage = require("../../config/thanksMessage.json");

module.exports.buttonActions = (app) => {
	app.action("open_modal_test_button", async ({ ack, body, client }) => {
		await ack();

		console.log("body", JSON.stringify(firstView(body.trigger_id)));
		try {
			await client.views.open(firstView(body.trigger_id));
		} catch (error) {
			console.error(error);
		}
	});

	app.action("response_ok", async ({ ack, body, client }) => {
		console.log("body message.ts", JSON.stringify(body.message.ts));
		console.log("body channel.id", JSON.stringify(body.channel.id));
		await ack();
		await client.chat.update({
			token: process.env.SLACK_BOT_TOKEN,
			ts: body.message.ts,
			channel: body.channel.id,
			text: thanksMessage.text,
			blocks: [],
		});
	});

	app.action("response_no_ok", async ({ ack, body, client }) => {
		console.log("no body", JSON.stringify(body));
		await ack();
		try {
			await client.views.open(noInputView(body.trigger_id));
		} catch (error) {
			console.error(error);
		}
	});
};
