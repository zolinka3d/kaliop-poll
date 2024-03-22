const {
	thanksView,
	noViewUpdated,
} = require("../../templates/custom/views/test");

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
};
