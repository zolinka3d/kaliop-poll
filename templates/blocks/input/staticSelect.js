const { text: createText } = require("../text/text");

module.exports.staticSelectInput = (action_id, text, options, placeholder) => {
	const newBlock = {
		type: "input",
		block_id: action_id,
		element: {
			type: "static_select",
			placeholder: createText(placeholder),
			initial_option: options[options.length - 1],
			options: options,
			action_id: action_id,
		},
		label: createText(text),
	};
	return newBlock;
};

module.exports.multiConversationsSelect = (action_id, text, placeholder) => {
	const newBlock = {
		type: "input",
		block_id: action_id,
		element: {
			type: "multi_conversations_select",
			placeholder: createText(placeholder),
			action_id: action_id,
		},
		label: createText(text),
	};
	return newBlock;
};
