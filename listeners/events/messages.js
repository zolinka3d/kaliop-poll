const { openViewButtons } = require("../../templates/custom/views/test/index");
const { twoButtonsBlock } = require("../../templates/custom/blocks/poll/poll");
module.exports.messageEvents = (app) => {
	app.message("test", async ({ message, say }) => {
		await say({
			blocks: openViewButtons(),
			text: "Do you have time for a little poll?",
		});
	});

	app.message("poll", async ({ message, say }) => {
		await say({
			blocks: twoButtonsBlock(),
		});
	});
};
