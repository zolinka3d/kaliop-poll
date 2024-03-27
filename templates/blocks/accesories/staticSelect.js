const { text: createText } = require("../text/text");

module.exports.staticSelect = (action_id, text, options, placeholder) => {
	const newBlock = {
		type: "section",
		text: createText(text, "m"),
		accessory: {
			type: "static_select",
			placeholder: createText(placeholder),
			options: options,
			action_id: action_id,
		},
	};
	return newBlock;
};

module.exports.multiConversationsSelectSection = (
	action_id,
	text,
	placeholder,
) => {
	const newBlock = {
		type: "section",
		block_id: action_id,
		text: createText(text, "m"),
		accessory: {
			type: "conversations_select",
			placeholder: createText(placeholder),
			action_id: action_id,
		},
	};
	return newBlock;
};
