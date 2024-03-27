const {
	thanksView,
	noViewUpdated,
} = require("../../templates/custom/views/test");

const {
	updateCreatingPollViewError,
	updateCreatingPollViewCorrect,
} = require("../../templates/custom/views/poll/poll");

const errorMessage = require("../../config/error.json");

const { findMembers } = require("../../helpers/message");

module.exports.selectActions = (app) => {
	app.action("test_decision_select", async ({ ack, body, client, action }) => {
		await ack();

		if (action.selected_option.value === "No") {
			if (body.view.blocks.length == 1) {
				const noViewUpdate = noViewUpdated(body.view.id);

				console.log("newView", JSON.stringify(noViewUpdate));

				await client.views.update(noViewUpdate);
			}
		} else if (action.selected_option.value === "Yes") {
			let newView = thanksView(body.view.id);
			console.log("yes thank view", JSON.stringify(newView));
			await client.views.update(newView);
		}
	});

	app.action("conversation_select", async ({ ack, body, client, action }) => {
		await ack();

		try {
			await findMembers(client, action.selected_conversation);
			await client.views.update(
				updateCreatingPollViewCorrect(body.view.id, body.view.blocks),
			);
		} catch (error) {
			console.error("Error fetching members:", error);
			await client.views.update(
				updateCreatingPollViewError(
					body.view.id,
					body.view.blocks,
					errorMessage.wrongChatSelected,
				),
			);
		}
	});
};
