const { dynamoDBClient } = require("./db");

module.exports.listItems = async (params) => {
	try {
		const items = await dynamoDBClient.scan(params).promise();
		console.log(JSON.stringify(items));
		return items.Items;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

module.exports.createItem = async (params) => {
	try {
		const item = await dynamoDBClient.putItem(params).promise();
		console.log(JSON.stringify(item));
		return item;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

module.exports.getItem = async (params) => {
	const item = await dynamoDBClient.getItem(params).promise();
	console.log(JSON.stringify(item));

	return item;
};

module.exports.updateItem = async (params) => {
	const response = await dynamoDBClient.updateItem(params).promise();
	return response;
};

module.exports.deleteItem = async (params) => {
	const response = await dynamoDBClient.deleteItem(params).promise();
	return response;
};

module.exports.deleteAllItems = async (params) => {
	const items = await dynamoDBClient.scan(params).promise();
	const promises = items.Items.map((item) => {
		const bufferParams = {
			TableName: "polls",
			Key: {
				id: item.id,
			},
		};
		return dynamoDBClient.deleteItem(bufferParams).promise();
	});

	return Promise.all(promises);
};
