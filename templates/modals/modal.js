const submitButtons = require("../../config/submitButtons.json");

module.exports.modal = (callback_id, title_text) => {
	return {
		type: "modal",
		callback_id: callback_id,
		title: {
			type: "plain_text",
			text: title_text,
		},
		blocks: [],
	};
};

module.exports.modalWithSubmitButtons = (callback_id, title_text) => {
	const modal = this.modal(callback_id, title_text);
	modal.submit = {
		type: "plain_text",
		text: submitButtons.submit.text,
		emoji: true,
	};
	modal.close = {
		type: "plain_text",
		text: submitButtons.close.text,
		emoji: true,
	};
	return modal;
};
