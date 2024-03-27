const { openViewButtons } = require("../../templates/custom/views/test/index");
const { twoButtonsBlock } = require("../../templates/custom/blocks/poll/poll");

const {
	listItems,
	createItem,
	getItem,
	updateItem,
	deleteItem,
	deleteAllItems,
} = require("../../config/db/dbOperations");

const { Poll } = require("../../config/db/models");

module.exports.messageEvents = (app) => {
	app.message("test", async ({ say }) => {
		await say({
			blocks: openViewButtons(),
			text: "Do you have time for a little poll?",
		});
	});

	app.message("poll", async ({ say }) => {
		await say({
			blocks: twoButtonsBlock(),
		});
	});

	const id = "94ccd709-decd-41f0-a910-fac0bcd1a388";

	app.message("get items", async ({ say }) => {
		const params = {
			TableName: "polls",
		};
		try {
			const items = await listItems(params);
			await say(`List of items: ${JSON.stringify(items)}`);
		} catch (error) {
			await say(`Error: ${error}`);
		}
	});

	app.message("add item", async ({ message, say }) => {
		const startDate = new Date().toISOString();
		// due date + 1 day
		const dueDate = new Date(
			new Date().getTime() + 24 * 60 * 60 * 1000,
		).toISOString();

		const poll = new Poll("test 1", "en", startDate, dueDate, "zosia");

		console.log(poll);
		const params = {
			TableName: "polls",
			Item: poll,
		};

		try {
			const item = await createItem(params);
			await say(`Item added: ${item}`);
		} catch (error) {
			await say(`Error: ${error}`);
		}
	});

	app.message("get the item", async ({ message, say }) => {
		const params = {
			TableName: "polls",
			Key: {
				uuid: {
					S: id,
				},
			},
		};

		const item = await getItem(params);
		await say(`Item: ${JSON.stringify(item.Item)}`);
	});

	app.message("update item", async ({ message, say }) => {
		const newName = "test 2";
		const params = {
			TableName: "polls",
			Key: {
				id: {
					S: id,
				},
			},
			UpdateExpression: "set #name = :n",
			ExpressionAttributeNames: {
				"#name": "name",
			},
			ExpressionAttributeValues: {
				":n": {
					S: `${newName}`,
				},
			},
		};

		try {
			await updateItem(params);
			await say("Item updated succesfully");
		} catch (error) {
			console.error("update error", error);
			say("Something went wrong");
		}
	});

	app.message("delete item", async ({ say }) => {
		const params = {
			TableName: "polls",
			Key: {
				uuid: {
					S: id,
				},
			},
		};
		try {
			await deleteItem(params);
			await say("Item deleted succesfully");
		} catch (error) {
			say("Something went wrong");
		}
	});

	app.message("delete all items", async ({ say }) => {
		try {
			await deleteAllItems({ TableName: "polls" });
			await say("All items deleted");
		} catch (error) {
			console.error("delete all items error", error);
			await say("Something went wrong");
		}
	});
};
